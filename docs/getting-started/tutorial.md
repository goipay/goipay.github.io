---
title: Tutorial
slug: tutorial
sidebar_position: 3
---

## Introduction

In this section, we’ll look at an example of how you can integrate GoiPay into your project.

The showcase project itself you can run using [folowing guide](https://github.com/goipay/example#getting-started).


## Basic Workflow

The interaction workflow between the external service and GoiPay is described in the diagram below.

![Workflow](/diagrams/basic_workflow.svg)

All these aspects will be explained further with code examples.


## User Registration

Before creating an invoice, we need to register a user and set the user's private view and public spend XMR keys.
This is necessary to generate subaddresses for payments and track the transaction state on the blockchain to verify the payment.

Although GoiPay is designed to support multiple users, for simplicity, we will use only one predefined user and it's keys in the `.env` file.

```ini title=".env"
USER_ID=de92d9a9-9e2e-4456-ba0b-20424c97fde2 # UUID

# XMR KEYS
XMR_PRIV_VIEW=8aa763d1c8d9da4ca75cb6ca22a021b5cca376c1367be8d62bcc9cdf4b926009
XMR_PUB_SPEND=38e9908d33d034de0ba1281aa7afe3907b795cea14852b3d8fe276e8931cb130

GOIPAY_ADDRESS=localhost:3001
```

### User Registration and Keys Setup

Here is the startup script that runs on server initialization.
It uses the gRPC client to create a user and set up XMR keys.

```ts title="startup.ts"
import { RegisterUserRequest, RegisterUserResponse, UpdateCryptoKeysRequest, UpdateCryptoKeysResponse } from '@/generated/goipay/user_pb'
import { userGrpcClient } from '@/lib/grpc-clients'
import { getEnvOrThrow } from '@/lib/utils'
import { XmrKeysUpdateRequest } from '@/generated/goipay/crypto_pb'
import { promisify } from 'util'
import { userId } from '@/lib/const'

(async () => {
    // User Registration
    const registerUserPromise = promisify(userGrpcClient.registerUser.bind(userGrpcClient)) as (
        request: RegisterUserRequest
    ) => Promise<RegisterUserResponse>

    try {
        const res = await registerUserPromise(new RegisterUserRequest().setUserid(userId))
        console.log(res.toObject())
    } catch (err) {
        console.error(err)
    }

    // Keys Update
    const updateKeysPromise = promisify(userGrpcClient.updateCryptoKeys.bind(userGrpcClient)) as (
        request: UpdateCryptoKeysRequest
    ) => Promise<UpdateCryptoKeysResponse>

    try {
        await updateKeysPromise(
            new UpdateCryptoKeysRequest()
                .setUserid(userId)
                .setXmrreq(new XmrKeysUpdateRequest().setPrivviewkey(getEnvOrThrow('XMR_PRIV_VIEW')).setPubspendkey(getEnvOrThrow('XMR_PUB_SPEND')))
        )
        console.log('Keys Updated')
    } catch (err) {
        console.error(err)
    }
})()
```

:::note
In the [DB Schema](/docs/development/architecture#db-schema), crypto keys have a unique constraint, meaning each user must have unique keys.
:::


## Subscribe to Invoice Status Notification Stream

In this API route, Server-Sent Events (SSE) are used as the transport mechanism between the client and server to receive updated invoices from the gRPC Invoice Status Stream.

```ts title="app/api/socket/route.ts"
import { InvoiceStatusStreamRequest, InvoiceStatusStreamResponse } from '@/generated/goipay/invoice_pb'
import { invoiceGrpcClient } from '@/lib/grpc-clients'

const encoder = new TextEncoder()
// The collection of subscribed clients.
const connectedClients = new Set<WritableStreamDefaultWriter>()

// Helper function to broadcast SSE messages to all subscribed clients.
function broadcast(message: string) {
    Array.from(connectedClients).forEach((client) => {
        client.write(encoder.encode(message)).catch((err) => {
            console.error('Error writing to client:', err)
            connectedClients.delete(client)
        })
    })
}

// The gRPC Invoice Status Stream that broadcasts each updated invoice to all SSE clients.
const stream = invoiceGrpcClient.invoiceStatusStream(new InvoiceStatusStreamRequest())
stream.on('data', (invRes: InvoiceStatusStreamResponse) => {
    broadcast(`event: new-invoice\ndata: ${JSON.stringify(invRes.getInvoice()?.toObject())}\n\n`)
})

// HTTP handler for establishing an SSE connection.
export async function GET() {
    const clientStream = new TransformStream()
    const writer = clientStream.writable.getWriter()
    connectedClients.add(writer)

    writer.write(encoder.encode('event: connected\ndata: keepalive\n\n')).catch(() => {
        connectedClients.delete(writer)
    })

    return new Response(clientStream.readable, {
        headers: {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache, no-transform',
        },
    })
}
```

So, we can establish an SSE connection on the client-side, subscribe to the `new-invoice` event, and render the received invoices on the frontend.

```tsx title="app/components/main.tsx"
// Client-side subscription to the SSE connection.
useEffect(() => {
    const sse = new EventSource('/api/socket')

    sse.onopen = () => {
        console.log('Connected to SSE')
    }
    sse.addEventListener('new-invoice', (e) => {
        const invoice = JSON.parse(e.data) as InvoiceGrpc.AsObject
        setInvoices((prev) => [mapInvoiceAsObjectToInvoice(invoice), ...prev.filter((i) => i.id !== invoice.id)])
    })
    sse.onerror = (e) => {
        console.error('SSE connection error:', e)
    }

    return () => {
        sse.close()
        console.log('SSE connection closed')
    }
}, [])
```

```tsx title="app/components/main.tsx"
// Rendering the content of each tab, displaying invoices filtered by their status.
{tabs.map((t) => (
    <TabsContent key={t.val} value={t.val} className="h-[calc(100vh-250px)] overflow-auto">
        <InvoicesPageTab header={t.header} invoices={invoices.filter((i) => i.status === t.status)} />
    </TabsContent>
))}
```

## Create Invoice

:::note
Partial payments are not supported. 
If you pay less than the required amount, you will need to pay the full amount again.
:::

```tsx title="app/components/footer.tsx"
// Creating a new invoice via the gRPC client.
async function handleNewInvoiceSubmit(formData: FormData) {
    'use server'
    const createInvoicePromise = promisify(invoiceGrpcClient.createInvoice.bind(invoiceGrpcClient)) as (
        request: CreateInvoiceRequest
    ) => Promise<CreateInvoiceResponse>

    const userId = formData.get('userId') as string
    const amount = formData.get('amount') as string
    const confirmations = formData.get('confirmations') as string
    const timeout = formData.get('timeout') as string
    if (!amount || !confirmations || !userId || !timeout) return

    try {
        await createInvoicePromise(
            new CreateInvoiceRequest()
                .setUserid(userId)
                .setCoin(CoinType.XMR)
                .setAmount(parseFloat(amount))
                .setConfirmations(parseInt(confirmations))
                .setTimeout(parseInt(timeout))
        )
    } catch (err) {
        console.error(err)
    }
}
```

:::note
The timeout option in the request applies to all conditions, including amount and confirmations.
If the required amount or more is paid, but the required number of confirmations hasn't been met by the time the timeout expires, the invoice will be considered expired.
:::
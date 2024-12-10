---
title: TLS
slug: usage
sidebar_position: 1
displayed_sidebar: docsSidebar
---

# Using TLS

Since `v0.4.0`, GoiPay supports TLS connections to enhance security and ensure encrypted communication between clients and the server.

## Configuration
For more detailed configuration [see this](/docs/getting-started/configuration)

### TLS Modes
1. **`none`**: No encryption is applied. Communication is sent as plain text.
2. **`tls`**: Enables one-way TLS where the server provides a certificate to the client.
3. **`mtls`**: Enables mutual TLS (mTLS) where both the server and client verify each other's certificates.

## Setting Up Certificates
1. **Generate Certificates**: Use tools like `openssl` or a certificate authority to generate the required certificates and keys.
   
   Example command to generate self-signed certificates:
   ```bash
   openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.crt -days 365 -nodes
   ```

2. **Store Certificates**: Place the generated certificates and keys in a secure directory accessible by your GoiPay application.

3. **Update Configuration**: Point to the certificate and key files in the `tls` section of your configuration or via enviroment variables.

## Enabling TLS in Client Applications
When connecting to a GoiPay server using TLS, ensure your client application is configured to trust the server's certificate.

### Example in TypeScript
```ts title="lib/grpc-clients.ts"
import { UserServiceClient } from '@/generated/goipay/user_grpc_pb'
import { credentials } from '@grpc/grpc-js'
import { InvoiceServiceClient } from '@/generated/goipay/invoice_grpc_pb'
import { goipayAddr } from './const'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const clientCert = readFileSync(resolve(process.cwd(), './external/goipay/cert/client/client.crt'))
const clientKey = readFileSync(resolve(process.cwd(), './external/goipay/cert/client/client.key'))
const serverCaCert = readFileSync(resolve(process.cwd(), './external/goipay/cert/server/ca.crt'))

const creds = credentials.createSsl(serverCaCert, clientKey, clientCert)

export const userGrpcClient = new UserServiceClient(goipayAddr, creds)
export const invoiceGrpcClient = new InvoiceServiceClient(goipayAddr, creds)
```
[Link to the project](https://github.com/goipay/example)

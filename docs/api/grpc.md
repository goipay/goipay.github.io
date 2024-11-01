---
title: gRPC API
slug: grpc
sidebar_position: 1
displayed_sidebar: apiReferenceSidebar
---

## UserService

### RegisterUser

- **Type**: Unary RPC
- **Request**: `RegisterUserRequest`
- **Response**: `RegisterUserResponse`

Creates a new user, either by generating a new UUID or by using a UUID specified in the request.

<div id="registeruserrequest"></div>

**Request Message**: `RegisterUserRequest`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>No</td>
      <td>The unique UUID of the user.</td>
    </tr>
  </tbody>
</table>

<div id="registeruserresponse"></div>

**Response Message**: `RegisterUserResponse`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>The unique UUID of the user.</td>
    </tr>
  </tbody>
</table>

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InvalidArgument</td>
      <td>invalid userId (uuid)</td>
      <td>Provided in the request userId is not a UUID.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while initiating an SQL transaction.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while executing a SQL query.</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>


### UpdateCryptoKeys

- **Type**: Unary RPC
- **Request**: `UpdateCryptoKeysRequest`
- **Response**: `UpdateCryptoKeysResponse`

Updates the user`s crypto keys.

<div id="updatecryptokeysrequest"></div>

**Request Message**: `UpdateCryptoKeysRequest`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>Yes</td>
      <td>The unique UUID of the user.</td>
    </tr>
    <tr>
      <td>xmrReq</td>
      <td><a href="#xmrkeysupdaterequest">XmrKeysUpdateRequest</a></td>
      <td>No</td>
      <td>XMR crypto keys update request.</td>
    </tr>
  </tbody>
</table>

<div id="updatecryptokeysresponse"></div>

**Response Message**: `UpdateCryptoKeysResponse`

None.

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InvalidArgument</td>
      <td>invalid userId</td>
      <td>Provided in the request userId is not a UUID.</td>
    </tr>
    <tr>
      <td>InvalidArgument</td>
      <td>Invalid userId</td>
      <td>The user with the provided userId in the request does not exist.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while initiating an SQL transaction.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while executing a SQL query.</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>


### GetCryptoKeys

:::warning

Deprecated.

:::

- **Type**: Unary RPC
- **Request**: `GetCryptoKeysRequest`
- **Response**: `GetCryptoKeysResponse`

Returns the user`s crypto keys.

<div id="getcryptokeysrequest"></div>

**Request Message**: `GetCryptoKeysRequest`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>Yes</td>
      <td>The unique UUID of the user.</td>
    </tr>
  </tbody>
</table>

<div id="getcryptokeysresponse"></div>

**Response Message**: `GetCryptoKeysResponse`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>xmrKeys</td>
      <td><a href="#xmrkeys">XmrKeys</a></td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InvalidArgument</td>
      <td>invalid userId</td>
      <td>Provided in the request userId is not a UUID.</td>
    </tr>
    <tr>
      <td>InvalidArgument</td>
      <td>Invalid userId</td>
      <td>The user with the provided userId in the request does not exist.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while initiating an SQL transaction.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while executing a SQL query.</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>


## InvoiceService

### CreateInvoice

- **Type**: Unary RPC
- **Request**: `CreateInvoiceRequest`
- **Response**: `CreateInvoiceResponse`

Creates a new invoice. 

<div id="createinvoicerequest"></div>

**Request Message**: `CreateInvoiceRequest`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>Yes</td>
      <td>The unique UUID of the user.</td>
    </tr>
    <tr>
      <td>coin</td>
      <td><a href="#cointype">CoinType</a></td>
      <td>Yes</td>
      <td>The type of cryptocurrency for which the invoice is generated.</td>
    </tr>
    <tr>
      <td>amount</td>
      <td>double</td>
      <td>Yes</td>
      <td>The amount of cryptocurrency should be invoiced.</td>
    </tr>
    <tr>
      <td>timeout</td>
      <td>uint64</td>
      <td>Yes</td>
      <td>The maximum duration (in seconds) that the system should wait for an invoice to be paid before timing out.</td>
    </tr>
    <tr>
      <td>confirmations</td>
      <td>uint32</td>
      <td>Yes</td>
      <td>The number of confirmations required for the transaction to validate the invoice.</td>
    </tr>
  </tbody>
</table>

<div id="createinvoiceresponse"></div>

**Response Message**: `CreateInvoiceResponse`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paymentId</td>
      <td>string</td>
      <td>The unique UUID of the invoice.</td>
    </tr>
    <tr>
      <td>address</td>
      <td>string</td>
      <td>The cryptocurrency address that was assigned to the invoice.</td>
    </tr>
  </tbody>
</table>

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InvalidArgument</td>
      <td>Invoice amount can't be below 0</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while handling invoice.</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### InvoiceStatusStream

- **Type**: Stream RPC
- **Request**: `InvoiceStatusStreamRequest`
- **Response**: `InvoiceStatusStreamResponse`

The stream RPC provides real-time updates on the status of invoices.

<div id="invoicestatusstreamrequest"></div>

**Request Message**: `InvoiceStatusStreamRequest`

None.

<div id="invoicestatusstreamresponse"></div>

**Response Stream Message**: `InvoiceStatusStreamResponse`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>invoice</td>
      <td><a href="#invoice">Invoice</a></td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Canceled</td>
      <td>stream has been closed</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Canceled</td>
      <td>An error occured while sending data</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### GetInvoices

:::warning

Deprecated.

:::

- **Type**: Unary RPC
- **Request**: `GetInvoicesRequest`
- **Response**: `CreateInvoiceResponse`

The stream RPC provides real-time updates on the status of invoices.

<div id="getinvoicesrequest"></div>

**Request Message**: `GetInvoicesRequest`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paymentIds</td>
      <td>string[]</td>
      <td>Yes</td>
      <td>The array of invoice UUID`s that should be retrieved.</td>
    </tr>
  </tbody>
</table>

<div id="getinvoicesresponse"></div>

**Response Stream Message**: `GetInvoicesResponse`

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>invoice</td>
      <td><a href="#invoice">Invoice[]</a></td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

**Errors:**

<table>
  <thead>
    <tr>
      <th>Error Code</th>
      <th>Message</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Internal</td>
      <td>invalid payment id</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while executing a SQL transaction.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Internal</td>
      <td>An error occurred while executing a SQL query.</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

## Misc types/enums

### Invoice

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>string</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>cryptoAddress</td>
      <td>string</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>coin</td>
      <td><a href="#cointype">CoinType</a></td>
      <td>None.</td>
    </tr>
    <tr>
      <td>requiredAmount</td>
      <td>double</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>actualAmount</td>
      <td>double</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>confirmationsRequired</td>
      <td>uint32</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>google.protobuf.Timestamp</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>confirmedAt</td>
      <td>google.protobuf.Timestamp</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>status</td>
      <td><a href="#invoicestatustype">InvoiceStatusType</a></td>
      <td>None.</td>
    </tr>
    <tr>
      <td>expiresAt</td>
      <td>google.protobuf.Timestamp</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>txId</td>
      <td>string</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>userId</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### InvoiceStatusType

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PENDING</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>PENDING_MEMPOOL</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>EXPIRED</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>CONFIRMED</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### CoinType

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>XMR</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>BTC</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>LTC</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>ETH</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>TON</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### XmrKeysUpdateRequest

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>privViewKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>pubSpendKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### XmrKeys

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>privViewKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>pubSpendKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>
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
      <td>Invalid userId (invalid UUID).</td>
      <td>Provided in the request userId is not a UUID.</td>
    </tr>
    <tr>
      <td>InvalidArgument</td>
      <td>Invalid userId (user exists).</td>
      <td>Provided in the request userId already exists in DB.</td>
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
    <tr>
      <td>btcReq</td>
      <td><a href="#btckeysupdaterequest">BtcKeysUpdateRequest</a></td>
      <td>No</td>
      <td>BTC crypto keys update request.</td>
    </tr>
    <tr>
      <td>ltcReq</td>
      <td><a href="#ltckeysupdaterequest">LtcKeysUpdateRequest</a></td>
      <td>No</td>
      <td>LTC crypto keys update request.</td>
    </tr>
    <tr>
      <td>ethReq</td>
      <td><a href="#ethkeysupdaterequest">EthKeysUpdateRequest</a></td>
      <td>No</td>
      <td>ETH crypto keys update request.</td>
    </tr>
    <tr>
      <td>bnbReq</td>
      <td><a href="#bnbkeysupdaterequest">BnbKeysUpdateRequest</a></td>
      <td>No</td>
      <td>BNB crypto keys update request.</td>
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
      <td>Invalid userId (invalid UUID).</td>
      <td>Provided in the request userId is not a UUID.</td>
    </tr>
    <tr>
      <td>InvalidArgument</td>
      <td>Invalid userId (user does not exist).</td>
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
      <td>Invoice amount can't be below 0.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>InvalidArgument</td>
      <td>Invalid userId (user does not exist).</td>
      <td>The user with the provided userId in the request does not exist.</td>
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
      <td>Stream has been closed.</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>Canceled</td>
      <td>An error occured while sending data.</td>
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
    <tr>
      <td>USDT_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>USDC_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>DAI_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>WBTC_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>UNI_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>LINK_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>AAVE_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>CRV_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>MATIC_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>SHIB_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>BNB_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>ATOM_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>ARB_ERC20</td>
      <td>ERC-20 token.</td>
    </tr>
    <tr>
      <td>BNB</td>
      <td>None.</td>
    </tr>
    <tr>
      <td>BSCUSD_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>USDC_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>DAI_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>BUSD_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>WBTC_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>BTCB_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>UNI_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>LINK_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>AAVE_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>MATIC_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>SHIB_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>ATOM_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>ARB_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>ETH_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>XRP_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>ADA_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>TRX_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>DOGE_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>LTC_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>BCH_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>TWT_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>AVAX_BEP20</td>
      <td>BEP-20 token</td>
    </tr>
    <tr>
      <td>CAKE_BEP20</td>
      <td>BEP-20 token</td>
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

### BtcKeysUpdateRequest

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
      <td>masterPubKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### LtcKeysUpdateRequest

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
      <td>masterPubKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### EthKeysUpdateRequest

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
      <td>masterPubKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>

### BnbKeysUpdateRequest

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
      <td>masterPubKey</td>
      <td>string</td>
      <td>None.</td>
    </tr>
  </tbody>
</table>
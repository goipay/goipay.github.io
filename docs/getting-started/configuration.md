---
title: Configuration
slug: configuration
sidebar_position: 2
---

Here you can see an example env file:
```shell
# Can be either 'prod' or 'dev'.
# In 'dev' mode, a reflection server is established.
MODE=dev

SERVER_HOST=0.0.0.0
SERVER_PORT=3000

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=postgres
DATABASE_NAME=crypto_gateway_test

XMR_DAEMON_URL=http://node.monerodevs.org:38089
XMR_DAEMON_USER=
XMR_DAEMON_PASS=
```
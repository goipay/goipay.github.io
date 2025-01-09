---
title: Configuration
slug: configuration
sidebar_position: 2
---

## Config file

```yaml title="config.yml"
server:
  host: ${SERVER_HOST}
  port: ${SERVER_PORT}
  tls:
    mode: ${SERVER_TLS_MODE}
    ca: ${SERVER_TLS_CA}
    cert: ${SERVER_TLS_CERT}
    key: ${SERVER_TLS_KEY}

database:
  host: ${DATABASE_HOST}
  port: ${DATABASE_PORT}
  user: ${DATABASE_USER}
  pass: ${DATABASE_PASS}
  name: ${DATABASE_NAME}

coin:
  xmr:
    daemon:
      url: ${XMR_DAEMON_URL}
      user: ${XMR_DAEMON_USER}
      pass: ${XMR_DAEMON_PASS}
  btc:
    daemon:
      url: ${BTC_DAEMON_URL}
      user: ${BTC_DAEMON_USER}
      pass: ${BTC_DAEMON_PASS}
```

<details>
    <summary>server</summary>
    <p><strong>Description:</strong> Configuration settings related to the server, including its host, port, and TLS settings.</p>
    <details>
        <summary>host</summary>
        <div>
            <p><strong>Description:</strong> The hostname or IP address where the server will run.</p>
            <p><strong>CLI Option:</strong> <code>none</code></p>
            <p><strong>Environment Variable:</strong> <code>SERVER_HOST</code></p>
            <p><strong>Default Value:</strong> <code>none</code></p>
        </div>
    </details>
    <details>
        <summary>port</summary>
        <div>
            <p><strong>Description:</strong> The port number the server listens on for incoming connections.</p>
            <p><strong>CLI Option:</strong> <code>none</code></p>
            <p><strong>Environment Variable:</strong> <code>SERVER_PORT</code></p>
            <p><strong>Default Value:</strong> <code>none</code></p>
        </div>
    </details>
    <details>
        <summary>tls</summary>
        <details>
            <summary>mode</summary>
            <div>
                <p><strong>Description:</strong> The mode of TLS security used (<code>none</code>, <code>tls</code>, <code>mtls</code>)</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>SERVER_TLS_MODE</code></p>
                <p><strong>Default Value:</strong> <code>none (empty)</code></p>
            </div>
        </details>
        <details>
            <summary>ca</summary>
            <div>
                <p><strong>Description:</strong> Path to the Certificate Authority (CA) file used for verifying TLS connections.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>SERVER_TLS_CA</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>cert</summary>
            <div>
                <p><strong>Description:</strong> Path to the server's TLS certificate file.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>SERVER_TLS_CERT</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>key</summary>
            <div>
                <p><strong>Description:</strong> Path to the server's private key file used for TLS encryption.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>SERVER_TLS_KEY</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
    </details>
</details>

<details>
    <summary>database</summary>
    <p><strong>Description:</strong> Configuration settings related to the database connection, including the host, port, credentials, and database name.</p>
    <details>
        <summary>host</summary>
            <div>
                <p><strong>Description:</strong> The hostname or IP address of the database server.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>DATABASE_HOST</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>port</summary>
            <div>
                <p><strong>Description:</strong> The port number used to connect to the database server.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>DATABASE_PORT</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>user</summary>
            <div>
                <p><strong>Description:</strong> The username for authenticating with the database.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>DATABASE_USER</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>pass</summary>
            <div>
                <p><strong>Description:</strong> The password for authenticating with the database.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>DATABASE_PASS</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
        <details>
            <summary>name</summary>
            <div>
                <p><strong>Description:</strong> The name of the specific database to connect to.</p>
                <p><strong>CLI Option:</strong> <code>none</code></p>
                <p><strong>Environment Variable:</strong> <code>DATABASE_NAME</code></p>
                <p><strong>Default Value:</strong> <code>none</code></p>
            </div>
        </details>
</details>

<details>
    <summary>coin</summary>
    <p><strong>Description:</strong> Configuration settings for cryptocurrency-related integrations.</p>
    <details>
        <summary>xmr</summary>
        <details>
            <summary>daemon</summary>
            <details>
                <summary>url</summary>
                <div>
                    <p><strong>Description:</strong> The URL of the Monero (XMR) daemon endpoint.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>XMR_DAEMON_URL</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
            <details>
                <summary>user</summary>
                <div>
                    <p><strong>Description:</strong> The username for authenticating with the XMR daemon.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>XMR_DAEMON_USER</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
            <details>
                <summary>pass</summary>
                <div>
                    <p><strong>Description:</strong> The password for authenticating with the XMR daemon.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>XMR_DAEMON_PASS</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
        </details>
    </details>
    <details>
        <summary>btc</summary>
        <details>
            <summary>daemon</summary>
            <details>
                <summary>url</summary>
                <div>
                    <p><strong>Description:</strong> The URL of the Bitcoin (BTC) daemon endpoint.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>BTC_DAEMON_URL</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
            <details>
                <summary>user</summary>
                <div>
                    <p><strong>Description:</strong> The username for authenticating with the BTC daemon.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>BTC_DAEMON_USER</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
            <details>
                <summary>pass</summary>
                <div>
                    <p><strong>Description:</strong> The password for authenticating with the BTC daemon.</p>
                    <p><strong>CLI Option:</strong> <code>none</code></p>
                    <p><strong>Environment Variable:</strong> <code>BTC_DAEMON_PASS</code></p>
                    <p><strong>Default Value:</strong> <code>none</code></p>
                </div>
            </details>
        </details>
    </details>
</details>

## Example env file

Here you can see an example .env file:
```ini title=".env.example"
SERVER_HOST=0.0.0.0
SERVER_PORT=3000

SERVER_TLS_MODE=tls
SERVER_TLS_CA=/app/cert/server/ca.crt
SERVER_TLS_CERT=/app/cert/server/server.crt
SERVER_TLS_KEY=/app/cert/server/server.key

# As for now, only PostgreSQL is supported
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASS=postgres
DATABASE_NAME=goipay_db

XMR_DAEMON_URL=http://node.monerodevs.org:38089
XMR_DAEMON_USER=
XMR_DAEMON_PASS=

BTC_DAEMON_URL=http://localhost:38332
BTC_DAEMON_USER=user
BTC_DAEMON_PASS=pass
```

## Misc CLI options
<details>
    <summary>--config</summary>
    <div>
        <p><strong>Description:</strong> Path to the config file.</p>
        <p><strong>Environment Variable:</strong> <code>none</code></p>
        <p><strong>Default Value:</strong> <code>config.yml</code></p>
    </div>
</details>
<details>
    <summary>--reflection</summary>
    <div>
        <p><strong>Description:</strong> Enables gRPC server reflection.</p>
        <p><strong>Environment Variable:</strong> <code>none</code></p>
        <p><strong>Default Value:</strong> <code>false</code></p>
    </div>
</details>
<details>
    <summary>--client-ca</summary>
    <div>
        <p><strong>Description:</strong> Comma-separated list of paths to client certificate authority files (for mTLS).</p>
        <p><strong>Environment Variable:</strong> <code>none</code></p>
        <p><strong>Default Value:</strong> <code>none</code></p>
    </div>
</details>
<details>
    <summary>--log-level</summary>
    <div>
        <p><strong>Description:</strong> Defines the logging level (<code>debug</code>, <code>info</code>, <code>warn</code>, <code>error</code>, <code>fatal</code>, <code>panic</code>).</p>
        <p><strong>Environment Variable:</strong> <code>LOG_LEVEL</code></p>
        <p><strong>Default Value:</strong> <code>info</code></p>
    </div>
</details>
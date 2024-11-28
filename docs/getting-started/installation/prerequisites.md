---
title: Prerequisites
description: Covering the steps to complete before setting up the project.
slug: prerequisites
sidebar_position: 1
---

## Prerequisites
- Go ≥ 1.22
- PostgreSQL ≥ 12
- Installed Docker (for docker installation)

## Database Setup
For properly working app you need to apply migrations on the db.

### CLI

1. Clone the repo 
```shell 
git clone https://github.com/goipay/goipay
```
2. Run
```shell 
cd goipay
```
3. Install goose
```shell 
go install github.com/pressly/goose/v3/cmd/goose@latest
```
4. Apply migrations
```shell
goose -dir ./sql/migrations postgres postgresql://YOUR_DB_USER:YOUR_DB_PASS@YOUR_DB_HOST:YOUR_DB_PORT/YOUR_DB_NAME up
```


### Docker
Also you can apply migrations usign docker container.

#### Docker Compose
```yaml
migrations:
    image: ghcr.io/kukymbr/goose-docker:3.21.1
    environment:
    - GOOSE_DRIVER=postgres
    - GOOSE_DBSTRING=host=YOUR_DB_HOST port=YOUR_DB_PORT user=YOUR_DB_USER password=YOUR_DB_PASS dbname=YOUR_DB_NAME
    volumes:
    - PATH_TO_THE_MIGRATIONS_FOLDER:/migrations
```
#### Docker Command
```shell
docker run --rm \
    -e GOOSE_DRIVER=postgres \
    -e GOOSE_DBSTRING="host=YOUR_DB_HOST port=YOUR_DB_PORT user=YOUR_DB_USER password=YOUR_DB_PASS dbname=YOUR_DB_NAME" \
    -v PATH_TO_THE_MIGRATIONS_FOLDER:/migrations \
    ghcr.io/kukymbr/goose-docker:3.21.1 \
```

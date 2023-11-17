## Prerequisites

- python 3
- bash
- make
- optionally - docker

## Quick Start

Use either of the following local or docker instructions

### Local

#### Setup

- `python3.10 -m venv .venv` # adjust here and in Dockerfile if you want to use a different version number
- `source .venv/bin/activate`
- `pip install -r requirements.txt`
- `cp .env.example .env`
- `make reset-db`
- `make seed-db`

#### Run

- `make dev`
- access the app at `http://localhost:9000`
  - there is a health check route at `http://localhost:9000/health_checks`
  - to view available routes run `PYTHONPATH=src FLASK_APP=app:app flask routes`

#### Test

- `make test`

### Docker

#### Setup

- `make docker-init`
- `make docker-reset-db`
- `make docker-seed-db`

#### Run

- `make docker-dev`
- access the app at `http://localhost:9000`
  - there is a health check route at `http://localhost:9000/health_checks`
  - to view available routes run `docker compose run --rm app flask routes`

#### Test

- `make docker-test`

#### Access a MySQL shell

- To can access a MySQL shell in the db container run `make docker-db-shell`

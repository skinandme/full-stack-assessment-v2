## Prerequisites
* python 3
* bash
* make
* optionally - docker


## Quick Start

Use either of the following local or docker instructions

### Local
#### Setup
* `python3 -m venv .venv`
* `source .venv/bin/activate`
* `pip install -r requirements.txt`
* `make local-reset-db`
#### Run
* `make local-run`
* access the app at `http://localhost:9000`
    * example route at `/foo`
#### Test
* `make local-test`

### Docker
#### Setup
* `make docker-init`
#### Run
* `make docker-run`
* access the app at `http://localhost:9000`
    * example route at `/foo`
#### Test
* `make docker-test`

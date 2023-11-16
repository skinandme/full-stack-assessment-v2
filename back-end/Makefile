.SILENT: help
.PHONY: default
default: help
.PHONY: help
help: ## Show this help message.
	echo 'usage: make [target] ...'
	echo
	echo 'targets:'
	# The following will dynamically print all targets that have a comment beginning with '##'.
	egrep '^([^_].*)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

.PHONY: reset-db
reset-db: ## Reset the local db
	PYTHONPATH=src FLASK_APP=app:app FLASK_ENV=development flask cli create-db --drop-existing

.PHONY: seed-db
seed-db: ## Seed the local db
	PYTHONPATH=src FLASK_APP=app:app FLASK_ENV=development flask cli seed-db

.PHONY: dev
dev: ## Run the app in development mode
	PYTHONPATH=src FLASK_APP=app:app FLASK_ENV=development flask run --host 0.0.0.0 --port 9000 --with-threads

.PHONY: test
test: ## Run the tests
	PYTHONPATH=src pytest

.PHONY: docker-init
docker-init: ## Build the docker container(s)
	docker-compose build

.PHONY: docker-dev
docker-dev: ## Run the project with docker compose
	docker-compose up

.PHONY: docker-reset-db
docker-reset-db: ## Reset the database in docker
	docker compose run --rm app flask cli create-db --drop-existing

.PHONY: docker-seed-db
docker-seed-db: ## Seeds the database in docker
	docker compose run --rm app flask cli seed-db

.PHONY: docker-db-shell
docker-db-shell: ## Gives you access to a mysql shell on the db container. Find the MYSQL_PASSWORD in the docker compose file. 
	docker compose run --rm db mysql -h db -u dev -p

.PHONY: docker-test
docker-test: ## Run the tests in docker
	docker-compose run --rm app pytest
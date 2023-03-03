
.PHONY: local-reset-db
local-reset-db:
	PYTHONPATH=src FLASK_APP=app:app FLASK_ENV=development flask dev create-db --drop-existing


.PHONY: local-run
local-run:
	PYTHONPATH=src FLASK_APP=app:app FLASK_ENV=development flask run --host 0.0.0.0 --port 9000

.PHONY: local-test
local-test:
	PYTHONPATH=src pytest



.PHONY: docker-init
docker-init:
	docker-compose build
	docker-compose run --rm app flask dev create-db

.PHONY: docker-run
docker-run:
	docker-compose up -d

.PHONY: docker-test
docker-test:
	docker-compose run --rm app pytest
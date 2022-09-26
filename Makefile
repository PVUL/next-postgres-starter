.PHONY: clean
clean:
	docker-compose down
	docker-compose down --volumes

.PHONY: install
npm-install:
	docker-compose run --rm next-app npm install

.PHONY: migrate
migrate: ## Apply all pending migrations.
	docker-compose run --rm next-app npx sequelize-cli db:migrate

.PHONY: migrate/down
migrate/down: ## Undo the last migration.
	docker-compose run --rm next-app npx sequelize-cli db:migrate:undo

.PHONY: pgdump
pgdump: ## Run pg_dump.
	docker-compose run --rm db pg_dump postgres://next_starter:next_starter@db/next_starter

.PHONY: pgdump/data
pgdump/data: ## Run pg_dump (data only).
	docker-compose run --rm db pg_dump --data-only postgres://next_starter:next_starter@db/next_starter | grep -v '^SET '

.PHONY: pgdump/schema
pgdump/schema: ## Run pg_dump (schema only).
	docker-compose run --rm db pg_dump --schema-only postgres://next_starter:next_starter@db/next_starter
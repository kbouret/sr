# Makefile for SoumissionRenovation API Demo

# Variables
ENV_FILE=.env

# Install project dependencies
install:
	npm install

# Create .env file from .env.dev
create-env:
	@if [ ! -f $(ENV_FILE) ]; then \
		echo "Creating .env file..."; \
		cp .env.dev .env; \
	else \
		echo ".env file already exists."; \
	fi

# Build and run the Docker container in detached mode
docker-up:
	docker-compose up --build -d

# Wait for API to be ready
wait-for-api:
	@echo "Waiting for API to be ready..."
	@while ! curl -s http://localhost:3000 > /dev/null; do \
		echo "Waiting..."; \
		sleep 5; \
	done

# Run TypeORM migrations
run-migrations: wait-for-api
	@echo "Running migrations..."
	docker-compose exec api npx typeorm migration:run

# Load data fixtures into the database
load-fixtures: wait-for-api
	@echo "Loading data fixtures..."
	docker-compose exec api node src/fixtures/seed.js
	@echo "Fixtures loaded. Exiting..."

# Full setup: install, create .env, run docker, run migrations, load fixtures
setup: install create-env docker-up run-migrations load-fixtures

.PHONY: install create-env docker-up run-migrations load-fixtures test setup wait-for-api

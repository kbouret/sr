SoumissionRenovation API - Demo
This project represents a RESTful API for a demo named SoumissionRenovation. It uses the Express framework, TypeORM as the ORM, and runs inside a Docker container.
The API routes are available via Postman. To get access, request the Postman collection by contacting: kevin.bouret@gmail.com.

# Installation via Makefile
Run the following command to quickly set up the project using the Makefile

`make setup`

# Manual Installation Steps
Follow these steps if you're setting up the project manually.

## Run the following command to install all project dependencies:
`npm install`

## Create .env file
`cp .env.dev .env`

## Run the Docker Container
`docker-compose up --build`

## Run Migrations
`docker-compose exec api npx typeorm migration:run`

## Load Data Fixtures
`docker-compose exec api node src/fixtures/seed.js`

## test
`http://localhost:3000/projects`
Be sure to include the Authorization Bearer token in your request headers. You can find the token in the .env file.
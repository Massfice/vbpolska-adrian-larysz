# Posts API - System Overview - Adrian Larysz

This repository contains a multi-component system designed to manage posts and logging services. The system consists of several key components that are connected via **NATS** for communication between services and utilizes **MongoDB** as a database.

## Components

The system contains the following components:

### 1. **Main Application (HTTP Server)**

- **Purpose**: Serves the main API of the application, exposing endpoints for handling posts.
- **Port**: By default, it listens on port `3000`.
- **Swagger UI**: The API documentation is available at `localhost:3000/swagger`.
- **Access**: The main API exposes public REST endpoints (through HTTP).

### 2. **Posts Microservice**

- **Purpose**: Responsible for managing posts (creating, fetching, updating, deleting). It communicates via **NATS** as a transport layer.
- **Transport Type**: NATS (not exposed externally).
- **Access**: It is not directly exposed as it communicates via internal NATS messaging.

### 3. **Logger Microservice**

- **Purpose**: Collects logs from the application and stores them or forwards them as required. It communicates via **NATS**.
- **Transport Type**: NATS (not exposed externally).
- **Access**: It is not directly exposed but performs logging tasks within the system.

### 4. **MongoDB**

- **Purpose**: Acts as the main database for storing post data and other application-related information.
- **Access**: The MongoDB instance is used internally and is not exposed externally.

### 5. **NATS**

- **Purpose**: Provides the transport mechanism between services.
- **Access**: NATS acts as an internal message broker (not exposed to the outside world).

## Environment Setup

There are two **Docker Compose** configurations available: **production** and **development**.

### Docker Compose - Production Version

The production version is designed for use in a production environment. It runs the core services without MongoDB and NATS exposed externally.

```bash
docker-compose up -d
```

### Docker Compose - Development Version

The production version is designed for use in a production environment. It runs the core services without MongoDB and NATS exposed externally.

```bash
docker-compose -f docker-compose-dev.yaml up -d
```

(Additionally `example.env` should be copied as `.env`)

## Useful Commands

### Starting the Stack

To start the entire stack (in production mode), use the following command:

```bash
docker-compose up -d
```

This will spin up the containers as configured in `docker-compose.yaml`.

### Stopping the Stack

To stop the stack (all containers), use this command:

```bash
docker-compose down
```

### Accessing Logs

You can view logs for the logger service with:

```bash
docker-compose logs logger-prod -f
```

### Starting Tests

```bash
cd main && npm test

cd posts && npm test

cd logger && npm test
```

## Development vs Production

- **Development**: Spin up MongoDB and NATS for local development using `docker-compose-dev.yaml`.
- **Production**: Spin up all services, NATS transport system and MongoDB using `docker-compose.yaml`.

## Useful Links:

- [Issues](https://github.com/Massfice/vbpolska-adrian-larysz/issues)
- [Linked Project](https://github.com/users/Massfice/projects/2)

## Conclusion

This system demonstrates the architecture of a microservices-based application with NATS as a message transport layer, MongoDB as the database, and a simple API service with Swagger documentation. It should give you an understanding of how these technologies integrate with each other for managing posts and logging in a robust production-like environment.

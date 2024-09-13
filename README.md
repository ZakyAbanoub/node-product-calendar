
# Node Product Calendar API

## Introduction
This project is designed as a backend solution for the "Chronos" calendar application, utilizing Node.js with TypeScript. The primary goal is to practice API design and enhance backend skills, focusing on Prisma with PostgreSQL for robust data handling.

## Features
- **Authentication**: Secure API access using JWT tokens.
- **Error Handling**: Implements middleware for synchronous and asynchronous error management.
- **Validation**: Uses Express validation to ensure reliable data input.
- **Environment Management**: Configured with dotenv for environment variable management.
- **Testing**: Basic setup with Jest to ensure code reliability and performance.

## Technologies
- **Node.js & TypeScript**: For server-side logic and static type checking.
- **Prisma**: ORM for PostgreSQL, ensuring smooth data manipulation.
- **Express**: Framework for handling routes, requests, and responses.
- **JWT**: For secure authentication and token management.
- **dotenv**: Manages environment variables for development and production modes.
- **Jest**: Provides a framework for all testing needs.

## Installation
To get started with this project, clone the repository and install the dependencies:
```bash
git clone https://github.com/ZakyAbanoub/node-product-calendar
cd node-product-calendar
npm install
```

## Configuration
Create a `.env` file in the root directory with the following content adjusted to your needs:
```plaintext
DATABASE_URL="your-database-url"
JWT_SECRET="your-secret"
```

## Running the Application
To run the server, use the following command:
```bash
npm start
```

## Testing
Run tests to ensure everything is set up correctly:
```bash
npm test
```
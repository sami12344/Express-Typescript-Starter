

<img src= 'https://github.com/sami12344/Express-Typescript-Starter/assets/77746252/55c9ff4b-09de-4f7e-9e4e-7b64ffe9f706' width='100%' alt='Express + TypeScript'/>


# Express + TypeScript Starter
This repository provides a quick and easy starting point for building web applications using Express.js and TypeScript. With this starter, you can quickly set up a server-side application with strong typing, making it easier to build and maintain robust APIs and web services. Whether you're new to TypeScript or just looking for a solid foundation for your Express project, this starter will save you time and effort.

## Features

- Express.js server with TypeScript support
- Structured project organization
- Environment variables using `dotenv`
- Pre-configured linting and formatting (ESLint, Prettier)
- Basic example routes for quick testing
- Nodemon for automatic server restarts during development
- Unit testing setup with Jest and Supertest

## Prerequisites

Before you get started, make sure you have the following installed:

- Node.js (https://nodejs.org)
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/express-typescript-starter.git
```

2. Change into the project directory:

```bash
cd express-typescript-starter
```

3. Install the dependencies:

```bash
npm install
```
## Manually
1. Initialize package.json

```bash
   yarn init -y
```
   or,
   
```bash
     npm init -y
```
2. Initilize tsconfig.json

```bash
  tsc --init
```
3. Edit the tsconfig.json

```json

{ "compilerOptions": { "target": "ES6" , "module": "commonjs" , "rootDir": "./src" , "moduleResolution": "Node" , "outDir": "./dist" , "esModuleInterop": true , "forceConsistentCasingInFileNames": true , "strict": true , "skipLibCheck": true }, "include": ["src/**/*.ts"], "exclude": ["node_modules"] }

```
4. Install packages

Install dev dependencies

```bash

yarn add typescript @types/node @types/express nodemon -D

```

Install Dependendcies

```bash

yarn add express

```
5. Create a `.env` file in the root of the project and set the required environment variables. You can use the provided `.env.example` file as a template.

6. Build and start the server:

```bash
npm run build
npm start
```

The server should now be running on `http://localhost:3000`.

## Project Structure

The project structure follows a modular organization, separating concerns to enhance maintainability and readability. Below is a brief overview of the directories:

- `src`: Contains the main source code.
  - `controllers`: Define route handlers and interact with the data models.
  - `middlewares`: Custom middleware functions.
  - `models`: Data models (e.g., database schemas).
  - `routes`: Express route definitions.
  - `app.ts`: Entry point of the application where the Express app is set up.
- `test`: Contains the unit tests.
  - `controllers`: Test suite for the controllers.
  - `utils`: Reusable testing utilities.
- `dist`: Output directory for compiled TypeScript code (automatically generated).

## Running Tests

To run the unit tests, use the following command:

```bash
npm test
```

## Development Workflow

During development, you can take advantage of Nodemon for automatic server restarts on file changes. Use the following command to start the server in development mode:

```bash
npm run dev
```

## Contributing

We welcome contributions to improve this starter. If you find any issues or want to add new features, feel free to create a pull request. Additionally, if you encounter any bugs or have suggestions, please open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! If you have any questions or need further assistance, feel free to contact us.

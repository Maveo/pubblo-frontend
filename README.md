# PubbloFrontend

## 🔐 Authentication with HttpOnly JWT Cookies

This app uses JWT tokens stored in **HttpOnly cookies** for authentication.

### Key Points

- The **backend sets** the JWT in an HttpOnly cookie via `Set-Cookie`.
- Angular **cannot access** HttpOnly cookies (for security reasons), but it **can send them automatically** with requests.
- To include the cookie with HTTP requests, always set `withCredentials: true`:

  ```ts
  this.http.get('/api/endpoint', { withCredentials: true });

## API Improvements

very fine-grained interfaces, example:
extra request for setting status of message to read isn't needed, just fetch a single message and then it can automatically switch to message was transmitted

## Generate OpenAPI

```bash
npm run generate-openapi
```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

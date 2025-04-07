# Wellmark Billing Rate App UI Prototype Challenge

This was a [challenge on the TopCoder platform](https://www.topcoder.com/challenges/a5e946a1-f746-4c49-8d57-7ae19718efc6) in June 2020 where I placed second. \
[You can view my account here](https://profiles.topcoder.com/70X).

## Project Overview

Our client wants to build a tool that has the capability to calculate & view rates for a given population of contracts within specified groups or lists of members.

For further info please take a look at the [CHALLENGE.md](./CHALLENGE.md) file

## Development server

### Mock Backend

Moving into the directory `cd server` and run `json-server --host 0.0.0.0 db.json --routes routes.json` for a dev backend server.

### Frontend

#### Dev environment

Moving into the directory `cd client` and run `npm install` and then `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Every call api are automatic redirect towards `http://localhost:3000/`

#### Prod environment

Run `npm run build` to build the project with `--prod` flag. The build artifacts will be stored in the `dist/` directory.
Please change api url in `src/environments/environment.prod.ts` before deploying to production.

### Configuration JWT

To update JWT token in order to make authorized request, please go to `dist` directory where you can find the production source and modify `config.json` file.

## Some problems with json-server

Every `DELETE` operation return a `404` error. A little frustrating but there is an issue documented here: `https://github.com/typicode/json-server/issues/857`.

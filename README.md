# CRUD Express + MongoDB

Simple CRUD application using Express, MongoDB (Mongoose), dotenv, and morgan.

## What this is
A simple REST API to create, read, update, and delete `Item` resources. Includes environment variable management via `dotenv`, middleware via `morgan`, and a small, testable project structure.

## Folder structure
- `server.js` — app entry point, middleware, routing.
- `config/db.js` — mongoose connection logic.
- `src/models` — Mongoose schemas.
- `src/controllers` — request handlers.
- `src/routes` — routing.
- `src/middleware` — error handler, other middlewares.


## Hiding files
1. Added files i didn't want commiting to git to .gitignore folder on my Vscode

## Run locally
1. `npm install`
2. `cp .env.example .env` and edit `.env`
3. Ensure MongoDB is running by using ATLAS (web version)
4. `npm Server.js`

## API endpoints
- `POST /api/items` — Create ; A POST REQUEST
- `GET /api/items` — Read all
- `GET /api/items/:id` — Read one
- `PUT|PATCH /api/items/:id` — Update 
- `DELETE /api/items/:id` — Delete 


## Assumptions
- Simple `Item` model with title, description, completed fields suffices to demonstrate CRUD.
- No authentication required for homework scope.
- Morgan ; i dont still understand this one

## Notes on security
- `.env` contains sensitive info. Keep it local by adding it to my gitignore file
- The database stores the information

## GitHub submission
Push this repository to your GitHub account and submit the repository link.

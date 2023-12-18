# Running the project

To run the project you must first install the dependencies with:

```bash
npm install
# or
pnpm install
```

And then run the local server with:

```bash
npm run dev
# or
pnpm dev
```

# Setting the database file path

You must specify the path to the database file in the `.env` file as `DB_PATH=db/my_file.db`.

# API routes

## POST /api/create-table

WIP...

## POST /api/create-user

Creates a user at the `Users` table. It requires

|  key |     type     |
|:----:|:------------:|
| ID   | INT          |
| NAME | VARCHAR(255) |
| AGE  | INT          |

## GET /api/get-users

WIP...

## GET /api/clear-db

WIP...
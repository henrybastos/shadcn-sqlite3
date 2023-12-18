import Database from "better-sqlite3";
import { DB_PATH } from "$env/static/private";

const db = new Database(DB_PATH, { verbose: console.log });

export function createDBUser (name, age) {
    const INSERT_USER_QUERY = `INSERT INTO USERS (id, name, age) VALUES (?, ?, ?);`;
    return db.prepare(INSERT_USER_QUERY).run(parseInt(Math.random() * 10000), name, age);
}

export function getUsers () {
    const SELECT_USERS_STMT = db.prepare(`SELECT * FROM USERS;`);
    const USERS = SELECT_USERS_STMT.all();
    return USERS;
}

export function createUsersDatabase () {
    const NEW_USERS_DB_SQL = `
    CREATE TABLE USERS (
        ID INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        age INT,
        PRIMARY KEY (ID)
    );`;
    
    // const CREATE_USERS_STMT = db.prepare(NEW_USERS_DB_SQL);
    // const USERS_TABLE = CREATE_USERS_STMT.run();
}

export function clearDatabase () {
    const CLEAR_DB_QUERY = `DELETE FROM USERS;`;
    const VACUUM_QUERY = `VACUUM;`;
    db.prepare(CLEAR_DB_QUERY).run();
    db.prepare(VACUUM_QUERY).run();
}
import mysql from 'mysql2';
import express from 'express';
import config from "./config.json" assert { type: "json" };

// connect to aio db no password
const dbConfig = config.database;

const connection = await mysql.createConnection({
    host: dbConfig.dbHost,
    user: dbConfig.dbUser,
    password: dbConfig.dbPassword,
    database: dbConfig.dbName,
});

console.log("db connected")



const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log("server running"));
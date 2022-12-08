const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient

const app = express();
const port = 8000;
const connection_url = 'mongodb://localhost:27017';

app.use(cors());

app.all("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "X-Request-With");
    next();
})

app.get('/home', (req, res) => {
    MongoClient.connect(connection_url, (error, client) => {
        if (error) {
            console.log('error : ', error);
        } else {
            const adminDb = client.db('local').admin();
            adminDb.listDatabases((error, dbs) => {
                res.send(dbs.databases);
                res.end();
                client.close();
            })
            console.log('database connected');
        }
    });
    // res.send("dbs.databases");
    // res.end();
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient

const app = express();
const port = 8000;
const connection_url = 'mongodb://localhost:27017';

// const connection_url = 'mongodb+srv://admin:0e03K0cG4xzoewSd@cluster0.uwzfyiw.mongodb.net/?retryWrites=true&w=majority';


app.use(cors());

app.all("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "X-Request-With");
    next();
})

app.get('/list-dbs', (req, res) => {
    MongoClient.connect(connection_url, (error, client) => {
        if (error) {
            console.log('error : ', error);
        } else {
            const adminDb = client.db('admin');
            adminDb.admin().listDatabases((error, dbs) => {
                if(error){
                    throw error;
                }else{
                    res.send(dbs.databases);
                    res.status(200);
                    res.end();
                }
                client.close();
            })
        }
    });
});

app.get('/getcollections/:db_name', (req, res) => {
    MongoClient.connect(connection_url, (error, client) => {
        if (error) {
            console.log('error : ', error);
        } else {
            const db = client.db(req.params.db_name)
            db.listCollections().toArray().then((data) => {
                res.send(data);
                res.status(200);
                res.end();
            })
        }
    });
});

app.get('/getcollection-details', (req, res) => {
    MongoClient.connect(connection_url, (error, client) => {
        if (error) {
            console.log('error : ', error);
        } else {
            const db = client.db(req.query.database)
            db.collection(req.query.collection).find({}).toArray().then((data) => {
                res.send(data);
                res.status(200);
                res.end()
            })
        }
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
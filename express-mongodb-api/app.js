const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hi Express");
});

app.listen(port, () => {
    console.log(`sever running on port ${port}`);
});

const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/country";

app.post('/country/add',async (req, res) => {
    const data = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('data').collection('countrydata').insertOne({
        msg: data.msg,
        length: data.msg.length
    });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "msg": data
    });
});

app.get('/country',async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const countries = await client.db('data').collection('countrydata').find({}).toArray();
    await client.close();
    res.status(200).send(countries);
});
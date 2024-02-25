require('dotenv').config()
const express = require('express')

const connectDB = require('./dbConnect');
const FakeUser = require("./fakeUser.model");
const bodyParser = require('body-parser');

app = express()
app.use(bodyParser.json());

const PORT = process.env.PORT|| 8999;
connectDB()
app.get('/',(req,res)=> {res.status(200).json({"name":req.body?.name||"ARYASH"})})

app.post('/save',async (req,res) => {
try {

    console.log(req.body)
    const {name, username, email} = req.body;
    const resp = await FakeUser.create({
        name, username, email
    });
    res.status(200).json(resp)
} catch (error) {
    res.status(500).json({ 
        message: 'Internal server error' ,
        emessage: error.message
}); 
}}
)
app.listen(PORT, ()=>console.log(`running on ${PORT}`))
const express        = require('express');
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
require('dotenv').config()
const mongoose       =  require('mongoose');
const router         = require('./router.js')
const app            = express();

const bdUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fiktj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = 5000;

app.use(express.json())
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(bdUrl, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()

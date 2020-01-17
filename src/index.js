const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
require('dotenv/config');

const app = express()

mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@devradar-lhhyj.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})

app.use(express.json()) // configurando o express para entender req em json
app.use(routes)

let port = process.env.PORT || 3333
app.listen(port)
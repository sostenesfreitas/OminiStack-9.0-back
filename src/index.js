const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routers')
const stringConection = require('./Config/envMongo')
const app = express()

mongoose.connect(stringConection, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(express.json())
app.use(routes)

app.listen(3333)

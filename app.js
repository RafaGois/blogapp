//carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()

const path = require('path')

const admin = require('./routes/admin')

//const mongoose = require('mongoose')

//configs
//bodyparser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars',handlebars.engine({defaulyLayout:'main'}))
app.set('view engine', 'handlebars')

//mongoose


//public
app.use(express.static(path.join(__dirname,"public")))//a pasta que guarda nossos arquivos estáticos é a pasta public

//rotas
app.use('/admin', admin)
//outros

const PORT = 8081;

app.listen(PORT, () => {
    let data = new Date()
    console.log(data)
})
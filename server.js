var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var customers = [
    {name: 'Encinar Perez Sanchez', id: 1},
    {name: 'Javier Nñuñez Berrocoso', id: 2},
    {name: 'Juanjo Galan Lopez', id: 3},
    {name: 'Raul Hernadez Gil', id: 4},
    {name: 'Candido Garcia Muñoz', id: 5}
]

// API REST

app.get('/', function (req, res) {
    res.send('prueba')
})

app.get('/customers', function (req, res) {
    res.json(customers)
})

app.post('/customers/add', function (req, res) {
    customers.push({
        name: req.body.name,
        id: customers.length + 1
    })
    res.sendStatus(201)
})

app.listen(3000, function () {
    console.log('Server in port 3000')
})

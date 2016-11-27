var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

var users = [
    {
        code: 1122321,
        name: 'Pedro Gomez',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 2434324,
        name: 'Paco Níñez',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 6456456,
        name: 'Encinar Granados',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 8678786,
        name: 'Javier Berrocoso',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 4244234,
        name: 'Sara Roman',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 1312312,
        name: 'Miguel Abujeta',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 3453455,
        name: 'Inma Sanchez',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 4564456,
        name: 'Veronica Martin',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 7657567,
        name: 'Francisco Gil',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 9789879,
        name: 'Amador Perez',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 7677566,
        name: 'Raul Moreno',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 7876876,
        name: 'Modesto Barrasa',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 3422424,
        name: 'Carlos Iglesias',
        job: 'Conductor',
        date: new Date()
    },
    {
        code: 5345464,
        name: 'Pablo Rosas',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 7687676,
        name: 'Ines Dominguez',
        job: 'Arquitecto',
        date: new Date()
    },
    {
        code: 2321323,
        name: 'Julia Núñez',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 4545455,
        name: 'Toto Canalo',
        job: 'Arquitecto',
        date: new Date()
    },
    {
        code: 54545354,
        name: 'Justo Diaz',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 75676577,
        name: 'Candido Gil',
        job: 'Arquitecto',
        date: new Date()
    },
    {
        code: 77776767,
        name: 'Ruben Leno',
        job: 'Informatico',
        date: new Date()
    },
    {
        code: 67676767,
        name: 'Ramon Frnaco',
        job: 'Arquitecto',
        date: new Date()
    },
    {
        code: 24242424,
        name: 'Pepe Gandin',
        job: 'Administrativo',
        date: new Date()
    },
    {
        code: 45444545,
        name: 'Joe Antonio Perez',
        job: 'Comercial',
        date: new Date()
    }
]

// API REST

app.get('/', function (req, res) {
    res.send('prueba')
})

app.get('/users', function (req, res) {
    var pageNum = parseInt(req.query.page || 0);
    var perPage = parseInt(req.query.per_page || 5);

    var page = paginate(users, pageNum, perPage);
    res.set("X-Total-Count", page.totalCount);
    res.json(page.pageData);
})

app.post('/users/add', function (req, res) {
    users.push({
        id: users.length + 1,
        name: req.body.name,
        job: req.body.job,
        date: new Date()
    })
    res.sendStatus(201)
})

var paginate = function (sourceList, page, perPage) {
    var totalCount = sourceList.length;
    var lastPage = Math.floor(totalCount / perPage);
    var sliceBegin = page*perPage;
    var sliceEnd = sliceBegin+perPage;
    var pageList = sourceList.slice(sliceBegin, sliceEnd);
    return {
        pageData: pageList,
        nextPage: page < lastPage ? page+1 : null,
        totalCount: totalCount
    }
}

app.listen(3000, function () {
    console.log('Server in port 3000')
})

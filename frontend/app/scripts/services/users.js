(function () {
    'use strict'

    window.angular
        .module('app')
        .factory('users', factory)

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
        }
    ]

    function factory () {
        return {
            list: function (callback) {
                callback(null, users)
            }
        }
    }

}())
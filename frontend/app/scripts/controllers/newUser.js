(function () {
    'use strict'

    window.angular
        .module('app')
        .controller('NewUserController', controller)

    function controller () {
        var vm = this

        vm.user = {
            name: '',
            surname: '',
            birthdate: '',
            department: 0,
            job: '',
            salary: '',
            photo: '',
            observations: ''
        }

        vm.send = function () {
            console.log(JSON.stringify(vm.user))
        }

        vm.fileChange = function (file) {
            var reader
            if (file.files.length === 0) {
                return
            }

            reader = new window.FileReader()
            reader.onloadend = function () {
                vm.user.photo = reader.result
            }

            reader.readAsDataURL(file.files[0])
        }
    }
}())
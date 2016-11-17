(function () {
    'use strict'

    window.angular
          .module('app')
          .controller('ListController', controller)

    function controller (users) {
        var vm = this

        vm.currentPage = 1
        vm.users = []

        users.list(function (err, usersList) {
            if (err) {
                console.log('Error!!')
            } else {
                vm.users = usersList
            }
        })

        vm.pageChanged = function () {
            console.log('Change page')
        }
        vm.getUsers = function () {
            return vm.users.slice((vm.currentPage - 1) * 10, ((vm.currentPage - 1) * 10) + 10)
        }
    }

    controller.$inject = ['users']
}())

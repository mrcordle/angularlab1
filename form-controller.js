(function(){
    angular
        .module('app')
        .controller("FormController", FormController);


    function FormController(){
        var vm = this;
        vm.tasks = [];
        vm.addTask = function(){
            vm.tasks.push(vm.newTask);
            vm.newTask = "";
        }
        vm.remove = function(item){
            var itemIndex = vm.tasks.indexOf(item);
            vm.tasks.splice(itemIndex, 1);
        }

    
    };

})();
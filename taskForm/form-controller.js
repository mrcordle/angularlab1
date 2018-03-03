(function(){
    angular
        .module('app')
        .controller("FormController", function (){
        var vm = this;
        vm.tasks = [];
        vm.addTask = function(){
           if(!vm.newTask){
               return;
           }
            vm.tasks.push(vm.newTask);
            vm.newTask = "";
            console.log("Hello");
        };
        vm.remove = function(index){
            vm.tasks.splice(index, 1);
        };

    
    });

})();
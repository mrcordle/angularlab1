(function(){
    angular
        .module('app')
        .controller("FormController", function (DataFactory){
        var vm = this;
        vm.tasks = DataFactory.getData() || [];
        vm.addTask = function(){
           if(!vm.newTask){
               return;
           }
            vm.tasks.push(vm.newTask);
            DataFactory.setData(vm.tasks);
            vm.newTask = "";
    
        };
       
    
    });

})();
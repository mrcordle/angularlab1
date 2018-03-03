(function(){
    angular
        .module('app')
        .controller("ListController", function (){
        var vm = this;
        vm.remove = function(index){
            vm.tasks.splice(index, 1);
        };

   
    });

})();
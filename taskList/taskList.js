(function(){
    angular.module('app')
    .component('list', {
        controller: 'ListController',
        templateUrl: 'taskList/taskList.html',
        bindings: {
            tasks: '<',
            search: '<'
          }

    });

})();
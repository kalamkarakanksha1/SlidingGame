(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle']);
   
    app.controller('slidingAdvancedCtrl', function($scope) {
    	    	var puzzle ={
    			src:"img/isentia.jpg",
    			title:"ISENTIA",
    			rows:"3",
    			cols:"3"
    	} 
    	 	   	
        $scope.puzzle = puzzle;
    	
    });



})(window.angular);
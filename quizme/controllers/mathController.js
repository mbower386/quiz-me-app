app.controller("quizzesController", function($scope, $state, $stateParams, $filter, $http, quizzesService) {
  
  // Get all math
  $scope.getMath = function() {
    mathService.getMaths()
      .then(function (response) {
        console.log("Maths: ", response.data);
        $scope.maths = response.data
      }, function(error) {
        console.log(error)
      })
  }

    $scope.getMath();

  // // Get all quizzes
  // $scope.maths = quizzesService.getMaths()
  // console.log("From my controller: ", $scope.maths);

  // // Get quiz by ID

});
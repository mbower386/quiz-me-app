app.controller("quizzesController", function($scope, $state, $stateParams, $filter, $http) {
  
  // Get all quizzes
  $scope.getQuiz = function() {
    $http.get("https://opentdb.com/api.php?amount=50")
      .then(function (response) {
        console.log("Quizzes: ", response.data.results);
        $scope.quizzes = response.data.results;
      }, function(error) {
        console.log(error)
      })
  }

  $scope.getQuiz();

  // // Get all quizzes
  // $scope.maths = quizzesService.getMaths()
  // console.log("From my controller: ", $scope.maths);

  // // Get quiz by ID

});
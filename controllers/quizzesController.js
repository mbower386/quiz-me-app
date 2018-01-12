app.controller("quizzesController", function($scope, $state, $stateParams, $filter, $http, quizzesService) {
  
  $scope.showQuizzes = false;

  // Get all quizzes
  $scope.getQuiz = function() {
    quizzesService.getQuizzes()
      .then(function (response) {
        console.log("Quizzes: ", response.data.results);
        $scope.quizzes = response.data.results;
        $scope.showQuizzes = true;
      }, function(error) {
        console.log(error)
      })
  }

  $scope.getQuiz();

  // Get one by Id
  if ($stateParams.question == "" || $stateParams.question == undefined || $stateParams.question == null) {
    quizzesService.getQuizById($stateParams.question, function (quiz) {
      $scope.quiz = quiz;
    });
  }
  else {
    quizzesService.getQuizById($stateParams.question, function (quiz) {
      $scope.quiz = quiz;
    });
    $state.go("quiz");
  };

});
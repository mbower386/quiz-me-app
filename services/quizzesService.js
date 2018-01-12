app.service("quizzesService", function ($state, $http) {

  // Get all quizzes
  this.getQuizzes = function () {
    return $http.get("https://opentdb.com/api.php?amount=50")
  }

  // Get one by Id
  this.getQuizById = function (question, cb) {
    if (question == "" || question == undefined || question == null) {
      var quiz = {};
      cb(quiz);
    }
    else {
      $http.get("https://opentdb.com/api.php?amount=50" + question + "/")
        .then(function (response) {
          cb(response.data);
        }, function (error) {
          console.log(error);
        })
    }
  }
})
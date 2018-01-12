var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("quizzes", {
      url: "/",
      templateUrl: "./views/quizzes.html",
      controller: "quizzesController"
    })

    .state("math", {
      url: "/math",
      templateUrl: "./views/quiz.html",
      controller: "quizzesController"
    })

});
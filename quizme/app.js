var app = angular.module("myApp", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("quizzes", {
      url: "/",
      templateUrl: "./views/quizzes.html",
    })

    .state("math", {
      url: "/math",
      templateUrl: "./views/math.html",
      controller: "mathController"
    })

});
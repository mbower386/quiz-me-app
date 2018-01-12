app.service("quizzesService", function($state, $http) {

  // Get all math
  // this.getMaths = function() {
  //   return $http.get("https://opentdb.com/api.php?amount=20")
  // }

    // // Create maths array
    // var _maths = [];
    // var _mathId = 0;
  
    // // Create math constructor
    // var Math = function(id, subject, term, definition) {
    //   this.id = id;
    //   this.subject = subject;
    //   this.term = term;
    //   this.definition = definition;
    // }
  
    // _maths.push(new Math(_mathId++, "Math", "Mean", "Add all numbers and divide the sum by the number of numbers"));
  
    // console.log("From my service: ", _maths);
  
    // // Get all 
    // this.getMaths = function() {
    //   return _maths
    // }
  
    // // Get one by ID
    // this.getMathById = function(id) {
    //   if (id == "" || id == undefined || id == null) {
    //     var math = []
    //     return math
    //   }
    //   else {
    //     for (var i = 0; i < _maths.length; i++) {
    //       if (_maths[i].id == id) {
    //         return _maths[i]
    //       }
    //     }
    //   }
    // }

});
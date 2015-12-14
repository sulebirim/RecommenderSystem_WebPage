(function() {
  var app = angular.module('testApp', ['ngRoute']);
  
  app.controller('loginCtrl', function($scope, $http, $rootScope, $window) {
    $scope.authenticated = false;
    $scope.showres = false;
    $scope.testfinished = false;
    $scope.questionsResults = [{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},
                              {"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0},{"username": this.usernam, "value":0}];
     var questIndex = 0;
      // Pregunta actual
      this.currentQuestion = questions[questIndex];
      $scope.usernam = "username";
      $scope.currentValue = values[questIndex];
      $scope.loginData = [{"username": ""}, {"password": ""}, {"value": 0}];
      this.str = 'http://localhost:8080/question'.concat(this.currentQuestion.id);

   // this.getResults = function(){
   //   var req = {
   //   method: 'GET',
   //   url: 'http://localhost:8080/testResults',
   //   headers: {
   //     'Content-Type': 'application/json'
   //   },
   //   params: {"username": this.usernam}
   // }
   // $http(req).
   // then(function(respone) {
      //$scope.message = response;
    //  $scope.rere = response;
      //$scope.extr = response.extr;
      //$scope.agr = response.agr;
      //$scope.neur = response.neur;
      //$scope.cons = response.cons;
      //$scope.opn = response.opn;
      //$scope.res = response;
      //alert(data.extr + " " + data.agr + " " + data.cons + " " + data.opn + " " + data.neur + " " + data);
      
   // },  
   // function(response) {
   //   alert( "failure message: ");
   // });  
   // };

    this.postTest = function(){
      var req = {
      method: 'POST',
      url: 'http://localhost:8080/submitTest',
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.questionsResults
    }
    $http(req).
    then(function(response) {
      $scope.message = response;
      
    },  
    function(response) {
      alert( "failure message: ");
    });  
    };


    this.postRequest = function(){
      var req = {
      method: 'POST',
      url: this.str,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {"username": this.usernam, "value": this.currentValue.value}
    }
    $http(req).
    then(function(response) {
      $scope.message = response;
      
    },  
    function(response) {
      alert( "failure message: ");
    });  
    };

    // Post new user
    this.postSignUp = function(){
      var req = {
      method: 'POST',
      url: this.str,
      headers: {
        'Content-Type': 'application/json'
      },
      data: this.loginData
    }
    $http(req).
    then(function(response) {
      $scope.message = response;
      alert("User created succesfully. Please sign in");
    },
    function(response) {
      alert("Someone already has that username. Try another");
    });  
    };

    // Sign in
    this.postSignIn = function(){
      var req = {
      method: 'POST',
      url: this.str,
      data: this.loginData
    }
    $http(req).
    then(function(response) {
    $scope.message = response;
    $scope.authenticated = true;
    },
    function(response) {
      $scope.authenticated = false;
      alert("The username and password you entered don't match");
    });  
    };


  this.signUp = function() {
      this.str = 'http://localhost:8080/signUp';

      user.username = this.loginData.username;
      //alert("username " + user.username);
      this.postSignUp();
      return $scope.usernam;
  };

  this.signIn = function() {                                                                                                                                                  
      this.str = 'http://localhost:8080/signIn';
      this.usernam= this.loginData.username;
      //alert("username " + this.usernam);
      this.postSignIn();
      return $scope.usernam;
    };
   

    this.nextQuestion = function() {
      // si $scope.currentValue != this.currentQuestion.value
      // hacer peticion post
      this.str = 'http://localhost:8080/test'.concat(this.currentQuestion.id);
      $scope.loginData.value = $scope.currentValue;
      //
      //$scope.dataSent = [{"username": "$scope.loginData.username"},{"value": "$scope.currentValue.value"}];
      this.postRequest();
      questIndex = questIndex + 1;
      $scope.currentValue = values[questIndex];
      $scope.questionsResults[questIndex].value = $scope.currentValue;
      this.currentQuestion = questions[questIndex];
      
                
      //URL para hacer post de la respuesta actual
      //this.str = '/survey/a'.concat(this.currentQuestion.id);
      // si $scope.currentValue != this.currentQuestion.value
      // hacer peticion post
      this.currentQuestion.value = $scope.currentValue.value;
      //alert(this.currentValue.value);
      return this.currentQuestion;
    };
    this.prevQuestion = function() {                
      questIndex = questIndex - 1;                
      this.currentQuestion = questions[questIndex];
        $scope.currentValue = values[questIndex];
        $scope.questionsResults[questIndex].value = $scope.currentValue;
        //this.str = 'http://localhost:8080/question'.concat(this.currentQuestion.id);
        //URL para hacer post de la respuesta actual
        // this.str = '/survey/a'.concat(this.currentQuestion.id);
        // si $scope.currentValue != this.currentQuestion.value
        // hacer peticion post
        //this.postRequest();
        // this.currentQuestion.value = $scope.currentValue.value;
        return this.currentQuestion;
    };
    this.hasPrev = function() {
      return questIndex > 0;
    };
    this.hasNext = function() {
      return questIndex < questions.length - 1;
    };

    this.getTestResults = function() {
      $http.get("http://localhost:8080/testResults", {
                params: {"username": this.usernam}}).
      success(function(response) {
        $scope.extr = response.extr;
        $scope.neur = response.neur;
        $scope.opn = response.opn;
        $scope.cons = response.cons;
        $scope.agr = response.agr;});
    };
    this.submitTest = function() {
      this.str = 'http://localhost:8080/test'.concat(this.currentQuestion.id);
      //$scope.dataSent = [user[0], $scope.currentValue];
      //this.postTest();
      this.postRequest();
      $scope.showres = true;
      $scope.testfinished = true;
      //this.getResults();
     // $http.get("http://www.w3schools.com/angular/customers.php")
     // .success(function(response) {$scope.names = response;});
      this.getTestResults();
      
    };
    this.index = function() {
      return questIndex;
    };
    this.length = function() {
      return questions.length;
    };
    this.signedIn = function() {
      return $scope.authenticated;
    };

    this.showResults = function() {
      return $scope.authenticated && $scope.testfinished;
    };

    this.showQuestions = function() {
      return $scope.authenticated && !$scope.testfinished;
    };

  });

        
            // Guarda el valor actual de la respuesta
  var values =[{"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                {"value":0},{"value":0},{"value":0},{"value":0}];
                 
  // Guarda el ultimo valor a la respuesta
  var questions = [
        {
          "id" : 1,
          "question" : "Is talkative",
          "value" : 0
        },
        {
          "id" : 2,
          "question" : "Tends to find fault with others",
          "value" : 0
        },
        {
          "id" : 3,
          "question" : "Does a thorough job",
          "value" : 0
        },
        {
          "id" : 4,
          "question" : "Is depressed, blue",
          "value" : 0
        },
        {
          "id" : 5,
          "question" : "Is original, comes up with new ideas",
          "value" : 0
        },
        {
          "id" : 6,
          "question" : "Is reserved",
          "value" : 0
        },
        {
          "id" : 7,
          "question" : "Is helpful and unselfish with others",
          "value" : 0
        },
        {
          "id" : 8,
          "question" : "Can be somewhat careless",
          "value" : 0
        },
        {
          "id" : 9,
          "question" : "Is relaxed, handles stress well",
          "value" : 0
        },
        {
          "id" : 10,
          "question" : "Is curious about many different things",
          "value" : 0
        },
        {
          "id" : 11,
          "question" : "Is full of energy",
          "value" : 0
        },
        {
          "id" : 12,
          "question" : "Starts quarrels with others",
          "value" : 0
        },
        {
          "id" : 13,
          "question" : "Is a reliable worker",
          "value" : 0
        },
        {
          "id" : 14,
          "question" : "Can be tense",
          "value" : 0
        },
        {
          "id" : 15,
          "question" : "Is ingenious, a deep thinker",
          "value" : 0
        },
        {
          "id" : 16,
          "question" : "Generates a lot of enthusiasm",
          "value" : 0
        },
        {
          "id" : 17,
          "question" : "Has a forgiving nature",
          "value" : 0
        },
        {
          "id" : 18,
          "question" : "Tends to be disorganized",
          "value" : 0
        },
        {
          "id" : 19,
          "question" : "Worries a lot",
          "value" : 0
        },
        {
          "id" : 20,
          "question" : "Has an active imagination",
          "value" : 0
        },
        {
          "id" : 21,
          "question" : "Tends to be quiet",
          "value" : 0
        },
        {
          "id" : 22,
          "question" : "Is generally trusting",
          "value" : 0
        },
        {
          "id" : 23,
          "question" : "Tends to be lazy",
          "value" : 0
        },
        {
          "id" : 24,
          "question" : "Is emotionally stable, not easily upset",
          "value" : 0
        },
        {
          "id" : 25,
          "question" : "Is inventive",
          "value" : 0
        },
        {
          "id" : 26,
          "question" : "Has an assertive personality",
          "value" : 0
        },
        {
          "id" : 27,
          "question" : "Can be cold and aloof",
          "value" : 0
        },
        {
          "id" : 28,
          "question" : "Perseveres until the task is finished",
          "value" : 0
        },
        {
          "id" : 29,
          "question" : "Can be moody",
          "value" : 0
        },
        {
          "id" : 30,
          "question" : "Values artistic, aesthetic experiences",
          "value" : 0
        },
        {
          "id" : 31,
          "question" : "Is sometimes shy, inhibited",
          "value" : 0
        },
        {
          "id" : 32,
          "question" : "Is considerate and kind to almost everyone",
          "value" : 0
        },        
        {
          "id" : 33,
          "question" : "Does things efficiently",
          "value" : 0
        },
        {
          "id" : 34,
          "question" : "Remains calm in tense situations",
          "value" : 0
        },
        {
          "id" : 35,
          "question" : "Prefers work that is routine",
          "value" : 0
        },
        {
          "id" : 36,
          "question" : "Is outgoing, sociable",
          "value" : 0
        },
        {
          "id" : 37,
          "question" : "Is sometimes rude to others",
          "value" : 0
        },
        {
          "id" : 38,
          "question" : "Makes plans and follows through with them",
          "value" : 0
        },
        {
          "id" : 39,
          "question" : "Gets nervous easily",
          "value" : 0
        },
        {
          "id" : 40,
          "question" : "Likes to reflect, play with ideas",
          "value" : 0
        },
        {
          "id" : 41,
          "question" : "Has few artistic interests",
          "value" : 0
        },
        {
          "id" : 42,
          "question" : "Likes to cooperate with others",
          "value" : 0
        },
        {
          "id" : 43,
          "question" : "Is easily distracted",
          "value" : 0
        },
        {
          "id" : 44,
          "question" : "Is sophisticated in art, music, or literature",
          "value" : 0
        }
  ];
  var user = [{"username": ""}, {"password": ""}, {"value": 0}];
})();
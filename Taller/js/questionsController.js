(function() {
	var app = angular.module('testApp', []);
            
	app.controller('questionsCtrl', function($scope, $http) {
	    var questIndex = 0;
            var list = [];
            // Pregunta actual
	    this.currentQuestion = questions[questIndex];
            //URL para hacer post de la respuesta actual
            //this.str = '/survey/a'.concat(this.currentQuestion.id);
            // Valor actual de la respuesta a la pregunta
            // Sirve para comparar valores en caso de que el usuario
            // quiera cambiar una respuesta a una pregunta anterior.
            // Si el valor es el mismo, no se hace la peticion POST.
            // Si el valor cambia, (currenQuestion.value != currentValue.value)
            // se hace la peticion post
            $scope.currentValue = values[questIndex]; 

            this.str = 'http://localhost:8080/question'.concat(this.currentQuestion.id);
/*            this.getRequest = function(){
                this.str="despues del post";
		$http.get('http://localhost:8080/test').
		then(function(response) {
			alert( "message: ");
			$scope.message = response;
		},
		function(response) {
			alert( "failure message: ");
		});	 
            };*/
        this.postRequest = function(){
            var req = {
				method: 'POST',
				url: this.str,
				headers: {
				  'Content-Type': 'application/json'
				},
				data: this.currentValue
			}
		$http(req).
		then(function(response) {
			
			$scope.message = response;
		},
		function(response) {
			alert( "failure message: ");
		});	 
        };


	    this.nextQuestion = function() {
                // si $scope.currentValue != this.currentQuestion.value
                // hacer peticion post
            this.str = 'http://localhost:8080/test'.concat(this.currentQuestion.id);
            this.postRequest();
	    	questIndex = questIndex + 1;
                
	    	this.currentQuestion = questions[questIndex];
                $scope.currentValue = values[questIndex];
                
                //URL para hacer post de la respuesta actual
                //this.str = '/survey/a'.concat(this.currentQuestion.id);
                // si $scope.currentValue != this.currentQuestion.value
                // hacer peticion post
                this.currentQuestion.value = $scope.currentValue.value;
                alert(this.currentValue.value);
                
                
                
	    	return this.currentQuestion;
	    };
	    this.prevQuestion = function() {                
	    	questIndex = questIndex - 1;                
	    	this.currentQuestion = questions[questIndex];
                $scope.currentValue = values[questIndex];
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
            $scope.submit = function() {
                // si $scope.currentValue != this.currentQuestion.value
                // hacer peticion post
                this.str = 'a'.concat(this.currentQuestion.id);				
            };
	    this.index = function() {
	    	return questIndex;
	    };
	    this.length = function() {
	    	return questions.length;
	    };
	    this.submitTest = function() {
            this.str = 'http://localhost:8080/test'.concat(this.currentQuestion.id);
            this.postRequest();
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
                     {"value":0},{"value":0},{"value":0},{"value":0},{"value":0},
                     {"value":0},{"value":0},{"value":0},{"value":0}];
                 
        // Guarda el ultimo valor a la respuesta
	var questions = [
				{
                                        "id" : 1,
					"question" : "Soy hablador",
					"value" : 0
				},
				{
                                        "id" : 2,
					"question" : "Tiendo a ser criticón",
					"value" : 0
				},
				{
                                        "id" : 3,
					"question" : "Soy minucioso en el trabajo",
					"value" : 0
				},
				{
                                        "id" : 4,
					"question" : "Soy depresivo, melancólico",
					"value" : 0
				},
				{
                                        "id" : 5,
					"question" : "Soy original, se me ocurren ideas nuevas",
					"value" : 0
				},
				{
                                        "id" : 6,
					"question" : "Soy reservado",
					"value" : 0
				},
				{
                                        "id" : 7,
					"question" : "Soy generoso, ayudo a los demás",
					"value" : 0
				},
				{
                                        "id" : 8,
					"question" : "Puedo ser algo descuidado a veces",
					"value" : 0
				},
				{
                                        "id" : 9,
					"question" : "Soy calmado, controlo bien el estrés",
					"value" : 0
				},
				{
                                        "id" : 10,
					"question" : "Tengo intereses muy diversos",
					"value" : 0
				},
				{
                                        "id" : 11,
					"question" : "Estoy lleno de energía",
					"value" : 0
				},
				{
                                        "id" : 12,
					"question" : "Inicio disputas con los demás",
					"value" : 0
				},
				{
                                        "id" : 13,
					"question" : "Soy un trabajador cumplidor, digno de confianza",
					"value" : 0
				},
				{
                                        "id" : 14,
					"question" : "Me pongo tenso con frecuencia",
					"value" : 0
				},
				{
                                        "id" : 15,
					"question" : "Soy ingenioso, analítico",
					"value" : 0
				},
				{
                                        "id" : 16,
					"question" : "Irradio entusiasmo",
					"value" : 0
				},
				{
                                        "id" : 17,
					"question" : "Soy indulgente, no me cuesta perdonar",
					"value" : 0
				},
				{
                                        "id" : 18,
					"question" : "Tiendo a ser desorganizado",
					"value" : 0
				},
				{
                                        "id" : 19,
					"question" : "Me preocupo mucho por las cosas",
					"value" : 0
				},
				{
                                        "id" : 20,
					"question" : "Tengo una imaginación activa",
					"value" : 0
				},
				{
                                        "id" : 21,
					"question" : "Tiendo a ser callado",
					"value" : 0
				},
				{
                                        "id" : 22,
					"question" : "Soy generalmente confiado",
					"value" : 0
				},
				{
                                        "id" : 23,
					"question" : "Tiendo a ser flojo, vago",
					"value" : 0
				},
				{
                                        "id" : 24,
					"question" : "Soy emocionalmente estable, difícil de alterar",
					"value" : 0
				},
				{
                                        "id" : 25,
					"question" : "Soy inventivo",
					"value" : 0
				},
				{
                                        "id" : 26,
					"question" : "Soy asertivo, no temo expresar lo que quiero",
					"value" : 0
				},
				{
                                        "id" : 27,
					"question" : "A veces soy frío y distante",
					"value" : 0
				},
				{
                                        "id" : 28,
					"question" : "Persevero hasta terminar el trabajo",
					"value" : 0
				},
				{
                                        "id" : 29,
					"question" : "Soy temperamental, de humor cambiante",
					"value" : 0
				},
				{
                                        "id" : 30,
					"question" : "Valoro lo artístico, lo estético",
					"value" : 0
				},
				{
                                        "id" : 31,
					"question" : "A veces soy tímido, inhibido",
					"value" : 0
				},
				{
                                        "id" : 32,
					"question" : "Soy considerado y amable con casi todo el mundo",
					"value" : 0
				},				
				{
                                        "id" : 33,
					"question" : "Hago las cosas de manera eficiente",
					"value" : 0
				},
				{
                                        "id" : 34,
					"question" : "Mantengo la calma en situaciones difíciles",
					"value" : 0
				},
				{
                                        "id" : 35,
					"question" : "Prefiero trabajos que son rutinarios",
					"value" : 0
				},
				{
                                        "id" : 36,
					"question" : "Soy extrovertido, sociable",
					"value" : 0
				},
				{
                                        "id" : 37,
					"question" : "A veces soy maleducado con los demás",
					"value" : 0
				},
				{
                                        "id" : 38,
					"question" : "Hago planes y los sigo cuidadosamente",
					"value" : 0
				},
				{
                                        "id" : 39,
					"question" : "Me pongo nervioso con facilidad",
					"value" : 0
				},
				{
                                        "id" : 40,
					"question" : "Me gusta reflexionar, jugar con las ideas",
					"value" : 0
				},
				{
                                        "id" : 41,
					"question" : "Tengo pocos intereses artísticos",
					"value" : 0
				},
				{
                                        "id" : 42,
					"question" : "Me gusta cooperar con los demás",
					"value" : 0
				},
				{
                                        "id" : 43,
					"question" : "Me distraigo con facilidad",
					"value" : 0
				},
				{
                                        "id" : 44,
					"question" : "Soy educado en arte, música o literatura",
					"value" : 0
				}
	];
        

})();
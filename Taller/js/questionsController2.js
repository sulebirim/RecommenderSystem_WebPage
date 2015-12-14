(function() {
	var app = angular.module('testApp', []);

	app.controller('questionsCtrl', function($scope) {
	    var questIndex = 0;
	    this.currentQuestion = questions[questIndex];
	    this.nextQuestion = function() {
	    	questIndex = questIndex + 1;
	    	this.currentQuestion = questions[questIndex];
	    	return this.currentQuestion;
	    };
	    this.prevQuestion = function() {
	    	questIndex = questIndex - 1;
	    	this.currentQuestion = questions[questIndex];
	    	return this.currentQuestion;
	    };
	    this.hasPrev = function() {
	    	return questIndex > 0;
	    };
	    this.hasNext = function() {
	    	return questIndex < questions.length - 1;
	    };
	    this.index = function() {
	    	return questIndex;
	    };
	    this.length = function() {
	    	return questions.length;
	    };
	});


	var questions = [
				{
					question : "Soy hablador",
					value : 0
				},
				{
					question : "Tiendo a ser criticón",
					value : 0
				},
				{
					question : "Soy minucioso en el trabajo",
					value : 0
				},
				{
					question : "Soy depresivo, melancólico",
					value : 0
				},
				{
					question : "Soy original, se me ocurren ideas nuevas",
					value : 0
				},
				{
					question : "Soy reservado",
					value : 0
				},
				{
					question : "Soy generoso, ayudo a los demás",
					value : 0
				},
				{
					question : "Puedo ser algo descuidado a veces",
					value : 0
				},
				{
					question : "Soy calmado, controlo bien el estrés",
					value : 0
				},
				{
					question : "Tengo intereses muy diversos",
					value : 0
				},
				{
					question : "Estoy lleno de energía",
					value : 0
				},
				{
					question : "Inicio disputas con los demás",
					value : 0
				},
				{
					question : "Soy un trabajador cumplidor, digno de confianza",
					value : 0
				},
				{
					question : "Me pongo tenso con frecuencia",
					value : 0
				},
				{
					question : "Soy ingenioso, analítico",
					value : 0
				},
				{
					question : "Irradio entusiasmo",
					value : 0
				},
				{
					question : "Soy indulgente, no me cuesta perdonar",
					value : 0
				},
				{
					question : "Tiendo a ser desorganizado",
					value : 0
				},
				{
					question : "Me preocupo mucho por las cosas",
					value : 0
				},
				{
					question : "Tengo una imaginación activa",
					value : 0
				},
				{
					question : "Tiendo a ser callado",
					value : 0
				},
				{
					question : "Soy generalmente confiado",
					value : 0
				},
				{
					question : "Tiendo a ser flojo, vago",
					value : 0
				},
				{
					question : "Soy emocionalmente estable, difícil de alterar",
					value : 0
				},
				{
					question : "Soy inventivo",
					value : 0
				},
				{
					question : "Soy asertivo, no temo expresar lo que quiero",
					value : 0
				},
				{
					question : "A veces soy frío y distante",
					value : 0
				},
				{
					question : "Persevero hasta terminar el trabajo",
					value : 0
				},
				{
					question : "Soy temperamental, de humor cambiante",
					value : 0
				},
				{
					question : "Valoro lo artístico, lo estético",
					value : 0
				},
				{
					question : "A veces soy tímido, inhibido",
					value : 0
				},
				{
					question : "Soy considerado y amable con casi todo el mundo",
					value : 0
				},				
				{
					question : "Hago las cosas de manera eficiente",
					value : 0
				},
				{
					question : "Mantengo la calma en situaciones difíciles",
					value : 0
				},
				{
					question : "Prefiero trabajos que son rutinarios",
					value : 0
				},
				{
					question : "Prefiero trabajos que son rutinarios",
					value : 0
				},
				{
					question : "Soy extrovertido, sociable",
					value : 0
				},
				{
					question : "A veces soy maleducado con los demás",
					value : 0
				},
				{
					question : "Hago planes y los sigo cuidadosamente",
					value : 0
				},
				{
					question : "Me pongo nervioso con facilidad",
					value : 0
				},
				{
					question : "Me gusta reflexionar, jugar con las ideas",
					value : 0
				},
				{
					question : "Tengo pocos intereses artísticos",
					value : 0
				},
				{
					question : "Me gusta cooperar con los demás",
					value : 0
				},
				{
					question : "Me distraigo con facilidad",
					value : 0
				},
				{
					question : "Soy educado en arte, música o literatura",
					value : 0
				},
				{
					question : "Tengo alta autoestima",
					value : 0
				},
				{
					question : "Soy muy religioso",
					value : 0
				},
				{
					question : "Soy políticamente liberal",
					value : 0
				},
				{
					question : "Usualmente estoy en malos términos con los demás",
					value : 0
				},
	];

})();
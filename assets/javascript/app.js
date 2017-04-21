//global variables
var question;
var answer;
var firstButton;
var secButton;
var thiButton;
var fourButton;
var setTimeout;
var correct = 0;
var incorrect = 0;
var timeLeft = 0;
var questions= ["Capital of Angola:", "Capital of Burkina Faso:", "Capital of Cameroon:", "Capital of Djibouti:" ];
var answers= ["Luanda", "Ouagadougou", "Yaounde", "Djibouti (City)", 
	"Angola (City)", "BK", "Cameroona", "Yamoussoukro",
	 "Brazzaville", "Kinshasa", "Moroni", "	N'Djamena", 
	 "Bangui", "Praia", "Lusaka", "Harare"];

//functions

var firstQuestion = function(){

		$("#questions").html("<h2>"+questions[0]+"</h2>");

		firstButton = $("#a1");
		firstButton.html("<p>Luanda</p>");	

		secButton = $("#a2");
		secButton.html("<p>Angola (City)</p>");	

		thiButton = $("#a3");
		thiButton.html("<p>Brazzaville</p>");	

		fourButton = $("#a4");
		fourButton.html("<p>Yaounde</p>");
		// 	if (buttonClick === Luanda){
// 		correct++;
// 	}else{
// 		incorrect++;
// 	}
// 	}, 5000);
	}


var secondQuestion = function(){

	$("#questions").html("<h2>"+questions[1]+"</h2>");

	firstButton = $("#a1");
	firstButton.html(answers[15]);	

	secButton = $("#a2");
	secButton.html(answers[5]);	

	thiButton = $("#a3");
	thiButton.html(answers[1]);	

	fourButton = $("#a4");
	fourButton.html(answers[12]);
	
// {
// 	$(".answers button").click(function(){
// 		if($(this).attr("id") === "a3"){
// 			correct++;
// 			$("#win").html(correct);
// 			setTimeOut(thirdQuestion(), 5000);
// 		}else{
// 				incorrect++;
// 				$("#loss").html(incorrect);
// 				setTimeOut(thirdQuestion(), 5000);
// 		}
// 	}
// }


	}

var thirdQuestion = function(){

	$("#questions").html(questions[2]);

	firstButton = $("#a1");
	firstButton.html(answers[6]);	

	secButton = $("#a2");
	secButton.html(answers[2]);	

	thiButton = $("#a3");
	thiButton.html(answers[8]);	

	fourButton = $("#a4");
	fourButton.html(answers[13]);
	// {
// 	$(".answers button").click(function(){
// 		if($(this).attr("id") === "a2"){
// 			correct++;
// 			$("#win").html(correct);
// 			setTimeOut(fourthQuestion(), 5000);
// 		}else{
// 				incorrect++;
// 				$("#loss").html(incorrect);
// 				setTimeOut(fourthQuestion(), 5000);
// 		}
// 	}
// }
	}

var fourthQuestion = function(){

	$("#questions").html("<h2>"+questions[3]+"</h2>");

	firstButton = $("#a1");
	firstButton.html(answers[7]);	

	secButton = $("#a2");
	secButton.html(answers[10]);	

	thiButton = $("#a3");
	thiButton.html(answers[11]);	

	fourButton = $("#a4");
	fourButton.html(answers[3]);

// 	$(".answers button").click(function(){
// 		if($(this).attr("id") === "a4"){
// 			correct++;
// 			$("#win").html(correct);
// 			$(".container").html("<h1>GAMEOVER</h1>");
// 		}else{
// 				incorrect++;
// 				$("#loss").html(incorrect);
// 				$(".container").html("<h1>GAMEOVER</h1>");
// 		}
// 	}
// }
	}


//manin process
$(document).ready();

setTimeout(fourthQuestion(setTimeout(thirdQuestion(setTimeout(secondQuestion(setTimeout(firstQuestion(), 5000)), 5000)), 5000)), 5000);

	



	
//setTimeout(firstQuestion(), 5000);


//  //var timer= setTimeout(firstQuestion, 5000);

// //$("#timer").setTimeout(function(){

// 	$("#question").html("<h2>What is the capital of Burkina Faso?</h2>");

// 	$("#a1").html("<p>BK</p>");
// 	$("#a2").html("<p>Kinshasa</p>");
// 	$("#a3").html("<p>Moroni</p>");
// 	$("#a4").html("<p>Ouagadougou</p>");

// 	if (buttonClick === Ouagadougou){
// 		correct++;
// 	}else{
// 		incorrect++;
// 	}
// 	}, 5000);

// $("#timer").setTimeout(function(){

// 	$("#question").html("<h2>What is the capital of Cameroon?</h2>");

// 	$("#a1").html("<p>Praia</p>");
// 	$("#a2").html("<p>Bangui</p>");
// 	$("#a3").html("<p>Yaounde</p>");
// 	$("#a4").html("<p>Camaroona</p>");

// 	if (buttonClick === Luanda){
// 		correct++;
// 	}else{
// 		incorrect++;
// 	}
// 	}, 5000);

// $("#timer").setTimeout(function(){

// 	$("#question").html("<h2>What is the capital of Djibouti?</h2>");

// 	$("#a1").html("<p>Brazzaville</p>");
// 	$("#a2").html("<p>Djibouti (City)</p>");
// 	$("#a3").html("<p>Bangui</p>");
// 	$("#a4").html("<p>N'Djamena</p>");






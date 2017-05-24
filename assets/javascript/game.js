// Variable Definitions
var attackPower = 8;
var attackIncreased;



$(document).ready(function(){
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupmusic.mp3' autoplay></audio>"); 
	// This Controls the first row characters
	// This controls clicks on Chewy
	$(".chewyOne").one("click", function () {
	$(".startUpAudio").remove();
	$("#backG").append("<audio class='chewyPickAudio' src='assets/audio/chewy-select.mp3' autoplay></audio>");
	$(".afterStartText").removeClass("hide");
	$(".enemyText").removeClass("hide");
	$(".startText").addClass("hide");
	$(".palpOne").addClass("hide");
	$(".leiaOne").addClass("hide");
	$(".vaderOne").addClass("hide");
	$(".palpTwo").removeClass("hide");
	$(".leiaTwo").removeClass("hide");
	$(".vaderTwo").removeClass("hide");
});
	// This controls clicks on Palpatine
	$(".palpOne").one("click", function () {
	$(".startUpAudio").remove();
	$("#backG").append("<audio class='chewyPickAudio' src='assets/audio/palp-select.mp3' autoplay></audio>");
	$(".afterStartText").removeClass("hide");
	$(".startText").addClass("hide");
	$(".enemyText").removeClass("hide");
	$(".chewyOne").addClass("hide");
	$(".leiaOne").addClass("hide");
	$(".vaderOne").addClass("hide");
	$(".chewyTwo").removeClass("hide");
	$(".leiaTwo").removeClass("hide");
	$(".vaderTwo").removeClass("hide");
});	
	// This controls clicks on Leia
	$(".leiaOne").one("click", function () {
	$(".startUpAudio").remove();
	$("#backG").append("<audio class='chewyPickAudio' src='assets/audio/leia-select.mp3' autoplay></audio>");
	$(".afterStartText").removeClass("hide");
	$(".startText").addClass("hide");
	$(".enemyText").removeClass("hide");
	$(".chewyOne").addClass("hide");
	$(".palpOne").addClass("hide");
	$(".vaderOne").addClass("hide");
	$(".chewyTwo").removeClass("hide");
	$(".palpTwo").removeClass("hide");
	$(".vaderTwo").removeClass("hide");
});	
	// This controls clicks on Vader
	$(".vaderOne").one("click", function () {
	$(".startUpAudio").remove();
	$("#backG").append("<audio class='chewyPickAudio' src='assets/audio/vader-select.mp3' autoplay></audio>");
	$(".afterStartText").removeClass("hide");
	$(".startText").addClass("hide");
	$(".enemyText").removeClass("hide");
	$(".chewyOne").addClass("hide");
	$(".leiaOne").addClass("hide");
	$(".palpOne").addClass("hide");
	$(".chewyTwo").removeClass("hide");
	$(".leiaTwo").removeClass("hide");
	$(".palpTwo").removeClass("hide");
});	
	// This controls the Second clicks
	// This controls The Second Chewy
	$(".chewyTwo").one("click", function(){
	$(".chewyTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".chewyThree").removeClass("hide");
	$(".palpThree").addClass("hide");
	$(".leiaThree").addClass("hide");
	$(".vaderThree").addClass("hide");

});
	$(".palpTwo").one("click", function(){
	$(".palpTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".palpThree").removeClass("hide");
	$(".chewyThree").addClass("hide");
	$(".leiaThree").addClass("hide");
	$(".vaderThree").addClass("hide");

});
	$(".leiaTwo").one("click", function(){
	$(".leiaTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".leiaThree").removeClass("hide");
	$(".palpThree").addClass("hide");
	$(".chewyThree").addClass("hide");
	$(".vaderThree").addClass("hide");

});
	$(".vaderTwo").one("click", function(){
	$(".vaderTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".vaderThree").removeClass("hide");
	$(".palpThree").addClass("hide");
	$(".leiaThree").addClass("hide");
	$(".chewyThree").addClass("hide");

});

// his function controls when the attack button is pressed
function pressAttack () {

};















});
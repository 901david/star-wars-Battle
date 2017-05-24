// Variable Definitions
var attackPower = 8;
var attackIncreased;



$(document).ready(function(){
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupmusic.mp3' autoplay></audio>"); 
	// This Controls the first row characters
	// This controls clicks on Chewy
	$(".chewyOne").on("click", function () {
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
	$(".palpOne").on("click", function () {
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
	$(".leiaOne").on("click", function () {
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
	$(".vaderOne").on("click", function () {
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
	$(".chewyTwo").on("click", function(){
	$(".chewyTwo").addClass("hide");
	$(".chewyThree").removeClass("hide");
	$(".palpthree").addClass("hide");
	$(".leiathree").addClass("hide");
	$(".vaderthree").addClass("hide");

});
	$(".palpTwo").on("click", function(){
	$(".palpTwo").addClass("hide");
	$(".palpThree").removeClass("hide");
	$(".chewythree").addClass("hide");
	$(".leiathree").addClass("hide");
	$(".vaderthree").addClass("hide");

});
	$(".leiaTwo").on("click", function(){
	$(".leiaTwo").addClass("hide");
	$(".leiaThree").removeClass("hide");
	$(".palpthree").addClass("hide");
	$(".chewythree").addClass("hide");
	$(".vaderthree").addClass("hide");

});
	$(".vaderTwo").on("click", function(){
	$(".vaderTwo").addClass("hide");
	$(".vaderThree").removeClass("hide");
	$(".palpthree").addClass("hide");
	$(".leiathree").addClass("hide");
	$(".chewythree").addClass("hide");

});

















});
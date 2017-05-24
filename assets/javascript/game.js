// Variable Definitions
var chewyAttack = 6;
var chewyCounterAttack = 10;
var chewyHealth = 120;
var palpAttack = 8;
var palpCounterAttack = 12;
var palpHealth = 150;
var leiaAttack = 5;
var leiaCounterAttack = 5;
var leiaHealth = 100;
var vaderAttack = 10;
var vaderCounterAttack = 15;
var vaderHealth = 180;
var currentEnemyHealth;
var currentEnemyCounter;
var currentEnemyName;
// These will be boolean variables to help determine what character has been chosen
var choseChewy = false;
var choseLeia = false;
var chosePalp = false;
var choseVader = false;
var choseChewyTwo = false;
var choseLeiaTwo = false;
var chosePalpTwo = false;
var choseVaderTwo = false;


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
	choseChewy = true;
	console.log(choseChewy);
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
	chosePalp = true;
	console.log(chosePalp);

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
	choseLeia = true;
	console.log(choseLeia);
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
	choseVader = true;
	console.log(choseVader);
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
	choseChewyTwo = true;
	console.log(choseChewyTwo);
	
	enemyHealth ();
	pressAttack ();


});
	$(".palpTwo").one("click", function(){
	$(".palpTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".palpThree").removeClass("hide");
	$(".chewyThree").addClass("hide");
	$(".leiaThree").addClass("hide");
	$(".vaderThree").addClass("hide");
	chosePalpTwo = true;
	console.log(chosePalpTwo);
	
	enemyHealth ();
	pressAttack ();
	

});
	$(".leiaTwo").one("click", function(){
	$(".leiaTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".leiaThree").removeClass("hide");
	$(".palpThree").addClass("hide");
	$(".chewyThree").addClass("hide");
	$(".vaderThree").addClass("hide");
	choseLeiaTwo = true;
	console.log(choseLeiaTwo);
	
	enemyHealth ();
	pressAttack ();
	

});
	$(".vaderTwo").one("click", function(){
	$(".vaderTwo").addClass("hide");
	$(".lastText").removeClass("hide");
	$(".vaderThree").removeClass("hide");
	$(".palpThree").addClass("hide");
	$(".leiaThree").addClass("hide");
	$(".chewyThree").addClass("hide");
	choseVaderTwo = true;
	console.log(choseVaderTwo);
	
	enemyHealth ();
	pressAttack ();
	
	

});

// his function controls when the attack button is pressed
function pressAttack () {
	if (choseChewy) {
			$(".btn-danger").on("click", function () {
			currentEnemyHealth = currentEnemyHealth - chewyAttack;
			chewyHealth = chewyHealth - currentEnemyCounter;
			$(".cHealth").html(chewyHealth);
			$(".ceHealth").html(currentEnemyHealth);
			$(".peHealth").html(currentEnemyHealth);
			$(".leHealth").html(currentEnemyHealth);
			$(".veHealth").html(currentEnemyHealth);
			$(".bottomText").html("<p>You attacked " + currentEnemyName + " for " + chewyAttack + " damage.</p>" +
				"<p>" + currentEnemyName + " attacked you back for " + currentEnemyCounter + " damage.</p>");
			chewyAttack = chewyAttack + 6;
	   });
	}
	else if (chosePalp){
			$(".btn-danger").on("click", function () {
			currentEnemyHealth = currentEnemyHealth - palpAttack;
			palpHealth = palpHealth - currentEnemyCounter;
			$(".pHealth").html(palpHealth);
			$(".ceHealth").html(currentEnemyHealth);
			$(".peHealth").html(currentEnemyHealth);
			$(".leHealth").html(currentEnemyHealth);
			$(".veHealth").html(currentEnemyHealth);
			$(".bottomText").html("<p>You attacked " + currentEnemyName + " for " + palpAttack + " damage.</p>" +
				"<p>" + currentEnemyName + " attacked you back for " + currentEnemyCounter + " damage.</p>");
			palpAttack = palpAttack + 8;
	   });
		}
	else if (choseLeia){
			$(".btn-danger").on("click", function () {
			currentEnemyHealth = currentEnemyHealth - leiaAttack;
			leiaHealth = leiaHealth - currentEnemyCounter;
			$(".lHealth").html(leiaHealth);
			$(".ceHealth").html(currentEnemyHealth);
			$(".peHealth").html(currentEnemyHealth);
			$(".leHealth").html(currentEnemyHealth);
			$(".veHealth").html(currentEnemyHealth);
			$(".bottomText").html("<p>You attacked " + currentEnemyName + " for " + leiaAttack + " damage.</p>" +
				"<p>" + currentEnemyName + " attacked you back for " + currentEnemyCounter + " damage.</p>");
			leiaAttack = leiaAttack + 5;
	   });
		}
	else if (choseVader){
			$(".btn-danger").on("click", function () {
			currentEnemyHealth = currentEnemyHealth - vaderAttack;
			vaderHealth = vaderHealth - currentEnemyCounter;
			$(".vHealth").html(vaderHealth);
			$(".ceHealth").html(currentEnemyHealth);
			$(".peHealth").html(currentEnemyHealth);
			$(".leHealth").html(currentEnemyHealth);
			$(".veHealth").html(currentEnemyHealth);
			$(".bottomText").html("<p>You attacked " + currentEnemyName + " for " + vaderAttack + " damage.</p>" +
				"<p>" + currentEnemyName + " attacked you back for " + currentEnemyCounter + " damage.</p>");
			vaderAttack = vaderAttack + 10;
	   });
		}	
};
// This function determines who is the Defender and controls Health for them
function enemyHealth () {
	if (choseChewyTwo) {
		currentEnemyHealth = 120;
		currentEnemyCounter = 10;
		currentEnemyName = "Chewbaca";
	}
	else if (chosePalpTwo) {
		currentEnemyHealth = 150;
		currentEnemyCounter = 12;
		currentEnemyName = "Emperor Palpatine";
	}
	else if (choseLeiaTwo) {
		currentEnemyHealth = 100;
		currentEnemyCounter = 5;
		currentEnemyName = "Princess Leia";
	}
	else if (choseVaderTwo) {
		currentEnemyHealth = 180;
		currentEnemyCounter = 15;
		currentEnemyName = "Darth Vader";
	}
};

















});
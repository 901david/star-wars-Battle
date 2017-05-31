// Variable Definitions
var currentCharacter;
var currentDefenderHealth;
var currentDefenderAttack;
var defeated = 0;
var currentAttackPower;
var currentHealth = 0;
var currentEnemyName;
var baseAttackPower;
var increaseAttack;
var nameValue;
var characterWinSound;
// Object declaration to define characters/win sounds etc
var characters = {
		chewy: {
			name: "Chewbaca",
			image: '<img src="assets/images/chewy.jpg" alt="Chewbaca" class="chewy">',
			baseAttack: 6,
			attack: 6,
			counterAttack: 10, 
			health: 120,
			chooseSound: new Audio('assets/audio/chewy-select.mp3'),
			attackSound: new Audio('assets/audio/chewy-attack.mp3'),
			winSound:new Audio('assets/audio/chewy-win.mp3'),
			value: "chewy"
				},
		palp: {
			name: "Emperor Palpatine",
			image: '<img src="assets/images/palp.png" alt="Emperor Palpatine" class="palp">',
			baseAttack: 9,
			attack: 9,
			counterAttack: 12, 
			health: 150,
			chooseSound: new Audio('assets/audio/palp-select.mp3'),
			attackSound: new Audio('assets/audio/palp-attack.wav'),
			winSound:new Audio('assets/audio/palp-win.WAV'),
			value: "palp"
				},
		leia: {
			name: "Princess Leia",
			image: '<img src="assets/images/leia.jpg" alt="Princess Leia" class="leia">',
			baseAttack: 7,
			attack: 7,
			counterAttack: 5, 
			health: 160,
			chooseSound: new Audio('assets/audio/leia-select.mp3'),
			attackSound: new Audio('assets/audio/leia-attack.mp3'),
			winSound:new Audio('assets/audio/leia-win.mp3'),
			value: "leia"
				},
		vader: {
			name: "Darth Vader",
			image: '<img src="assets/images/vader.jpg" alt="Darth Vader" class="vader">',
			baseAttack: 10,
			attack: 10,
			counterAttack: 15, 
			health: 180,
			chooseSound: new Audio('assets/audio/vader-select.mp3'),
			attackSound: new Audio('assets/audio/vader-attack.wav'),
			winSound:new Audio('assets/audio/vader-win.mp3'),
			value: "vader"
				},
		}
// Function to generate a character box and begin pushing us through the majority of the game
function generateCharacter (x, y) {
		// Initializes the characters on the screen
		var characterBox = $('<div class="funBox" value="' + characters[y]["value"] + '"><p>' + characters[y]["name"] + '</p>' + characters[y]["image"] + '<p class="health">' + characters[y]["health"] + '</p></div>').show().fadeIn(3000);
		$(x).append(characterBox);
		$(characterBox).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("#secondRow").append(this);
		characters[y]["chooseSound"].play();
		// Storing info about character selection to be used later
		currentCharacter = characters[y]["name"];
		console.log(currentCharacter);
		characterWinSound = characters[y]["winSound"];
		baseAttackPower = characters[y]["baseAttack"];
		increaseAttack = characters[y]["attack"];
		console.log(baseAttackPower);
		currentHealth = characters[y]["health"];
		console.log(currentHealth);
		currentAttackPower = baseAttackPower;
		console.log(currentAttackPower);
		// Starts defining the next row of characters which are now enemies
		$("#secondRow").prepend("<h3 class='startText'>Your Character</h3>");
		$("#thirdRow").append("<h3 class='startText'>Enemies Available to Choose</h3>");
		$("#firstRow .funBox").off("click");
		$("#firstRow .funBox").addClass("backRed");
		$("#thirdRow").append($("#firstRow .funBox"));
		$("#firstRow").empty();
		// Defines what happens when you click on an enemy
		$("#thirdRow .backRed").on("click", function () {
			
			if (currentEnemyName == undefined) {
			$("#fourthRow").append('<h3 class="moveDown">Fight Section</h3><button class="btn-danger btn-group-lg">Attack</button><h3>Defender Character</h3>').show().fadeIn(1000);
			$("#fourthRow").append(this);
			nameValue = $('#fourthRow div').attr('value');
			console.log(nameValue);
			currentEnemyName = characters[nameValue]["name"];
			currentDefenderHealth = characters[nameValue]["health"];
			currentDefenderAttack = characters[nameValue]["counterAttack"];
			console.log(currentDefenderAttack)
			console.log(currentDefenderHealth)
			console.log(currentEnemyName);
			$("#fourthRow .funBox").addClass("backBlack");
			$(".btn-danger").on("click", function() {
			characters[y].attackSound.play();
			attackDefender();
		});
		};
	});
	});
};
// This function dictates what happens when attack button pressed
function attackDefender () {
	currentHealth = currentHealth - currentDefenderAttack;
	currentDefenderHealth = currentDefenderHealth - currentAttackPower;
	currentAttackPower = currentAttackPower + increaseAttack;
	console.log("Att Power " + currentAttackPower);
	console.log("Char Health " + currentHealth);
	console.log("Def Health " + currentDefenderHealth);
	$("#fifthRow").html("<p>You attacked " + currentEnemyName + " for " + currentAttackPower + " damage.</p>" + "<p>" + currentEnemyName + " attacked you back for " + currentDefenderAttack + " damage.</p>");
	$("#fourthRow .health").html(currentDefenderHealth);
	$("#secondRow .health").html(currentHealth);
	checkGameStatus();
}
// This function dictates the sounds that play when an enemy is defeated and then whether you win or lose
function checkGameStatus () {
	if (currentDefenderHealth <= 0) {
		characterWinSound.play();
		defeatedEnemy = true;
		$("#fourthRow").empty();
		if (defeatedEnemy) {
			defeated++;
			console.log("Defeated" + defeated);
		$("#fifthRow").html("<p>You defeated " + currentEnemyName + ".</p><p>Click another enemy to continue.</p>");
		currentEnemyName = undefined;

};

}
	if (defeated >= 3) {
		$("#backG").append("<audio class='startUpAudio' src='assets/audio/win-overall-song.mp3' autoplay></audio>");
		$("#fifthRow").html("<p>YOU WIN!!!</p><p>The Force is strong with you.  Press reset to try again</p>")
		$("#fifthRow").append("<button class='btn-warning btn-group-lg'>Reset</button>");
		$(".btn-warning").on("click", function() {
			location.reload(true);
	});

	};
	if (currentHealth <= 0) {
		$("#backG").append("<audio class='startUpAudio' src='assets/audio/lose-comment.mp3' autoplay></audio>");
		$("#fifthRow").html("<p>Unfortunately.....YOU LOSE!!</p><p>You must learn to control the Force.  Press reset to try again</p>")
		$("#fifthRow").append("<button class='btn-warning btn-group-lg'>Reset</button>");
		$(".btn-warning").on("click", function() {
			location.reload(true);
	});
	};
};

$(document).ready(function(){
	var topTitle = $("<h1>Star Wars Battle</h1>").show().fadeIn(3000).show().fadeIn(3000);
	var makeAChoice = $("<h3 class='startText'>Select Your Character</h3>").show().fadeIn(3000);
	$("#backG").prepend(topTitle);
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupmusic.mp3' autoplay></audio>");
	// Puts starting items on screen
	generateCharacter("#firstRow", "chewy");
	generateCharacter("#firstRow", "leia");
	generateCharacter("#firstRow", "palp");
	generateCharacter("#firstRow", "vader");
	$("#firstRow").append(makeAChoice);
	
	
	});
	


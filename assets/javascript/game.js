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


// Object declaration to define characters
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
			picked: false,
			value: "chewy"
				},
		palp: {
			name: "Emperor Palpatine",
			image: '<img src="assets/images/palp.png" alt="Emperor Palpatine" class="palp">',
			baseAttack: 8,
			attack: 8,
			counterAttack: 12, 
			health: 150,
			chooseSound: new Audio('assets/audio/palp-select.mp3'),
			attackSound: new Audio('assets/audio/palp-attack.wav'),
			winSound:new Audio('#'),
			picked: false,
			value: "palp"
				},
		leia: {
			name: "Princess Leia",
			image: '<img src="assets/images/leia.jpg" alt="Princess Leia" class="leia">',
			baseAttack: 5,
			attack: 5,
			counterAttack: 5, 
			health: 100,
			chooseSound: new Audio('assets/audio/leia-select.mp3'),
			attackSound: new Audio('assets/audio/leia-attack.mp3'),
			winSound:new Audio('#'),
			picked: false,
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
			picked: false,
			value: "vader"
				}
		}

// Function to generate a character box
function generateCharacter (x, y) {
	var characterBox = $('<div class="funBox" value="' + characters[y]["value"] + '"><p>' + characters[y]["name"] + '</p>' + characters[y]["image"] + '<p class="health">' + characters[y]["health"] + '</p></div>');
		$(x).append(characterBox);
		$(characterBox).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("#secondRow").append(this);
		$("#secondRow").off("click");
		characters[y]["chooseSound"].play();
		currentCharacter = characters[y]["name"];
		console.log(currentCharacter);
		baseAttackPower = characters[y]["baseAttack"];
		increaseAttack = characters[y]["attack"];
		console.log(baseAttackPower);
		currentHealth = characters[y]["health"];
		console.log(currentHealth);
		currentAttackPower = baseAttackPower;
		console.log(currentAttackPower);
		$("#secondRow").prepend("<h3 class='startText'>Your Character</h3>");
		$("#thirdRow").append("<h3 class='startText'>Enemies Available to Choose</h3>");
		$("#firstRow .funBox").off("click");
		$("#firstRow .funBox").addClass("backRed");
		$("#thirdRow").append($("#firstRow .funBox"));
		$("#firstRow").empty();
		$("#thirdRow .funBox").one("click", function () {
			$("#thirdRow .funBox").off("click");
			$("#fourthRow").append('<h3 class="moveDown">Fight Section</h3><button class="btn-danger btn-group-lg">Attack</button><h3>Defender Character</h3>')
			$("#fourthRow").append(this);
			nameValue = $('#fourthRow div').attr('value');
			console.log(nameValue);
			whichDefender();
			$("#fourthRow .funBox").addClass("backBlack");
			$(".btn-danger").on("click", function() {
			characters[y].attackSound.play();
			attackDefender();


		});
		});

		
	

	});
};
// This function should control your health and the enemy health as well as the text across bottom
function whichDefender () {
	if (nameValue ===  'vader') {
		currentEnemyName = "Darth Vader";
		currentDefenderHealth = 180;
		currentDefenderAttack = 15;
		console.log(currentDefenderAttack)
		console.log(currentDefenderHealth)
		console.log(currentEnemyName);
	}
	else if (nameValue ===  'leia') {
		currentEnemyName = "Princess Leia";
		currentDefenderHealth = 100;
		currentDefenderAttack = 5;
		console.log(currentDefenderAttack)
		console.log(currentDefenderHealth)
		console.log(currentEnemyName);
	}
	else if (nameValue ===  'palp') {
		currentEnemyName = "Emperor Palpatine";
		currentDefenderHealth = 150;
		currentDefenderAttack = 12;
		console.log(currentDefenderAttack)
		console.log(currentDefenderHealth)
	}
	else if (nameValue ===  'chewy') {
		currentEnemyName = "Chewbaca";
		currentDefenderHealth = 120;
		currentDefenderAttack = 10;
		console.log(currentDefenderAttack)
		console.log(currentDefenderHealth)
		console.log(currentEnemyName);
	}

};
function attackDefender () {
	currentHealth = currentHealth - currentDefenderAttack;
	currentDefenderHealth = currentDefenderHealth - currentAttackPower;
	currentAttackPower = currentAttackPower + increaseAttack;
	console.log("Att Power " + currentAttackPower);
	console.log("Char Health " + currentHealth);
	console.log("Def Health " + currentDefenderHealth);
	$("#fifthRow").html("<p>You attacked " + currentEnemyName + " for " + currentAttackPower + " damage.</p>" + "<p>" + currentEnemyName + " attacked you back for " + currentDefenderAttack + " damage.</p>");
	$("#fourthRow .health").html(currentDefenderHealth);
}

$(document).ready(function(){
	//This will control autoplay of Theme once you get to site.
	$("#backG").append("<audio class='startUpAudio' src='assets/audio/startupmusic.mp3' autoplay></audio>");
	// Puts starting items on screen
	generateCharacter("#firstRow", "chewy");
	generateCharacter("#firstRow", "leia");
	generateCharacter("#firstRow", "palp");
	generateCharacter("#firstRow", "vader");
	$("#firstRow").append("<h3 class='startText'>Select Your Character</h3>");
	if (characters.hasOwnProperty("picked: false")) {
		alert("they are false")
	}
	
	});
	


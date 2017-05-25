// Variable Definitions
var currentCharacter;
var currentDefender;
var enemyChosen = false;
var defeated = false;
var currentAttackPower = 0;
var currentHealth = 0;

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
			picked: false
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
			picked: false
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
			picked: false
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
			picked: false
				}
		}

// Function to generate a character box
function generateCharacter (x, y) {
	var characterBox = $('<div class="funBox"><p>' + characters[y]["name"] + '</p>' + characters[y]["image"] + '<p>' + characters[y]["health"] + '</p></div>');
		$(x).append(characterBox);
		$(characterBox).one("click", function () {
		$(".startUpAudio").attr("src", "");
		$("#secondRow").html(this);
		$("#secondRow .funBox").off("click");
		characters[y]["chooseSound"].play();
		currentAttackPower = characters[y]["baseAttack"];
		console.log(currentAttackPower);
		currentHealth = characters[y]["health"];
		console.log(currentHealth);
		$("#secondRow").prepend("<h3 class='startText'>Your Character</h3>");
		$("#secondRow").append("<h3 class='startText'>Enemies Available to Choose</h3>");
		$("#firstRow .funBox").off("click");
		$("#firstRow .funBox").addClass("backRed");
		$("#secondRow").append($("#firstRow .funBox"));
		$("#firstRow").empty();
		$("#secondRow .funBox").one("click", function () {
	
			$("#secondRow .funBox").off("click");
			$("#thirdRow").append('<h3>Fight Section</h3><button class="btn-danger btn-group-lg">Attack</button><h3>Defender Character</h3>')
			$("#fourthRow").append(this);
			$(".btn-danger").on("click", function() {
			characters[y].attackSound.play();

		});
		});

		
	

	});
};
// This function should control your health and the enemy health as well as the text across bottom
function pressAttack (name) {

};

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
	


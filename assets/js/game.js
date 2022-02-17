var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth= 50;
var enemyAttack = 12;


for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }
// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * fight all enemy robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight = function(enemyName) {
    while(enemyHealth > 0) {
        // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    // Prompt fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")


    // IF PLAYER CHOOSES TO FIGHT
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Player Attack Phase
        enemyHealth = enemyHealth - playerAttack;
        // Result 
        console.log(
            playerName + " attacked " + enemyName + ", " + enemyName + " now has " + enemyHealth + " health remaining"
        );
    
        // Check Enemy Health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        // Enemy Attack Phase
        playerHealth = playerHealth - enemyAttack;
        // Result
        console.log(
            enemyName + " attacked " + playerName + ", " + playerName + " now has " + playerHealth + " health remaining"
        );

        // Check Player Health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // IF PLAYER CHOOSES TO SKIP
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
        fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!")
    }
    }


};

// used for loop to make repeat
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }
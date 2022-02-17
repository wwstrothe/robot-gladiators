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
// "LOSE" - Player robot's health is zero or less, exit from the fight loop.

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0 ) {
    
    // Prompt fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // confirm skip
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes, leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // Player Attack Phase
    enemyHealth = enemyHealth - playerAttack;
    // Result 
    console.log(
        playerName + " attacked " + enemyName + ", " + enemyName + " now has " + enemyHealth + " health remaining"
    );
    // Check Enemy Health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
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
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    } 
}


// used for loop to make repeat
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    debugger;
    fight(pickedEnemyName);
    } else {
        window.alert("YOu have lost your robot in battle! Game Over!");
        break;
    }
}
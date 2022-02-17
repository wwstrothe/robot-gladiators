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


//function to start a new game
var startGame = function() {
//reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney  = 10;
// used for loop to make repeat
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    ;
    fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    endGame();
}
//play again
startGame();
}

// function to end game
var endGame = function(){
    // if player still alive, player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle");
    }

    //ask palyer if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game 
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// start the game when the page loads
startGame();
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // Prompt fight
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    // confirm skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes, leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // Player Attack Phase
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    // Result
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ", and dealt " +
        damage +
        " to " +
        enemyName +
        ", who now has " +
        enemyHealth +
        " health remaining"
    );
    // Check Enemy Health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      playerMoney = playerMoney + 20;
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Enemy Attack Phase
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    // Result
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ", and dealt " +
        damage +
        " to " +
        playerName +
        ", who now has " +
        playerHealth +
        " health remaining"
    );

    // Check Player Health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

//function to start a new game
var startGame = function () {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // used for loop to make repeat
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // visit store?
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        //if yes, go to store() Function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player is not alive, break out of loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

// function to end game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player still alive, player wins
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle");
  }

  //ask palyer if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function () {
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );

  switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling players health by 20 for 7 dollars.");

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "UPGRADE": // new case
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case "LEAVE": // new case
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      shop();
      break;
  }
};

// start the game when the page loads
startGame();

// player's variable declared
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy's variables declared
var enemyNames = ["Roberto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function(parameter of enemyName)
var fight = function(enemyName){
    while(playerHealth > 0 && enemyHealth > 0){
        //Prompt player to Fight or Skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //if player picks "skip" confirm and then stop loop
        if(promptFight === "skip" || promptFight === "SKIP"){
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes(true), leave fight
            if(confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney",playerMoney);
                break;
            }
        }

        //remove enemy's health
        enemyHealth = enemyHealth - playerAttack;
        console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        //check enemy's health
        if (enemyHealth <= 0){
        window.alert(enemyName + " had died!");

        //award player money for winning
        playerMoney = playerMoney+20;

        //leave while() loop since enemy is dead
        break;
            }
        else{
            window.alert(enemyName+ " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and us that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        console.log( enemyName + " attacked " + playerName + ". "+ playerName + " now has " + playerHealth + " health remaining.");
           
        //check player's health
        if(playerHealth <=0){
            window.alert(playerName + " had died!");
            //leave while() loop if player is dead
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//function to start a new game
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight each enemy-robot by looping over them and fighting them one at a time.
        for(var i = 0; i < enemyNames.length; i++){
        //if player is still alive keep fighting
        if(playerHealth > 0){
            // Alert players that they are starting a round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //picked a new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            //debugger;

            //pass pickedEnemyName variable's into the fight function where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);  
        }
        //if player isn't alive, stop the game
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after loop ends, player is either out of health or enemies to fight
    endGame();   

};

var endGame = function(){
    //window.alert("The game has now ended. Let's see how you did!"); 
    //if player is still alive, player wins!
    if(playerHealth > 0){
        window.alert("Great job, you've survied the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        //restart the game
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start the game when the page loads
startGame();

//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less
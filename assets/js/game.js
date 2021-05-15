// player's variable declared
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

//enemy's variables declared
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 10;

//console.log(enemyName,enemyHealth,enemyAttack);

var fight = function(){
    // Alert players that they are starting a round
    window.alert("Welcome to Robot Gladiators!");

    //Prompt player to Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if(promptFight ==='fight' || promptFight === "FIGHT"){
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to updat the value in the 'enemyHealth'variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked
        console.log( playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
            //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " had died!");
        }
        else{
            window.alert(enemyName+ " still has " + enemyHealth + " health left.");
        }
        //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and us that result to update the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log( enemyName + " attacked " + playerName + ". "+ playerName + " now has " + playerHealth + " health remaining.");
        //check player's health
        if(playerHealth <=0){
            window.alert(playerName + " had died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        //if player chose to skip
    }
    else if(promptFight === "skip" || promptFight === "SKIP"){
        window.alert(playerName + " has chosen to skip the fight!");
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes(true), leave fight
        if(confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no(false),ask question again by running fight() again
        else{
            fight();
        }
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
};



fight();
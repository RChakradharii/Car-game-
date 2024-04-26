

const input = require("readline-sync");

let carStarted = false;
let carPaused = false;

while (true) {
    console.log("CAR GAME");
    console.log("CHOOSE ANY ONE OPTION WHICH YOU WANT : \n\t1. Start\n\t2. Pause\n\t3. Stop\n\t4. Exit");
    let option = input.question("ENTER YOUR OPTION: ");

    if (option === "exit") {
        break;
    }

    if (option === "start") {
        if (carStarted) {
            console.log("YOUR CAR IS ALREADY STARTED.");
        } else {
            console.log("YOUR CAR IS STARTED.");
            carStarted = true;
            carPaused = false; 
        }
    } else if (option === "pause") {
        if (carStarted) {
            if (carPaused) {
                console.log("YOUR CAR IS ALREADY PAUSED.");
            } else {
                console.log("YOUR CAR IS PAUSED.");
                carPaused = true;
            }
        } else {
            console.log("YOU CANT PAUSE THE CAR WHEN ITS NOT STARTED.");
        }
    } else if (option === "stop") {
        if (carStarted) {
            console.log("YOUR CAR IS STOPPED.");
            carStarted = false;
            carPaused = false; 
        } else {
            console.log("YOUR CAR IS NOT STARTED YET.");
        }
    } else {
        console.log("INVALID OPTION! PLEASE CHOOSE A VALID OPTION.");
    }
}

// Countdown timer project
// In this project, I am gonna build Countdown timer using the date module

// date module install command 
// npm install date-fns


// start coding: step 1:

import { DifferenceInSecondsOptions, differenceInSeconds } from "date-fns";

// funcion for condown second
function* countdownTimer (second: number){
    //while loop
    while(second > 0){ 
    yield second;
    second--;
}
}

// step 2:
// counter inilization
let timerIterator = countdownTimer(10);

// function to create a count down timer

function displayCountdown() {
    //value below 10
    let result = timerIterator.next();

    //applying if else condition
    if(!result.done) {
        //calling current date and time
        const now = new Date();

        // calculate minutes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000))
        
        // calculate seconds in time
        const remainingSeconds = differenceInSeconds(countdownTime , now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)

    setTimeout(displayCountdown, 1000) // 1 second is equal to 1000 ms

    } else {
        // display result count down complete
        console.log("Countdown Complete!")
    }

}


//invoke 
displayCountdown();
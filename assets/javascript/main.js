$(document).ready(function() {
    console.log('Reactor-V Status: Online');

    /*goals:
        - generate a new megawatt output goal each round && update it to the megawatt target div
        - generate new megawatt values for each of the four buttons each round
        - add each button value to the total megawatt output when clicked
        - if the megawatt output hits the target precisely, award the user an official commendation
        - if the megawatt output exceeds the target, give the user an official reprimandation
        - reset all reactor values to new numbers when the user succeeds or fails at running the reactor
    */

    //initial vars:
    let megawattTarget = 0;
    let successes = 0;
    let failures = 0;

    //functions:

    //generate the target number for the user to try and hit:
    const targetGoalGenerator = () => {
        //set the target number anywhere between 1000 && 3300, rounded to the nearest 10:
        megawattTarget = Math.floor(Math.random() * 2300) + 1000;
        megawattTarget = Math.round(megawattTarget/10) * 10;
        return megawattTarget;
    }

    $('#button-A').on('click', function() {
        targetGoalGenerator();
    });

    const buttonAssignments = () => {
        //set four random numbers between 0 && 500, rounded to the nearest 10:
    }


// end of docready function
}); 
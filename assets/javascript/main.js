$(document).ready(function() {
    console.log('Reactor-V Status: Online');

    /*goals:
        - if the megawatt output hits the target precisely, award the user an official commendation
        - if the megawatt output exceeds the target, give the user an official reprimandation
        - reset all reactor values to new numbers when the user succeeds or fails at running the reactor
    */

    //initial vars:
    let reactorRunning = false;
    let megawattTarget = 0;
    let megawattOutput = 0;
    let buttonDivIDs = ["#button-A", "#button-B", "#button-C", "#button-D"];
    let buttonValue = 0;
    let successes = 0;
    let failures = 0;

    //functions:

    //reset all the values to original state for new round:
    const reactorReset = () => {
        megawattOutput = 0;
        gagueUpdater();
        targetGoalGenerator();
        buttonAssignments();
    };

    const gagueUpdater = () => {
        $('#megawatt-target').text(megawattTarget);
        $('#megawatt-output').text(megawattOutput);
    }

    //generate the target number for the user to try and hit, && update the div to show it:
    const targetGoalGenerator = () => {
        //set the target number anywhere between 1000 && 3300, rounded to the nearest 10:
        megawattTarget = Math.round((Math.floor(Math.random() * 2300) + 1000)/10) * 10;
        gagueUpdater();
    }

    const buttonAssignments = () => {
        //set four random numbers between 0 && 500, rounded to the nearest 10:
        for (var i = 0; i < 4; i++) {
            buttonValue = Math.round((Math.floor(Math.random() * 500))/10) * 10;
            //assign the number as the 'val' attribute of the four DOM buttons:
            $(buttonDivIDs[i]).attr('val', buttonValue);
        }
    }

    //button functions:

    //'ON' button starts game conditions:
    $('#on-button').on('click', function() {
        reactorRunning = true;
        reactorReset();
    });

    //the four buttons for controlling the megawatt output:
    $('.reactor-button').on('click', function() {
        if (reactorRunning == true) {
            megawattOutput += parseInt($(this).attr('val')); //convert val str from button clicked into integer && add to output val
            gagueUpdater();

            //after every click, check if the megawatt output has fallen short of, met, or exceeded the target:
            if (megawattOutput < megawattTarget) {
                console.log('needs more power');
            } else if (megawattOutput == megawattTarget) {
                alert('A bright future!');
            } else if (megawattOutput > megawattTarget) {
                alert('CORE TEMPERATURE OVERLOAD. IMMEDIATE SHUTDOWN REQUIRED');
            }

        } else {
            megawattOutput = 0;
            alert('turn reactor on first');
        } 
    });


// end of docready function
}); 
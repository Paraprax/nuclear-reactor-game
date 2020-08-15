$(document).ready(function() {
    console.log('Reactor-V Status: Online');

    /*goals:
        - game logic goals all met; update CSS
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

    //update all the numbers the user sees:
    const gagueUpdater = () => {
        $('#megawatt-target').text(megawattTarget);
        $('#megawatt-output').text(megawattOutput);
        $('#commendations').text(successes);
        $('#reprimandations').text(failures);
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
        if (reactorRunning == false) {
            reactorRunning = true;
            reactorReset();
        }
    });

    //'RESET' button resets all the values
    $('#reset-button').on('click', function() {
        reactorReset();
    });

    //the four buttons for controlling the megawatt output:
    $('.reactor-button').on('click', function() {
        if (reactorRunning == true) {
            megawattOutput += parseInt($(this).attr('val')); //convert val str from button clicked into integer && add to output val
            
            //after every click, check if the megawatt output has fallen short of, met, or exceeded the target:
            if (megawattOutput < megawattTarget) {
                console.log('needs more power');
            } else if (megawattOutput == megawattTarget) {
                successes++;
                alert('A bright future!');
            } else if (megawattOutput > megawattTarget) {
                failures++;
                alert('CORE TEMPERATURE OVERLOAD. IMMEDIATE SHUTDOWN REQUIRED');
            }

            gagueUpdater();

        } else {
            megawattOutput = 0;
            alert('turn reactor on first');
        } 
    });


// end of docready function
}); 
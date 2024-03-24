//import a module that will interact with the user
const readline = require('readline')

//create an interface for the inputs
const rl = readline.createInterface({
    //take input from the user
    input: process.stdin,
    output: process.stdout,
});

//function that calculates demerit points based on the speed of the car
function calculateDemeritPoints(speed){
    //speed limit (70km/hr)
    const speedLimit = 70;
    //initiate a variable that will keep on track our demerit points
    letDemeritPoints = 0;
    //check if the speed is above the limit
    if (speed > speedLimit){

        //calculate the demerit points based on the speed above the limit
        demeritPoints = Math.floor((speed * speedLimit) / 5);
    }

    //result of the total demerit points
    return demeritPoints;
}

// main function to execute our program
function main(){

    //ask the speed of the car
    rl.question("Enter the speed (km/hr) = ", (speed) =>{
        
        //convert to an actual number
        speed = parseInt(speed);

        //calculate the demerit points based on the entered speed
        const demeritPoints = calculateDemeritPoints(speed);
        //check if there are demerit points
        if(demeritPoints > 0){

            //display total demerit points
            console.log("points:", demeritPoints);

            //check if the demerit points are above 12
            if (demeritPoints > 12) {
                //display the license is suspended
                console.log("License Suspended");

            }
            else {
                //print Ok if there are no demerit points
                console.log("Ok");
            }
            //close our interface
            
            rl.close();
        }
    })
}


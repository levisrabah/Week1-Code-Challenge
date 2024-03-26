// Prompt the sync module from the user

const prompt = require("prompt-sync")({ sigint: true });

//Prompt the user to enter the speed
const speed = parseInt(prompt('Enter speed:'));

// Function to check the speed
function speedcheck(speed) {

    // Speed limit in km/h
    const speedlimit = 70; 

    //number of kmperdemerit
    const kmperdemerit = 5; 
    
    //maximum demerit points that must not be exceeded
    const maxdemeritpoints = 12; 

    if (speed <= speedlimit) {



        //If the speed is within the required limit

        return "OK"; 
    }
     else {
        // calculate the demerit points

        const demeritpoints = Math.floor((speed - speedlimit) / kmperdemerit);
        
        //cheking if the demerit points exceed the maximum
        if (demeritpoints > maxdemeritpoints) {

            //Suspended license if maximum numberof demerit points is exceeded

            return "License suspended"; 
        }
         else {

            //Return the number of demerit points

            return "Points: " + demeritpoints; 
        }
    }
}

 // Display the result of the speed check

console.log(speedcheck(speed));

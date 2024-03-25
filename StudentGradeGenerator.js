//Declare a prompt-sync
const prompt=require("prompt-sync")({sigint:true});

const marks=prompt("Kindly enter your marks!: ")

    //check if the marks ranges between 0 to 100 and returns the grade
    if (marks >=79 ){
        console.log('Grade: A')
    }
    else if (marks >= 60 ){
        console.log('Grade: B')
    }
    else if (marks >=49 ){
        console.log('Grade: C')
    }
    else if (marks >=40 ){
        console.log('Grade: D')
    }
    else if ( marks <40 ){
        console.log('Grade: E') 
    }

//import a module for our console
const readline = require('readline');

//create an interface

const rl = readline.createInterface({
    //standard input
    input: processingInstruction.stdin,
    //standard output
    output: ProcessingInstruction.stdout,

});

//function calculating grades basedon marks

function calculatesGrade(marks){
    //check if the marks ranges between 0 to 100 and returns the grade
    if (marks >79 && marks <= 100){
        return 'A';
    }
    else if (marks >= 60 && marks <=79){
        return 'B';
    }
    else if (marks >49 && marks <=59){
        return 'C';
    }
    else if (marks >=40 && marks <=49){
        return 'D';
    }
    else if ( marks <40 && marks >=0){
        return 'E';
    }
    else {
        return 'marks should range between 0 and 100';
    }

}
//ask user  for the input
rl.question("Enter your marks:", (input) => {
    //actualize to an actual number
    let marks = parseFloat[input];

    //is it a valid number?
    if (isNaN(marks)){
        //check if it is in the range between 0 to 100
        if (marks>=0 && marks <=100){
            //calculate grade
            let grade = calculatesGrade(marks);
            //display results
            console.log('Grade: $(grade)');
        }else {
            //display grade if marks is a valid number
            console.log('${input} is not a valid number');
        }
        
    }
    
});
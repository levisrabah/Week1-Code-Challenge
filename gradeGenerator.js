//promting sync in the program

const prompt=require("prompt-sync")({sigint:true});

//Asking the user to enter the student's marks

const marks=prompt("Kindly enter your marks!: ")

  //conditions required for each and every grade

    if (marks >=79 && marks <= 100 ){
        console.log('Grade = A')
    }
    else if (marks >= 60 && marks < 79 ){
        console.log('Grade = B')
    }
    else if (marks >=49 && marks <= 59 ){
        console.log('Grade = C')
    }
    else if (marks >=40 && marks < 49 ){
        console.log('Grade = D')
    }
    else if ( marks <40 ){
        console.log('Grade = E') 
        
        //Error message that is displayed when the user tyies to enter marks that is above 100
    }else {
        console.log('Sorry, Marks should only range between 0 and 100 !!')
    }
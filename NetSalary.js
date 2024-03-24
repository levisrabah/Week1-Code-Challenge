// Calculate the PAYE

let myGrossSalary = 20000;
function grossSalary (mSalary){
    if (mSalary <= 24000){
        return mSalary * 0.1;

    }
    else if (mSalary >= 24001 && mSalary <= 32333){
        return ((mSalary - 24000) * 0.25) + (24000 * 0.1)
    }
    else if (mSalary >= 32334 && mSalary <= 500000){
        return ((mSalary - 32334) * 0.3) + (24000 * 0.1) + (32333 * 0.3);
  
    }
    else if (mSalary >= 500001 && mSalary <= 800000){
        return ((mSalary - 500000) * 0.325) + (24000 * 0.1) + (500000 * 0.3);
    }
    else {
        return mSalary * 0.35;
    }
}

//NHIF deductions

function NHIFDeductions (grossPay) {
    if (grossPay <= 5999){
        return 150;
    }
    else if (grossPay >= 6000 && grossPay <= 7999){
        return 300;
    }
    else if (grossPay >= 8000 && grossPay <= 11999){
        return 400;
    }
    else if (grossPay >= 12000 && grossPay <= 14999){
        return 500;
    }
    else if (grossPay >= 15000 && grossPay <= 19999){
        return 600;

    }else if (grossPay >= 20000 && grossPay <= 24999){
        return 750;

    }else if (grossPay >= 25000 && grossPay <= 29999){
        return 850;
    }
    else if (grossPay >= 30000 && grossPay <= 34999){
        return 900;
    }
    else if (grossPay >= 35000 && grossPay <= 39999){
        return 950;

    }else if (grossPay >= 40000 && grossPay <= 14999){
        return 500;

    }else if (grossPay >= 12000 && grossPay <= 44999){
        return 1000;

    }else if (grossPay >= 45000 && grossPay <= 49999){
        return 1100;

    }else if (grossPay >= 50000 && grossPay <= 59999){
        return 1200;

    }else if (grossPay >= 60000 && grossPay <= 69999){
        return 1300;

    }else if (grossPay >= 70000 && grossPay <= 79999){
        return 1400;
    }
    else if (grossPay >= 80000 && grossPay <= 89999){
        return 1500;

    }else if (grossPay >= 90000 && grossPay <= 99999){
        return 1600;

    }
    else {
        return 1700;
    }

    
    
}

//NSSF Deductions

function NHIFDeductions (grossPay) {
    if (myGross >= 7000 && myGross <= 18000){
        return myGross * 0.06;
    }
}

//Calculating Net salary

const grossSalary = 'num';
let NSSFDeductions = 'value';
let NHIFDeductions = myGross * 0.06;

let result = mSalary -(PAYE + NHIFDeductions + NSSFDeductions);



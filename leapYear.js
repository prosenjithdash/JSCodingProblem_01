// Check Leap Year or Not

// 1st Simple logic

// function isLeapYear(year) {
//     if (year % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }

    
// }

// const y = 2024;
//     const result = isLeapYear(y);
// console.log(result)
    

// Those year not divided by 100 and if the year is divided by 4 then it will be leap year.

function isLeapYear(year) {

    if (year % 100 !== 0 && year % 4 === 0 ) {
        return true;
    }

    else if (year % 100 === 0 && year % 400 === 0 ) {
        return true;
    }
        
    else {
        return false;
    }

    
}

const y = 1900;
    const result = isLeapYear(y);
console.log(result)
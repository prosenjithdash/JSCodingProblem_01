// inch to feet
// 12 inch = 1 feet

// // find just feet
// function enchToFeet(inch) {
//     const result = inch / 12;
//     return result;
// }
// const inch = 70;
// const res = enchToFeet(inch);
// console.log('Feet = ', res)

// find  feet and inch
function enchToFeet(inch) {
    const feetFaction = inch / 12;
    const feetNumber = parseInt(feetFaction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' Feet ,' + inchRemaining + ' Inch';
    return result;
}
const inch2 = 70;
const res2 = enchToFeet(inch2);
console.log(res2)


// Mail to km
//Km to mail
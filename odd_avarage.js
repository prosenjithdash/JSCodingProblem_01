// Odd Avarage calculate


function oddAvarage(arrays) {

    console.log('All number array: ',arrays);
    const odd = [];
    
    for (const num of arrays) {
        if (num % 2 === 1) {
           
            // console.log('Odd number : ', num);
            odd.push(num);

        }
      
        
    }
    console.log('Odd number Array : ', odd)
    
    let sum = 0;
    for (const odds of odd) {
        sum = sum + odds;
    }
    const avarege = sum / odd.length;
    // console.log(avarege);
    return avarege;
  
}
const array = [78, 50, 34, 80, 29, 63,55,27];
const result = oddAvarage(array)
console.log(' Avarege = ',result);

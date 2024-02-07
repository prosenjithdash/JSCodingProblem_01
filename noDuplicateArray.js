// Remove Duplicate Items From An Array

function noDuplicateArray(array) {
    console.log('Main array: ',array)
    const unique = [];

    for (const uni of array) {
        if (unique.includes(uni) === false) {
            unique.push(uni);
        }
    }
    return unique;
}
const friends = ['Alif','avik','avik','anik', 'labib', 'kishore', 'apurbo', 'bilas','labib']
const result = noDuplicateArray(friends);

console.log('Unique array: ',result)


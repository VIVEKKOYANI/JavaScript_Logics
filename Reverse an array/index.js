// Reverse an array

let array = [1,2,3,4,5,6,7,8, 'js', 'startup'];

let reverseArray = [];

for(let i = array.length; i > 0; i--){
    reverseArray.push(array[i-1]);
}

console.log("reverseArray", reverseArray);

let reverseArray2 = array.reduceRight((acc, value) => {
    return [ ...acc, value];
},[])
console.log("reverseArray2", reverseArray2);

let reverseArray3 = array.reverse();

console.log("reverseArray3", reverseArray3);




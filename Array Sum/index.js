function ArraySum(arr){

    let tempArr = arr.sort((a, b) => {
        return a - b;
    });

    let largest = tempArr.pop();

    let number = 0;

    tempArr.forEach(element => {
        number += element;
    });

    console.log("tempArr", tempArr);

    return number === largest;
}


console.log(ArraySum([1, 6, 4, 2, 13]));


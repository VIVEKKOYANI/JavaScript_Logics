const revString = (str) => {
    const arr = str.split("");
    console.log("arr",arr);
    arr.reverse();
    console.log("arr123",arr);
    str = arr.join("");
    console.log("str", str);
}

revString("Greetings!");

(function(str){
    let reversed = '';

    for(let character of str){
        reversed = character + reversed;
    }

    console.log("reversed",reversed);
})("Greetings!")
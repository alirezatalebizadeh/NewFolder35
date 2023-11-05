
function addNumbers(){
    let sum = 0;
    Array.from(arguments).forEach(num => {
        sum +=  num
    });
    return sum
}

// addNumbers(1,2,3,4)//Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

console.log(addNumbers(1,2,3,4,5,6,7,8,9));



let myFirstVal= null;
let mySecondVar = undefined;
let mtThirdVar ;//whitOut value
console.log(myFirstVal);//=> nul
console.log(mySecondVar);//=> undefined
console.log(myFirstVal);// null


function logger(num){
    console.log(num);
}
logger()//without value ==> undefined

//null = 0 
console.log(null + 10 ); // 0+10 = 10
console.log(null * 5); // 0*5 =0
//undefined = ?(نامشخص و ناشناس)
console.log(undefined + 10); // ==> NaN
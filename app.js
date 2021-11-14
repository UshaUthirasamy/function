//Challenge:6 Map
function findSquareOfNumbers(myArray) {
    var result = myArray.map(function(x){
        return x*x;
    });
    return result;
}
var myArray = [11,34,20,5,53,16];
console.log("Challenge 6 => "+findSquareOfNumbers(myArray));


//Challenge:7 Reduce
function multiply(array) {
    var result = array.reduce(function(mul,arr){
        return mul*arr;
    });
    return result;
}
myArray = [2,3,5,10];
console.log("Challenge 7 => "+multiply(myArray));


//Challenge:5 Lambda
var Lambda = function(numberArray){
    var even = numberArray.filter(function(ele){
        return ele%2==0;
    });
    return even;
}
var numberArray = [12,324,213,4,2,3,45,4234,24,56,43];
console.log("Challenge 5 => "+Lambda(numberArray));

//Challenge:3 Filter
function isEven(numberArray) {
    var even = numberArray.filter(function(element) {
        return element%2 == 0;
    });
    return even;
}
numberArray = [12,324,213,4,2,3,45,4234];
console.log("Challenge 3 => "+isEven(numberArray));


//Challenge:1 Array Slice
function slice(foods) {
    let modifiedFood = foods.slice(1,foods.length-1);
    return modifiedFood;
}
var foods = ['pizza','burger','fingerChips','donuts','springRoll'];
console.log("Challenge 1 => "+slice(foods));

//Challenge:2 Array Splice
function splice(foods) {
    foods.splice(2,0,'noodles','icecream');
    return foods;
}
foods = ['pizza','burger','fingerChips','donuts','springRoll'];
console.log("Challenge 2 => "+splice(foods));

//Challenge:4 Reject
function nonPrime(numberArray) {
    let nonPrimeNumbers = reject(numberArray);
    return nonPrimeNumbers;
}
function reject(numberArray) {
    let arr=[];
    let index=0;
    for (i = 0; i < numberArray.length; i++) {
        let element = numberArray[i];
        if (element < 2) {
            arr[index] = element;
            index+=1;
        }
        for (let k = 2; k < element; k++) {
            if (element % k == 0) {
                arr[index] = element;
                index+=1;
                break;
            }
        }
    }
return arr;
}
numberArray = [12,324,213,4,2,3,45,4234,7,11];
console.log("Challenge 4 => "+nonPrime(numberArray));

function evenOrOdd(num){
    if(num%2===0){
        return "number is even"
    }
    else{
        return "number is odd"
    }
}

const number = 9 
const result = evenOrOdd(number)
console.log(result);
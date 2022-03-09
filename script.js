let arrayOfNumbers = []
let operator
let numberJoined
let firstOperand
let secondOperand

const operators = {
    "+": function(a, b) { return a + b },
    "-": function(a, b) { return a - b },
    "x": function(a, b) { return a * b },
    "/": function(a, b) { return a / b },
    undefined: function(a) { return a}

}

function displayNumber(aNumber){
    arrayOfNumbers.push(aNumber)
    numberJoined = arrayOfNumbers.join("")
    document.getElementById('test').innerHTML = numberJoined
    console.log(`My current number typed is ${numberJoined} is a ${typeof numberJoined}`)
    console.log(arrayOfNumbers)
}


function clearAll(){
    arrayOfNumbers=[]
    operator=""
    firstOperand=""
    secondOperand=""
    numberJoined = arrayOfNumbers.join("")
    document.getElementById('test').innerHTML = ""
    console.log(`${arrayOfNumbers}`)
}

function stockFirstNumber(symbolOperator){
    console.log(operator)
    if (operator === ""){
        operator = symbolOperator;
        firstOperand = numberJoined;
        arrayOfNumbers=[];
        numberJoined = arrayOfNumbers.join("");
        console.log(firstOperand);
        console.log(operator);
    } else {
        firstOperand = (performOperation(operator));
        operator=symbolOperator
        arrayOfNumbers=[]
        numberJoined = arrayOfNumbers.join("");
        console.log(`first operand: ${firstOperand}`);
        console.log(typeof firstOperand);
        console.log(operator);
    }

}

function performOperation(operator){
    secondOperand = numberJoined
    myResult = operators[operator](parseFloat(firstOperand),parseFloat(secondOperand))
    document.getElementById('test').innerHTML = myResult
    console.log(`${firstOperand} ${operator} ${secondOperand} = ${myResult}`)
    console.log(typeof myResult)
    return myResult

}

/* What should be improved?
-DONE  PERFORMOPERATION: should be able to perform several operations in a row 
    ==> idea, modify performOperation to include 2 other parameters (firstoperand et second) to reperform operation on current result
- STOCKFIRSTNUMBER: issue when 2 operators are clicked in a row
- DONE CLEARALL: AC only deletes the current stored array */

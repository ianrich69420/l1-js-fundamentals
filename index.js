// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const pi = 3.142
printValue(pi)



//TODO: ADD redeclarable variable


var score = 100
var score = 48
score =99 
printValue(score)

//TODO: ADD re-assignable but not redeclarable variable

let age = 17
printValue(age)


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value

const bodyTemperature = 36.5
printValue(bodyTemperature)

//TODO: Create a redeclarable variable with a boolean value
var isElligible = false
printValue(isElligible)

//TODO: Create a re-assignable variable with a string value
let string = "Hello"
printValue(string)


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
const message = "I am in Phase 1."
const time = "12:00 noon"
const full = message + "" + time
printValue(full)

//TODO: Interpolate string (`${}`)
const other = `Hello, ${message} and the time is ${time}`
printValue(other)
//TODO: Convert to uppercase
const otherVariable = other.toUpperCase()
printValue(otherVariable)

//TODO: Convert to lowercase
printValue(other.toLowerCase())

//TODO: Index a specific character
printValue("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(9))

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
const one = 1
const otherOne = "1"
console.log("S Equality:",one === otherOne)


//TODO: strict inequality
console.log("S Inequality:", one !== otherOne)

//TODO: equality
console.log("L Equality:" , one == otherOne)

//TODO: inequality
console.log("L Inequality" , one != otherOne)

//TODO: greater than
console.log("Greater:", 5 > 4)

//TODO: less than
console.log("Less:", 4 < 9)

//TODO: greater or equal to
console.log("Greaterorequalto:", 5>=4)

//TODO: less or equal to
console.log("Lessorequalto:", 4<=5)


// 5.0 CONTROL FLOW
// TODO: if-else statement
if(age >= 18){
    console.log("ELIGIBLE:", true)
}else if(age >=16){
    console.log("ELIGIBLE chini ya maji:", true)
}

//TODO: switch-case
const grade = 99
switch(grade){
    case 100:
        console.log('grade: ' + "passed")
        break
    case 80:
        console.log('grade: ' + "retake")
        break
    default:
        console.log('grade: ', 'expelled')
}
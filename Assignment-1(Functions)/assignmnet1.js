
// problem 1
// Write a program to demonstrate how a function can be passed as a parameter to another function.
// in the below script the function is passed as paramter to "functionTakingFunctionAsParameter" function
let functionTakingFunctionAsParameter= function(fun,string){
    return fun(string);
}

console.log(functionTakingFunctionAsParameter(function(input){
    return "Hello "+input;
},"Rahul"));


// problem 2
// An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments.
// For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
// Submit the github link to the code

let firstName = "Akash";
let lastName = "Boora";

let arrowFunction = (fName,lName) => fName[0]+lName[0];
console.log(arrowFunction(firstName,lastName))



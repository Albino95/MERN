const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output: 1-st: Undefined; 2-nd: "Elon"
console.log(name);
console.log(otherName);
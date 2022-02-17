const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output: password "12345"; hashedPassword "undefined"
console.log(password);
console.log(hashedPassword);
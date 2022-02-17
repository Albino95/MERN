const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output: 1-st "value"; 2-nd [1,5,1,8,3,3]; 3-d 1; 4-th yess, it will respond 5;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
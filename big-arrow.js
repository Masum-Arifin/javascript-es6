const add = (num1, num2) => num1 + num2;
const sum = add(50,70);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(45, 11, 5);

const tenTimes = (num) => num * 10;
const output = tenTimes(15); 

const fiveTimes = num => num * 5;
const value = fiveTimes(17);

const getName = () => 'Brandon Sam';
const name = getName()
console.log(name);  

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);


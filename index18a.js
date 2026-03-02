// Accept two numbers through command line argument
// and print the sum

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const sum = num1 + num2;

console.log(`Sum of ${num1} and ${num2} is: ${sum}`);
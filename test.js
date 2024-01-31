// Question 1 : sum of all positive numbers

const arr = [-2, 5, 3, -8, 10, -4];

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    console.log("Sum of positive numbers:", sum);
    return sum;
}

sumOfPositiveNumbers(arr);

// Question 2 : return the name of students whose marks are above threshold 

const students = [
    {name : 'Alice', score: 85},
    {name : 'Bob', score: 60},
    {name : 'Charlie', score: 92},
    {name : 'David', score: 75}
];

function studentsAboveThreshold(students, threshold) {
    const aboveThresholdNames = [];
    for (const student of students) {
        if (student.score > threshold) {
            aboveThresholdNames.push(student.name);
        }
    }
    return aboveThresholdNames;
}

const threshold = 70;
const studentsAboveThresholdNames = studentsAboveThreshold(students, threshold);
console.log(`Students who scored more than ${threshold}:`, studentsAboveThresholdNames);

// Question 3 : sort numbers in ascending order. without using array.sort().

const Num = 8046957321;

function convertNumberToArray(Num) {
    const numString = String(Num);
    const numArray = [];
    
    for (let i = 0; i < numString.length; i++) {
        numArray.push(Number(numString[i]));
    }

    return numArray;
}
function SortedArray(arr) {
    const sortArr = arr.length;
    for (let i = 0; i < sortArr - 1; i++) {
        for (let j = 0; j < sortArr - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const ascendArr = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = ascendArr;
            }
        }
    }
    return arr;
}

const numArray = convertNumberToArray(Num);
const sortArray = SortedArray(numArray);
console.log("Sorted Number Array:", sortArray);


// Question 4 : 

async function fetchPostTitles() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const titles = data.slice(0, 5).map(post => post.title);
        return titles;
    } catch (error) {
        throw error;
    }
}

fetchPostTitles()
    .then(titles => {
        console.log("Titles of the first 5 posts:", titles);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });



// Question 5 : Difference between let, const and var in javascript. Provide examples illustrating their use cases and limitations.

// var

// 1 Variables declared with var are function-scoped or globally-scoped. They are hoisted to the top of their function scope.
// 2 They can be re-declared and updated throughout the scope.
// 3 They don't have block scope, meaning they are visible throughout the entire function, even outside of any blocks.
// 4 They can lead to unexpected behavior, especially in loops or nested functions.

function value() {
    var x = 10;
    if (true) {
        var x = 20; 
        console.log(x); 
    }
    console.log(x); 
}
value();

// let

// 1 Variables declared with let have block scope. They are only accessible within the block they are defined in, including loops and conditionals.
// 2 They are not hoisted to the top of their block scope.
// 3 They can be updated, but not re-declared within the same scope.


function val() {
    let x = 10;
    if (true) {
        let x = 20; 
        console.log(x);
    }
    console.log(x); 
}
val();


//  const 

// 1 Variables declared with const also have block scope like let.
// 2 They must be initialized with a value at the time of declaration, and once assigned, their value cannot be changed (it's immutable).
// 3 They are not hoisted to the top of their block scope.
// 4 For objects and arrays, the reference (memory address) cannot be changed, but the properties or elements inside can be modified.


function obj1() {
    const x = 10; 
    const obj = { name: 'John' };
    obj.name = 'Jane'; 
    console.log(obj.name);
}
obj1();

// Use Cases:

// Use var for variables that need function or global scope and can be re-declared or updated throughout the scope.

// Use let for variables that need block scope and can be updated within the block.

// Use const for variables that need block scope and won't be reassigned.

// Limitations:

// var can lead to unexpected behavior due to hoisting and lack of block scope.

// let and const may not be supported in older browsers.

// Reassigning a variable declared with const will result in a syntax error.

// While properties of objects and elements of arrays declared with const can be modified, the reference itself cannot be changed.







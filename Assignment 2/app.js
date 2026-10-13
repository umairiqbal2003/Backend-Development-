let studentName = ["Ali", "Ahmed", "Faraz", "Raza"];

let userInput = prompt("Enter student name");

if (!studentName.includes(userInput)) {
    studentName.push(userInput);
}

console.log(studentName);
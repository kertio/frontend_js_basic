const tasks = ['Задача 1'];

function Add(task) {
    tasks.push(task);
}

function Remove(task) {
    if (tasks.includes(task)) {
        tasks.splice(tasks.indexOf(task), 1);
    }
}

function MoveInStart(task) {
    if(tasks.includes(task)) {
        tasks.splice(tasks.indexOf(task), 1);
        tasks.unshift(task);
    }
}

Add('Задача 2');
Add('Задача 3');
Add('Задача 4');
Add('Задача 5');
console.log(tasks);

Remove('Задача 9');
console.log(tasks);

MoveInStart('Задача 4');
console.log(tasks);

console.log(tasks[-1]);

const test = '123456asd';
if (test.includes('as')) {
    console.log('содержит')
}

let arr = ['1', '2', '3', '4', '5'];
const arr1 = arr.slice(1);
console.log(arr1);
// foreach проходит  по каждому элементу. el - элемент, i - индекс каждого элемента
// arr - исходный массив
// const arr = [1, 2, 3, 4];
// arr.forEach((score, i, arr => {
//     console.log(score, i);
// }))


// map - для преобразования массива. 
// итерируется по массиву и возвращает новый массив. 
const transaction = [10, -7, 50, -10, 100];

const transactionRub = transaction.map((trans, i) => {
    return trans * 60;
});

//or 
const transactionRub2 = transaction.map(trans => trans * 60);

console.log(transactionRub2);

// filter
// если элемент надо оставить, нужно вернуть тру в колбэке
// возвращает новый массив
const op = [100, 20, -10, -20, 50];
console.log(op.filter(val => {
    return val > 0;
}).map(val => val * 60));
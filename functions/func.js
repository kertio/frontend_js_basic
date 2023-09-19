// Функции первого класса могут храниться в переменных
// их можно передавать в функции и возвраать
const a = (b) => b++;


// Функции высшего порядка принимают или\и 
// возвращают другие функции. 
function g(a) {
    return a;
}


// callback
function add(a, b) {
    return a + b;
}

function substract (a, b) {
    return a - b;
}

function power(a, b) {
    return a**b;
}

// // функция высшего порядка
function calculate(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

const res = calculate(3, 5, substract);
console.log(res);

function mult(a) {
    return a**a;
}

function calc(a, fn) {
    return fn(a);
}

console.log(calc(5, mult));


// Возврат функции из функции
function power(pow) {
    return function(num) {
        return pow*num;
    }
}

const powerOfTwo = power(2);
console.log(powerOfTwo(3));
console.log(powerOfTwo(10));
console.log(power(5)(4));


function t1(arr, fn = (num) => { arr.push(num) }) {
    for (let i = 0; i < 3; i++) {
        console.log(arr[i] ** i);
        fn(arr[i] ** i);
    }
    return num => {
        arr.push(num);

        console.log(arr.join(':'));
        
    }
}

const t = t1([1, 2, 3, 4, 5])('test');

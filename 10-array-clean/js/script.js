function del(el) {
    return function(el2) {
        if (el === el2) {
            return true;
        } else {
            return false;
        }
    }
}

function filterArray(arr, fn) {
    const tmpArr = [];

    for (el of arr) {
        if (!fn(el)) {
            tmpArr.push(el);
        } else {
            continue;
        }
    }

    return tmpArr;
}

const arr = [4, 5, 2, 7, 1, 5, 2];
let newArr = filterArray(arr, del(1));
console.log(newArr);

newArr = filterArray(arr, del(5));
console.log(newArr);

newArr = filterArray(arr, del(2));
console.log(newArr);

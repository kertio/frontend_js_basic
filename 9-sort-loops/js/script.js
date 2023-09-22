/*
Дан массив:
arr = [1, 40, -5, 10, 0]

написать функцию, которая сорирует массив при помощи циклов
*/

function sort(arr) {
    const count = arr.length - 1;
    let sorted = false;

    do {
        sorted = false;
        
        for( let i = 0; i < count; i++ ) {
            if (arr[i] > arr[i + 1]) {
                const tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;

                sorted = true;
            }
        }

    } while ( sorted )

    return arr;
}
const arr = [1, 40, -5, 10, 0];

sort(arr);

console.log(sort(arr));


module.exports = sort;
const cardNumber = '4561-2612-1234-5464';
// 8 5 3 1  4 6 2 2  2 2 6 4  1 4 3 4

function checkCard(cardNumber) {
    const card = cardNumber.replace(/-/g, '');

    const sum = card.split('').map((number, index) => {
        if (!(index % 2)) {
            return number * 2 > 9 ? number * 2 - 9: number * 2;
        } else {
            return number;
        }
    })
    .reduce((acc, num) => {
        return Number(acc) + Number(num);
    }, 0);
    
    return !(sum % 10);
}

console.log(checkCard(cardNumber));

const queryObj = {
    search: 'Вася',
    take: 10
}

const db = {
    name: 'db_users',
    server: 'localhost',
    table: 'users',
    field: 'Admin'
}

function queryGneerateStr(queryStr) {
    const length = Object.keys(queryStr).length;

    return Object.keys(queryStr).reduce((acc, item, index) => {
        acc += `${item}=${queryStr[item]}`;
        if (index < length - 1)
            acc += '&';
        
        return acc;
    }, '?');
}

function queryGneerateStr2(queryStr) {
    return Object.keys(queryStr)
        .reduce((acc, item) => {
            return acc += `${item}=${queryStr[item]}&`;
        }, '?')
        .slice(0, -1);
}


console.log(queryGneerateStr(queryObj));
console.log(queryGneerateStr(db));

console.log(queryGneerateStr2(queryObj));
console.log(queryGneerateStr2(db));
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

function queryGenerateStr(queryStr) {
    const length = Object.keys(queryStr).length;

    return Object.keys(queryStr).reduce((acc, item, index) => {
        acc += `${item}=${queryStr[item]}`;
        if (index < length - 1)
            acc += '&';
        
        return acc;
    }, '?');
}

function queryGenerateStr2(queryStr) {
    return Object.keys(queryStr)
        .reduce((acc, item) => {
            return acc += `${item}=${queryStr[item]}&`;
        }, '?')
        .slice(0, -1);
}

function queryGenerateStr3(queryStr) {
    return Object.entries(queryStr).map((item) => {
        return(`${item[0]}=${item[1]}`);
    }).join('&');
}

console.log(queryGenerateStr(queryObj));
console.log(queryGenerateStr(db));

console.log(queryGenerateStr3(queryObj));
console.log(queryGenerateStr2(db));

console.log(queryGenerateStr3(queryObj));
console.log(queryGenerateStr3(db));


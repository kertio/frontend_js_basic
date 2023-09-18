let hasLicense = true;
let age = 18;
let isDrunk = false;

const res = hasLicense && age >= 18 && !isDrunk ? 'Может' : 'Не может';
console.log(res);


hasLicense = false;
age = 18;
isDrunk = true;

const res1 = (hasLicense && age >= 18 && !isDrunk) && 'Может' || 'Не может';
console.log(res1);
function swap(left, right, leftIndex, rightIndex) {
	const tmp = left[leftIndex];
	left[leftIndex] = right[rightIndex];
	right[rightIndex] = tmp;
}

function crypt(pass) {
	if (pass.length < 6) {
		console.error('Пароль слишком короткий. Введите пароль не менее 6 символов');
		return null;
	}

	// Разделить массив на две части
	const offset = Math.floor(pass.length / 2);
	const left = pass.slice(0, offset).split('');
	const right = pass.slice(offset).split('');

	
	//	Первый символ левой части поменять местами с первым символом правого блока и
	//	последний символ левого блока с последним символом правого блока.
	swap(left, right, 0, 0);
	swap(left, right, left.length - 1, right.length - 1);

	// Поменять местами блоки и сформировать строку с зашифрованным паролем.
	return [right.join(''), left.join('')].join('');
}

function check(encrypted, decrypted) {
	if ((!encrypted || !decrypted) || (encrypted.length < 6 || decrypted.length < 6)) {
		return false;
	}

	const offset = encrypted.length % 2 != 0
		? (encrypted.length / 2) + 1
		: encrypted.length / 2;

	const left = encrypted.slice(0, offset).split('');
	const right = encrypted.slice(offset).split('');
	swap(left, right, 0, 0);
	swap(left, right, left.length - 1, right.length - 1);

	if ([right.join(''), left.join('')].join('') == decrypted) {
		return true;
	}

	return false;
}


const pass = 'pass123';
const encrypt = crypt(pass);

// test
console.log(check(encrypt, pass));
console.log(check(encrypt, 'fdgdfg'));
console.log(check(pass, 'fdgdfg'));
console.log(check('2345ff', 'sdfasda'));

console.log(check('aaa', 'aaa'));
console.log(check('aaaaaa', 'aaaaaa'));
console.log(check('aaaaacb', 'aaaaab'));

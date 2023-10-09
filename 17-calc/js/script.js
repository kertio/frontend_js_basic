const val1 = document.querySelector('.val1');
const val2 = document.querySelector('.val2');
const result = document.querySelector('.result');

function clearInputs(input1, input2) {
	input1.value = '';
	input2.value = '';
}

function calc_plus() {
	result.innerText = Number(val1.value) + Number(val2.value);
	clearInputs(val1, val2);
}

function calc_minus() {
	result.innerText = Number(val1.value) - Number(val2.value);
	clearInputs(val1, val2);
}

function calc_div() {
	result.innerText = Number(val1.value) / Number(val2.value);
	clearInputs(val1, val2);
}

function calc_mul() {
	result.innerText = Number(val1.value) * Number(val2.value);
	clearInputs(val1, val2);
}
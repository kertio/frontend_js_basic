const val1 = document.querySelector('.val1');
const val2 = document.querySelector('.val2');
const result = document.querySelector('.result');

document.querySelector(".operations").addEventListener('click', (event) => {
	switch (event.target.classList[1]) {
		case 'operations__plus':
			result.innerHTML = +val1.value + +val2.value;
			break;
		
		case 'operations__minus':
			result.innerHTML = val1.value - val2.value;
			break;
		
		case 'operations__div':
			result.innerHTML = val1.value / val2.value;
			break;
		
		case 'operations__mul':
			result.innerHTML = val1.value * val2.value;
			break;
		
		default:
			break;
	}

	val1.value = val2.value = '';
});


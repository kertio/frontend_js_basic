const NOT_DATE = -1;
const JAN = 0,
	FEB = 1,
	MAR = 2,
	APR = 3,
	MAY = 4,
	JUN = 5,
	JUL = 6,
	AUG = 7,
	SEP = 8,
	OCT = 9,
	NOV = 10,
	DEC = 11;

const MONTH = 12;



function replaceDateDivider(val, innerDivider, outterDivider) {
	const tmp = val.split('');

	for (const index in tmp) {
		if (tmp[index] === innerDivider) {
			tmp[index] = outterDivider;
		}
	}

	return tmp.join('');
}

// Если строка содержит символы '.' '-' '/' - возможно это дата
function maybeDate(date) {
	return date.includes('/') || date.includes('-') || date.includes('.')
		? date
		: NOT_DATE;
}
	
// Валидация даты
function valiDate(date) {
	const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let tmp = [];
	let day, month, year = 0;

	if (date === NOT_DATE) return NOT_DATE;

	switch (true) {
		case date.includes('-'):
			tmp = date;
			break;
	
		case date.includes('/'):
			tmp = replaceDateDivider(date, '/', '-');
			break;
	
		case date.includes('.'):
			tmp = replaceDateDivider(date, '.', '-');
			break;
	
		default:
			return NOT_DATE;
	}

	if (tmp.split('-').length != 3)
		return NOT_DATE;
	
	[day, month, year] = tmp.split('-');

	// В високосный год 29 дней в феврале
	if (year % 4 == 0) dayOfMonth[FEB]++;
	
	// Дней в месяце в валидном диапазоне?
	if (day <= 0 || day > dayOfMonth[month - 1]) return NOT_DATE;
	
	// Месяц в валидном диапазоне?
	if (month > MONTH || month <= 0) return NOT_DATE;

	return tmp;
}


function parseData(arr) {
	const arrDate = arr
		.map(el => maybeDate(el))				// Заменить все элементы не похожие на даты на константу NOT_DATE.
		.map(el => {										// Оставить в массиве только валидные элементы 
			const valid = valiDate(el);		// соответствующие формату даты.
			// if (valid != NOT_DATE)
				return valid || NOT_DATE;
		})															
		.filter(el => el != NOT_DATE)		// Удалить из массива все элементы NOT_DATE.

	return arrDate;
}

const data = ['28-02-2023', '29-02-2023', 'тест',
	'11.12.2023', '00-13/2022', '29-02-2024',
	'31-14-2023', '00/13/2022', 'test123', '1.9.2023'];

const date = parseData(data);

console.log(date);
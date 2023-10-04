const NOT_DATE = -1;

// Валидация даты
function valiDate(date) {
	const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let day, month, year = 0;

	if (date === NOT_DATE) return NOT_DATE;

	if (date.split('-').length != 3)
		return NOT_DATE;
	
	[day, month, year] = date.split('-');

	// В високосный год 29 дней в феврале
	if (year % 4 == 0) dayOfMonth[1]++;
	
	// Дней в месяце в валидном диапазоне?
	if (day <= 0 || day > dayOfMonth[month - 1]) return NOT_DATE;
	
	// Месяц в валидном диапазоне?
	if (month > 12 || month <= 0) return NOT_DATE;

	return date;
}


function parseData(arr) {
	return arr
		.map(date => {
			if (date.includes('/')) {
				const [m, d, y] = date.split('/');
			
				return [d, m, y].join('-');
			}

			return date;
		})
		// .map(data => data.replace(/\//g, '-'))
		.map(el => valiDate(el) || NOT_DATE)															
		.filter(el => el != NOT_DATE)		// Удалить из массива все элементы NOT_DATE.
}

const data = ['2/14/2023', '28-02-2023', '29-02-2023', 'тест',
	'11.12.2023', '00-13/2022', '29-02-2024', '01/31/2000', '31-04-2023',
	'31-14-2023', '00/13/2022', 'test123', '1.9.2023'];

console.log(parseData(data));
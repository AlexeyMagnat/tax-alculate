/*function calculate() {
    // Получаем значения из полей формы
    var propertyType = document.getElementById('propertyType').value;
    var registrationDate = new Date(document.getElementById('registrationDate').value);

    // Здесь вы можете добавить свои вычисления на основе полученных значений

    // Выводим результат на страницу
    document.getElementById('result').innerText = 'Результат: ...';
}
*/
let habits = [];
const HABIT_KEY = 'HABIT_KEY';

/* utils */

function loadData() {
	const habitsString = localStorage.getItem('HABIT_KEY');
	const habitArray = JSON.parse(habitsString);
	if (Array.isArray(habitArray)) {
		habits = habitArray;
	}
}

function saveData() {
	localStorage.setItem(HABIT_KEY, JSON.stringify(habits));
}

(() => {
	loadData();
})();

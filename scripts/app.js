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

/* render */
function rerenderMenu(activeHabit) {
	if (!activeHabit) {
		return;
	}
	//   document.querySelector(".menu__list")
	for (const habit of habits) {
		existed = document.querySelector(`[menu-habit-id="${habit.id}"]`);
		if (!existed) {
			// создание
			const element = document.createElement('button');
		}
		if (activeHabit.id === habit.id) {
			existed.classList.add('menu__item_active');
		} else {
			existed.classList.remove('menu__item_active');
		}
	}
}

function rerender(activeHabitId) {
	const activeHabit = habits.find((habit) => habit.id === activeHabitId);
	rerenderMenu(activeHabit);
}

/* init */

(() => {
	loadData();
	rerender(habits[0].id);
})();

// тут в переменные мы записали наши кнопки.
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;
console.log(caloriesForm[0])
// span с калориями
const normalCal = document.querySelector(".normal_cal");

// вешаем событие щелчка по кнопки внутри пример функции
resetButton.addEventListener("click", (event) => {
    alert("Reset!");

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});
const genderValue = caloriesForm.gender[0].checked.;
const activityValue = Number(document.querySelector('input[name="activity"]:checked').value);

const old = Number(document.querySelector('#old').);
const height = Number(document.querySelector('#height').value);
const weight = Number(document.querySelector('#weight').value);
const normalCalValue = normalCalValue = ((10 * weight) + (6.25 * height) -
(5 * old) + genderValue) * activityValue;
const lowCalValue = normalCalValue + (normalCalValue/100)*15;
const highCalValue = normalCalValue - (normalCalValue/100)*15;

submitButton.addEventListener("click", (event) => {
    alert("Submit!");

    // эту строчку можно будет убрать, она для теста
    // пример того как можно получить значения в форме. У нас два инпута с именем gender
    // поэтому внутри массива gender мы проверяем поле checked. Нажмите "Рассчитать" и проверьте
    console.log(caloriesForm.gender[0].checked);

    // тоже можно будет удалить, пример как менять верстку из JS
    // нажмите "Рассчитать" и проверьте
    normalCal.textContent = "999999999999";

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});


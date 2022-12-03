function getChecked(field) {
	for (let i = 0; i < field.length; i += 1) {
		if (field[i].checked == true) {
			return field[i]
		}
	}
}
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
const calBlock = document.querySelector(".calBlock")

const caloriesForm = document.forms.counter;
console.log(caloriesForm)
caloriesForm.gender[0].checked = true;

const old = caloriesForm.old
const height = caloriesForm.height
const weight = caloriesForm.weight

height.addEventListener('input', function (event) {
	resetButton.disabled = (height.value == '');
});

weight.addEventListener('input', function (event) {
	resetButton.disabled = (weight.value == '');
});

old.addEventListener('input', function (event) {
	resetButton.disabled = (old.value == '');
});


const normalCal = document.querySelector(".normal_cal");
const lowCal = document.querySelector(".low_cal");
const highCal = document.querySelector(".high_cal");

resetButton.addEventListener("click", (event) => {
	calBlock.style.display = 'none';
	submitButton.disabled = true;
	resetButton.disabled = true;

	getChecked(caloriesForm.gender).checked = false

	caloriesForm.gender[0].checked = true;
	for (var i = 0, l = caloriesForm.activity.length; i < l; i++) {
    caloriesForm.activity[i].selected = caloriesForm.activity[i].defaultSelected;
}
	caloriesForm.old.value = ''
	caloriesForm.height.value = ''
	caloriesForm.weight.value = ''

	event.preventDefault();
});

submitButton.addEventListener("click", (event) => {
	calBlock.style.display = 'flex';
	resetButton.disabled = false;

	window.scrollTo(0, document.body.scrollHeight);

	const genderVal = Number(getChecked(caloriesForm.gender).value);
	const activityVal = Number(caloriesForm.activity.value);
	const oldVal = Number(old.value);
	const heightVal = Number(height.value);
	const weightVal = Number(weight.value);

	const normalCalValue = ((10 * weightVal) + (6.25 * heightVal) -
		(5 * oldVal) + genderVal) * activityVal;

	const lowCalValue = normalCalValue + (normalCalValue / 100) * 15;
	const highCalValue = normalCalValue - (normalCalValue / 100) * 15;

	normalCal.textContent = normalCalValue.toFixed(0);
	lowCal.textContent = lowCalValue.toFixed(0);
	highCal.textContent = highCalValue.toFixed(0);
	console.log(genderVal, activityVal, oldVal, heightVal, weightVal)
	event.preventDefault();
});

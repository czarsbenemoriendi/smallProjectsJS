const input = document.querySelector('#converter');
const result = document.querySelector('.result');
const spanOne = document.querySelector('.one');
const spanTwo = document.querySelector('.two');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');

const convFn = () => {
	if (input.value === '') {
		result.style.color = 'red';
		result.textContent = `Wprowadź wartość`;
	} else if (spanOne.textContent === '°C') {
		result.style.color = '';
		let fahrenheit = input.value * 1.8 + 32;
		result.textContent = `${input.value}°C to ${fahrenheit}°F`;
	} else {
		result.style.color = '';
		let celsius = (input.value - 32) / 1.8;
		result.textContent = `${input.value}°F to ${Math.floor(celsius)}°C`;
	}
};
const resetFn = () => {
	result.textContent = '';
	input.value = '';
};

const changeFn = () => {
	if (spanOne.textContent === '°C') {
		spanOne.textContent = '°F';
		spanTwo.textContent = '°C';
	} else {
		spanOne.textContent = '°C';
		spanTwo.textContent = '°F';
	}
	result.textContent = '';
};

convBtn.addEventListener('click', convFn);
resetBtn.addEventListener('click', resetFn);

changeBtn.addEventListener('click', changeFn);

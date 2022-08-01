// Each exercices i took from https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#EDITOR
// 1
const date = new Date();
const findDay = () => {
	const day = date.getDay();
	const week = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	];

	console.log(
		`Today is: ${week[day].charAt().toUpperCase() + week[day].slice(1)}`
	);
};
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`Actual hour: ${hour}:${minutes}:${seconds}`);

// 2
const button = document.querySelector('#print');
button.addEventListener(
	'click',
	(printPage = () => {
		window.print();
	})
);

// 3
console.log(date.toLocaleDateString());
console.log(date.getDate() + `-` + date.getMonth() + `-` + date.getFullYear());

// 4

const triangleArea = (x, y, z) => {
	const halfCircuit = (x + y + z) / 2;
	const heronsFormula = Math.sqrt(
		halfCircuit * (halfCircuit - x) * (halfCircuit - y) * (halfCircuit - z)
	);
	console.log(`The area of triangle is: ${heronsFormula}`);
};
triangleArea(5, 6, 7);

// 5

// 6
const leapYearFunction = (year) => {
	const leap = new Date(year, 1, 29).getDate() === 29;
	if (leap) {
		console.log(year + ` is a leap year`);
	} else {
		console.log(year + ` isn't a leap year`);
	}
};
leapYearFunction(2024);

// 7

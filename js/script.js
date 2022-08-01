/*
    Metody do wykorzystania:
    charAt()

    replace()* podchwytliwe 🙂 

    split()

*/

// const text1 = 'powiększ mnie!';
// const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';
// const text3 = '$#%#^ wytnij te dziwne znaki na początku!';
// const text4 = 'sprawdź, czy zawieram słowo "czy"';
// const text5 =
// 	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
// const text6 = 'pies zamień każde słowo pies, na słowo kot pies';
// const text7 = 'podziel, ten, string, od, przecinków';

// console.log(text1.toUpperCase(), text2.toLowerCase());
// const text3a = text3.slice(6);
// console.log(text3a.charAt(0).toUpperCase() + text3a.substring(1));

// console.log(text4.includes('czy'));
// const regExp = /L/g;
// console.log(text5.slice(2, 3));
// console.log(text6.replaceAll('pies', 'kot'));
// console.log(text7.split(','));

// const password = '2brjio!';

// if (password.length > 10 && password.includes('!')) {
// 	console.log('Masz rewelacyjne hasło');
// } else if (password.length > 10) {
// 	console.log('Masz dobre hasło');
// } else {
// 	console.log('Masz za krótkie hasło');
// }

// const color = 'blue';
// if (color == 'red') {
// 	if (10 > 11) {
// 		console.log('true true');
// 	} else {
// 		console.log('false false');
// 	}
// } else {
// 	console.log('false');
// }

// const day = 'niedziela';

// switch (day) {
// 	case 'poniedziałek':
// 		console.log('dziś jest poniedziałek');
// 		break;
// 	case 'wtorek':
// 		console.log('dziś jest wtorek');
// 		break;
// 	case 'środa':
// 		console.log('dziś jest środa');
// 		break;
// 	case 'czwartek':
// 		console.log('dziś jest czwartek');
// 		break;
// 	case 'piątek':
// 		console.log('dziś jest piątek');
// 		break;

// 	default:
// 		console.log('weekend');
// 		break;
// }

// const x = 19;

// if (x > 20) {
// 	console.log(`${x} > 20`);
// } else {
// 	console.log(`${x} < 20`);
// }

// const newX = x > 20 ? `${x} > 20` : `${x} < 20`;

// console.log(newX);

// let x = 10;
// let y = 50;

// if (x > y) {
// 	console.log(`${x} jest większe, niż ${y}`);
// }

// const color = 'blue';
// const newColor = 'green';

// if (color == newColor) {
// 	console.log('kolory się zgadzają');
// } else {
// 	console.log('kolory się nie zgadzają');
// }

// if (x > y) {
// 	console.log(`${x} > ${y}`);
// } else if (x === y) {
// 	console.log(`${x} = ${y}`);
// } else {
// 	console.log(`${x} < ${y}`);
// }

// const promo = `0`;

// switch (promo) {
// 	case '10%':
// 		console.log('Dziś mamy 10% zniżki!');
// 		break;
// 	case '20%':
// 		console.log('Dziś mamy 20% zniżki!');
// 		break;
// 	case '30%':
// 		console.log('Dziś mamy 30% zniżki!');
// 		break;

// 	default:
// 		console.log('dziś nie mamy promocji');
// 		break;
// }
// const x = 30;

// if (x >= 100) {
// 	console.log(`x > 100`);
// } else if ((x < 100 && x > 30)) {
// 	console.log(`x jest średniakiem`.toUpperCase());
// } else if (x <= 30) {
// 	console.log(`x jest mały`.toUpperCase());
// }

// x % 2 == 0 ? console.log('x jest parzyste') : console.log('x jest nieparzyste');

// if (x % 2 == 0) {
// 	console.log('x jest parzyste');
// } else {
// 	console.log('x jest nieparzyste');
// }

// for (let i = 0; i < array.length; i++) {
// 	const element = array[i];
// }

// const cities = ['Warszawa', 'Kraków', 'Wrocław'];

// for (let i = 0; i < cities.length; i++) {
// 	console.log(`To miasto nazywa się: ${cities[i]}`);
// }

// let x = 20;

// do {
// 	x -= 3;
// 	console.log(x.lastindexof());
// } while (x > 0);

// const numbers = [5, 8, 10, 23, 48, 60];
// let five = 5;
// let i = 0;
// i++;

// for (const number of numbers) {
// 	const result = number / 5;
// 	console.log(result);
// }

// if (numbers % 2 == 0) {
// 	console.log(`${numbers[i]} jest parzyste`);
// } else {
// 	console.log(`${numbers[i]} jest nieparzyste`);
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }
// console.log('---------');

// for (const number of numbers) {
// 	if (number % 2 == 0) {
// 		console.log(
// 			`%c${number} jest parzyste`,
// 			`background-color: gold; color: #333;`
// 		);
// 	} else {
// 		console.log(`%c${number} jest nieparzyste`, `background-color: red;`);
// 	}
// }

// const number = 1;
// console.log(number);

// const array = ['red', 'blue', 'green'];
// console.log(array);

// array.unshift('black', 'white');
// console.log(array);
// array.shift();
// console.log(array);

// array.push('gold');
// console.log(array);
// array.pop();
// console.log(array);

// const meals = ['schabowy', 'mielone', 'burger'];
// const drinks = ['pepsi', 'cola', 'fanta'];
// const newMenu = drinks.concat(meals);
// const menu = [...drinks, ...meals];
// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2];
// const colors = ['red', 'green', 'blue', true, 123];
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀'];

// const numbers2 = numbers.slice(0, 2);
// console.log(numbers2);

// const numbers3 = numbers.slice(-3);
// console.log(numbers3);

// const randomStuff = colors.splice(-2);
// console.log(colors);
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, 'test');
// console.log(newCars);
// console.log(cars);

// const numbers = [0, 23, 48, 176, 2, 34, 11];

// function number(x) {
// 	return x % 2 === 0;
// }

// console.log(numbers.filter(number));

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join( ));

// console.log(elements.join(', '));

// console.log(elements.join('-'));

// const array = [1, 2, 3, 4, 5, 6];

// Array.of(7); // [7]
// Array(7); // array of 7 empty slots

// Array.of(1, 2, 3); // [1, 2, 3]
// Array(1, 2, 3); // [1, 2, 3]

// console.log(array.pop());
// array.push(null, '');
// console.log(array);

// console.log(array.reverse());

// console.log(array);

// const letters = ['c', 'd'];
// letters.unshift('a', 'b');
// letters.push('e', 'f');
// console.log(letters);

// console.log(letters.includes('c'));

// const numbers = [1, 2, 3];
// const meals = ['hamburger', 'pizza', 'honey'];

// const array = numbers.concat(meals);
// console.log(array);

// const array1 = [...numbers, ...meals];

// console.log(array1);

// const numbers = [1, 5, 13, 26, 48];
// const newNumbers = numbers.map((x) => x * 5);
// console.log(newNumbers);

// for (const number of newNumbers) {
// 	if (number % 2 === 0) {
// 		console.log(`Liczba parzysta: ${number} `);
// 	} else {
// 		console.log(`Liczba nieparzysta: ${number} `);
// 	}
// }
// if (modulus) {

// }

// const colors = ['red'];
// colors.push('black');
// colors.unshift('white');
// console.log(colors.reverse());

// for (let i = 0; i < color.length; i++) {
// 	// console.log(`Mój ulubiony kolor to: ${color[i].toUpperCase()}`);
// 	console.log(
// 		`Mój ulubiony kolor to: ${
// 			color[i].charAt().toUpperCase() + color[i].slice(1)
// 		}`
// 	);
// }

// for (const color of colors) {
// 	console.log(
// 		`Mój ulubiony kolor to: ${color.charAt().toUpperCase() + color.slice(1)}`
// 	);
// }

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge';
// console.log(cars);

// const carArray = cars.split(', ');
// console.log(carArray);

// const newArray = carArray.length > 3 ? `Jest OK` : `Nie jest OK`;
// console.log(newArray);

// const isAudiInArray = carArray.includes('Audi');

// if (isAudiInArray) {
// 	carArray.push('Kia');
// } else {
// 	carArray.pop();
// }

// console.log(carArray);

// const write = function (name, age) {
// 	console.log(`Cześć, mam na imię ${name} i mam ${age} lat.`);
// };

// write('Paweł', 23);

// const array = (age, name) =>
// 	console.log(`Cześć, mam na imię ${name}, i mam ${age} lat.`);

// array(23, 'Paweł');

// const hello = (name = 'drogi użytkowniku') =>
// 	console.log(`Cześć, ${name}, jak się masz?`);

// hello();

// const add = (x = 5, y = 10) => {
// 	console.log(x + y);
// };

// add(10);

// const numbers = (x, y, ...z) => {
// 	console.log(x, y, z);
// };

// numbers(13, null, 21, 25, 267, 2677, 7543, 67534);

// let score;

// const add = (x, y) => {
// 	score = x + y;

// 	if (score % 2 === 0) {
// 		evenNum();
// 	} else {
// 		oddNum();
// 	}
// };
// const evenNum = () => {
// 	console.log(`Liczba ${score} jest parzysta`);
// };
// const oddNum = () => {
// 	console.log(`Liczba ${score} jest nieparzysta`);
// };

// add(2, 2);
// add(2, 3);
// add(1, 2);
//  if (oddNum)

// const fahrenheit = (T) => {
// 	let temp;
// 	let celsius = T;
// 	temp = celsius * 1.8 + 32;
// 	console.log(`Temperatura to ${temp}℉`);
// };

// fahrenheit(4);

// const num = 10;
// const numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }
// console.log(numbers);

// const arrowFunction = (x) => {
// 	if (x % 3 === 0 && x !== 0) {
// 		console.log(`${x} jest podzielne przez 3`);
// 	} else {
// 		console.log(`${x} nie jest podzielne przez 3 bądź ${x} = 0`);
// 	}
// };

// numbers.forEach(arrowFunction);

// const test = document.getElementById(``);
// console.log(test);

// const test2 = document.getElementsByTagName('');
// console.log(test2);

// const test3 = document.getElementsByClassName('container');
// console.log(test3);

// const test4 = document.querySelector('h4');
// console.log(test4);

// const test5 = document.querySelector('.container');
// console.log(test5);

// const heading = document.querySelector('h1');
// console.log(heading);

// const p = document.querySelectorAll('p');
// console.log(p);

// const divVariable = document.querySelector('.test');
// console.log(divVariable);

// const pVariable = divVariable.querySelector('#test');
// console.log(pVariable);

// const ulList = document.createElement('ul');
// const liItem = document.createElement('li');
// liItem.textContent = 'cześć';

// const body = document.body.appendChild(ulList);
// ulList.appendChild(liItem);

// const div = document.querySelector('div');
// const p = document.createElement('p');
// p.textContent = 'hello';

// div.appendChild(p);

// const container = document.querySelector('.container');
// const img = document.createElement('img');

// const ul = document.createElement('ul');

// const heading = document.createElement('h2');
// heading.textContent = 'hi';

// document.querySelector('ul');
// ul.appendChild(img);
// div.appendChild(heading);
// div.appendChild(ul);
// div.append(p, heading, `<p>'cześć'</p>`);
// const
// const
// const

// const celsius = 'c';
// const fahrenheit = 'f';
// let temperature = 'T';

// const fahrConv = (T) => {
// 	T * 1.8 + 32;
// 	console.log(`Temperatura jest równa ${fahrConv}`);
// };

// const celsConv = (fahrConv) => {
// 	fahrForm - 32 * 0.55;
// };

// fahrConv(4);

// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');

// const test = () => {
// 	console.log(`double click`);
// };
// btn1.addEventListener('mouseover', function () {
// 	console.log(`najechano na mnie`);
// });
// btn2.addEventListener('dblclick', test);

// const allCircles = document.querySelectorAll(`.circle`);
// allCircles.forEach((circle) =>
// 	circle.addEventListener('click', () => {
// 		console.log(circle);
// 	})
// );

// const div = document.createElement('div');
// const gold = document.querySelector('.gold');
// gold.appendChild(div);

// let i = 5;

// i++;
// console.log(i);

// const addBtn = document.querySelector('.add');
// const removeBtn = document.querySelector('.delete');
// const toggleBtn = document.querySelector('.toggle');
// const li = document.getElementsByTagName('.list');

// const addClass = () => {
// 	li.classList.add('list');
// };
// const removeClass = () => {
// 	li.classList.remove('list');
// };
// const toggleClass = () => {
// 	li.classList.toggle('list');
// };
// addBtn.addEventListener('click', addClass);
// removeBtn.addEventListener('click', removeClass);
// toggleBtn.addEventListener('click', toggleClass);

// const body = document.querySelector('body');
// const ulList = document.createElement('ul');
// let num;

// body.appendChild(ulList);

// for (let i = 1; i <= 10; i++) {
// 	const li = document.createElement('li');
// 	li.textContent = i;
// 	ulList.appendChild(li);
// }

// const lastLi = ulList.querySelector('li:last-child');
// lastLi.textContent = `Jestem ostatnim elementem.`;

// lastLi.style.backgroundColor = 'royalblue';
// lastLi.style.padding = '20px 40px';
// lastLi.style.fontSize = '48px';

// const test = document.getElementById('title');
// console.log(test);

// const test2 = document.getElementsByTagName('h4');
// console.log(test2);

// const test3 = document.getElementsByClassName('wrapper');
// console.log(test3);

// const heading = document.querySelector('h1');
// console.log(heading);

// const array = document.querySelectorAll('p');
// console.log(array);

// const testDiv = document.querySelector('.test');
// console.log(testDiv);

// const pTest = testDiv.querySelector('#test');
// console.log(pTest);
// const ulList = document.createElement('ul');
// const liItem = document.createElement('li');
// const pTest = document.createElement('p');
// const body = document.querySelector('body');
// const exDiv = body.querySelector('.container div');

// liItem.textContent = 'cześć';
// pTest.textContent = 'cześć';

// body.appendChild(ulList);
// ulList.appendChild(liItem);
// exDiv.appendChild(pTest);

// console.log(exDiv);

// const div = document.querySelector('.test');
// const p = document.querySelector('p');

// div.removeChild(p);

// const allCircles = document.querySelectorAll('.circle');
// const lime = document.querySelector('.lime');
// const red = document.querySelector('.red');
// const purple = document.createElement('div');
// purple.classList.add('circle', 'purple');

// red.appendChild(purple);

// allCircles.forEach((circle) =>
// 	circle.addEventListener('click', () => {
// 		console.log(circle);
// 	})
// );

// lime.addEventListener('click', (e) => {
// 	if (e.target.matches('.circle2')) {
// 		console.log('test');
// 	}
// });

// const ulList = document.createElement('ul');

// document.body.append(ulList);

// for (let i = 1; i <= 10; i++) {
// 	const liItem = document.createElement('li');
// 	liItem.textContent = i;
// 	ulList.append(liItem);
// }

// const lastLi = document.querySelector('li:last-child');

// lastLi.textContent = 'Jestem ostatnim elementem';
// lastLi.style.backgroundColor = 'royalblue';
// lastLi.style.padding = '20px 40px';
// lastLi.style.fontSize = '48px';

// 'use strict';

// const allP = document.querySelectorAll('p');
// const btns = document.querySelectorAll('button');
// const divSquare = document.querySelector('.square');

// const redSquare = () => {
// 	divSquare.addEventListener(
// 		'mouseenter',
// 		() => (divSquare.style.backgroundColor = 'tomato')
// 	);
// };
// redSquare();
// const blueSquare = () => {
// 	divSquare.addEventListener(
// 		'mouseleave',
// 		() => (divSquare.style.backgroundColor = 'royalblue')
// 	);
// };
// blueSquare();

// btns[0].addEventListener('dblclick', () => {
// 	console.log('hello');
// });
// btns[1].addEventListener('click', () => {
// 	allP.forEach((p) => p.classList.toggle('show'));
// });

// divSquare.setAttribute('style', `background-color: white;`);

// const img = document.createElement('img');
// img.setAttribute('src', 'https://picsum.photos/500/500');
// img.setAttribute('alt', 'totally random img');

// document.body.append(img);

// const printHello = () => {
// 	console.log('hello everyone');
// };

// setTimeout(printHello, 2000);

// const ulList = document.querySelector('ul');
// const liItem = document.querySelectorAll('li');

// for (let number = 1; number <= 5; number++) {
// 	liItem.forEach((liItem) => liItem.textContent([number]));
// }

// const country = 'Poland';
// const continent = 'Europe';
// let populationPoland = 38;

// console.log(
// 	`I'm live in ${country}, ${country} is located in ${continent} and has a ${populationPoland} milions inhabitants.`
// );

// const isIsland = false;
// let language;
// language = 'Polish';

// console.log(
// 	typeof isIsland,
// 	typeof country,
// 	typeof continent,
// 	typeof populationPoland,
// 	typeof language
// );

// console.log(populationPoland / 2);
// populationPoland++;
// console.log(populationPoland);

// let populationFinland = 6;

// if (populationPoland > populationFinland) {
// 	console.log(`Poland population is greater than Finland`);
// }

// const averagePopulation = 33;

// console.log(
// 	`Average population is ${averagePopulation} milions and it's less than population in Poland ${populationPoland} milions`
// );
// const description = `${country} is in ${continent}, and its ${populationPoland} million people speak ${language}.`;
// console.log(description);

// console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbours = Number(
// 	prompt(`How many neighbour countries does your country have?`)
// );
// if (numNeighbours === 1) {
// 	console.log('Only 1 border');
// } else if (numNeighbours > 1) {
// 	console.log(`More than 1 border`);
// } else {
// 	console.log(`No borders `);
// // }
// let country;
// let population = 49;
// let language = 'english';
// let isIsland = false;

// if (population < 50 && language === 'english' && !isIsland) {
// 	console.log(`This country is right for her`);
// } else {
// 	console.log('Poland does not meet your criteria');
// }

// const Dolphins = {
// 	dataOne: Math.floor((96 + 108 + 89) / 3),
// 	dataTwo: Math.floor((97 + 112 + 101) / 3),
// 	dataThree: Math.floor((97 + 112 + 101) / 3),
// };
// const Koalas = {
// 	dataOne: Math.floor((88 + 91 + 110) / 3),
// 	dataTwo: Math.floor((109 + 95 + 123) / 3),
// 	dataThree: Math.floor((109 + 95 + 106) / 3),
// };
// const minScore = 100;

// console.log(`Dolphins average score:
// first score: ${Dolphins.dataOne},
// second score: ${Dolphins.dataTwo},
// third score: ${Dolphins.dataThree}`);

// console.log(`Koalas average score:
// first score: ${Koalas.dataOne},
// second score: ${Koalas.dataTwo},
// third score: ${Koalas.dataThree}`);
// console.log(`-------------`);
// // First match

// if (Dolphins.dataThree > Koalas.dataThree && Dolphins.dataThree >= 100) {
// 	console.log(`Dolphins are the winners`);
// } else if (Dolphins.dataThree < Koalas.dataThree && Koalas.dataThree >= 100) {
// 	console.log(`Koalas are the winners`);
// } else if (
// 	Dolphins.dataThree === Koalas.dataThree &&
// 	Dolphins.dataThree >= 100 &&
// 	Koalas.dataThree >= 100
// ) {
// 	console.log(`There is no winner, it's a draw`);
// } else {
// 	console.log(`No one wins the trophy`);
// }

// if (Dolphins.dataOne > Koalas.dataThree && Dolphins.dataOne >= minScore) {
// 	console.log(`Dolphins are winner`);
// } else if (Dolphins.dataOne < Koalas.dataOne && Koalas.dataOne >= minScore) {
// 	console.log(`Koalas are winner`);
// }

// console.log(`-------------`);

// second match

// if (Dolphins.dataTwo > Koalas.dataTwo || Dolphins.dataTwo === Koalas.dataTwo) {
// 	console.log(`Dolphins are the winner of the competition`);
// } else {
// 	console.log(`Koalas are the winner of the competition`);
// }

// console.log(`-------------`);

// third match

// if (Dolphins.dataThree > Koalas.dataThree) {
// 	console.log(`Dolphins are the winner of the competition`);
// } else if (Dolphins.dataThree === Koalas.dataThree) {
// 	console.log(`There was a draw.`);
// } else {
// 	console.log(`Koalas are the winner of the competition`);
// }

// console.log(`-------------`);

// const img = document.querySelector('img');

// const typeAnything = () => {
// 	console.log(`say hello`);
// };
// setTimeout(() => {
// 	typeAnything();
// }, 1000);
// const setTimeoutPic = () => {
// 	img.setAttribute(`src`, `https://source.unsplash.com/random/200x200`);
// 	img.setAttribute(`alt`, `just totally random pic`);
// };

// setTimeout(setTimeoutPic, 1000);

// const liItems = document.querySelectorAll('li');
// let number = 1;

// for (const liItem of liItems) {
// 	liItem.textContent = number;
// 	number++;
// }

// for (let i = 0; i <= liItems.length; i++) {
// 	liItems[i].textContent = number;
// 	liItems[i].dataset.id = number;
// 	number++;
// }

// const day = {
// 	firstDayOfWeek: 'monday',
// 	secondDayOfWeek: 'tuesday',
// 	thirdDayOfWeek: 'wednsday',
// 	fourthDayOfWeek: 'thursday',
// 	fifthDayOfWeek: 'friday',
// 	sixthDayOfWeek: 'saturday',
// 	seventhDayOfWeek: 'sunday',
// };
// const day = 'sunda';

// if (day === 'monday') {
// 	console.log('Plan course structure');
// } else if (day === 'tuesday') {
// 	console.log(`Prepare theory wideo`);
// } else if (day === 'wednsday' || day === 'thursday') {
// 	console.log(`Write code examples`);
// } else if (day === 'friday') {
// 	console.log(`record videos`);
// } else if (day === 'saturday' || day === 'sunday') {
// 	console.log(`enjoy the weekend`);
// } else {
// 	console.log(`not a valid day`);
// }

// if (  ) {

// } else {

// }

const currentDay = document.querySelector('.current-day');
const funFact = document.querySelector('.fun-fact');
const date = new Date();
const numOfDay = date.getDay();
const weekDay = date.toLocaleString('default', { weekday: 'long' });
const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.',
];
console.log(facts);
const factText = () => {
	let number = Math.floor(Math.random() * facts.length);
	funFact.textContent = facts[number];
};
const insertText = () => {
	currentDay.innerText = weekDay.toLowerCase();
};
const daysOfWeek = () => {
	switch (numOfDay) {
		case 0:
			insertText();
			break;
		case 1:
			insertText();
			break;
		case 2:
			insertText();
			break;
		case 3:
			insertText();
			break;
		case 4:
			insertText();
			break;
		case 5:
			insertText();
			break;
		case 6:
			insertText();
			break;
	}
};

daysOfWeek();
factText();

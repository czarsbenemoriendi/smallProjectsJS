const passwordInput = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /([a-z])/i;
const numbers = /([0-9])/;
const specialSigns = /([!@#$%^&*()])/;
const minValue = 10;

const showMsg = () => {
	if (
		passwordInput.value.length > minValue &&
		passwordInput.value.match(letters) &&
		passwordInput.value.match(numbers) &&
		passwordInput.value.match(specialSigns)
	) {
		p.textContent = 'Masz bardzo dobre hasło!';
		p.style.color = 'lime';
	} else if (
		passwordInput.value.length > minValue &&
		passwordInput.value.match(letters) &&
		passwordInput.value.match(numbers)
	) {
		p.textContent = 'Masz dobre hasło!';
		p.style.color = 'lime';
	} else {
		p.textContent = 'Masz złe hasło!';
		p.style.color = 'red';
	}
};
const checkPass = () => {
	if (passwordInput.value !== '') {
		showMsg();
	} else {
		p.textContent = 'Nie podałeś hasła...';
		p.style.color = '';
	}
};

passwordInput.addEventListener('keyup', checkPass);

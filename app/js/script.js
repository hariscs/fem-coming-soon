// getting all the elements
const btn = document.querySelector('.banner__form--btn');
const email = document.querySelector('.banner__form--input');
const text = document.querySelector('.error-text');
const border = document.querySelector('.er-br');
const icon = document.querySelector('.error');
const format =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// functions
function validate(e) {
	e.preventDefault();
	console.log(email.value);
	if (format.test(email)) {
		text.classList.add('d-n');

		icon.classList.add('d-n');
	} else {
	}
}

// adding event listener
btn.addEventListener('submit', validate);

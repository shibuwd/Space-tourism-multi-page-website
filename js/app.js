const hamburger = document.querySelector(
	'.header .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll(
	'.header .nav-bar .nav-list ul li a'
);
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#fff';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach(item => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//active buttons

// let navList = document.getElementById('nav__list');
// let buttons = document.getElementsByClassName('navbar__link');

// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function () {
// 		let current = document.getElementsByClassName('active__link');
// 		current[0].className = current[0].className.replace('active__link', '');
// 		this.className += 'active__link';
// 	});
// }

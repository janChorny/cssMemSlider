'use strict'

const screen = document.querySelector('.main__screen');
const slider = document.querySelector('.slider');
const text = document.querySelector('.main__text');
const controls = document.querySelectorAll('.controls-main__input');

 function moveLeft() {
 	slider.classList.add('transition-left');
	 controls.forEach(element => {
		 element.removeEventListener('click', moveLeft);
	 });
 }

controls[0].addEventListener('click', () => {
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	slideRight.innerHTML = '<img src="./assets/images/fixing_the_bug.jpg" width="700" height ="700">';
	slideRight.value = "yes...yesterday found a new bug, fixing it";
	text.textContent = slideRight.value;
	text.classList.add('transition-text-left');
	moveLeft();
	slider.addEventListener("animationend", (animationEvent) => {
		slider.classList.remove('transition-left');
		let slides = document.querySelectorAll('.slider__item');
		slides[0].innerHTML = slideRight.innerHTML;
		text.textContent = slideRight.value;
		slideRight.remove();
		controls.forEach(element => {
			element.addEventListener('click', moveLeft);
		});
		text.classList.remove('transition-text-left');
	})
});

controls[1].addEventListener('click',()=>{
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);	
	slideRight.innerHTML = '<img src="./assets/images/music.jpg" width="700" height ="700">';
	slideRight.value = "Каждый программист немного музыкант";
	text.textContent = slideRight.value;
	text.classList.add('transition-text-left');
	moveLeft();
	slider.addEventListener("animationend", (animationEvent) => {
		slider.classList.remove('transition-left');
		let slides = document.querySelectorAll('.slider__item');
		slides[0].innerHTML = slideRight.innerHTML;
		slideRight.remove();
		controls.forEach(element => {
			element.addEventListener('click', moveLeft);
		});
		text.classList.remove('transition-text-left');
	})
});

controls[2].addEventListener('click', () => {
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	slideRight.innerHTML = '<img src="./assets/images/programmer.jpg" width="700" height ="700">';
	slideRight.value = "Ты ж программист!...";
	text.textContent = slideRight.value;
	text.classList.add('transition-text-left');
	moveLeft();
	slider.addEventListener("animationend", (animationEvent) => {
		slider.classList.remove('transition-left');
		let slides = document.querySelectorAll('.slider__item');
		slides[0].innerHTML = slideRight.innerHTML;
		text.textContent = slideRight.value;
		slideRight.remove();
		controls.forEach(element => {
			element.addEventListener('click', moveLeft);
		});
		text.classList.remove('transition-text-left');
	})
});

controls[3].addEventListener('click', () => {
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	slideRight.innerHTML = '<img src="./assets/images/usb.jpg" width="700" height ="700">';
	slideRight.value = "How to insert usb";
	text.textContent = slideRight.value;
	moveLeft();
	text.classList.add('transition-text-left');
	slider.addEventListener("animationend", (animationEvent) => {
		slider.classList.remove('transition-left');
		let slides = document.querySelectorAll('.slider__item');
		slides[0].innerHTML = slideRight.innerHTML;
		text.textContent = slideRight.value;
		slideRight.remove();
		controls.forEach(element => {
			element.addEventListener('click', moveLeft);
		});
		text.classList.remove('transition-text-left');
	})
});
'use strict'

const screen = document.querySelector('.main__screen');
const slider = document.querySelector('.slider');
const text = document.querySelector('.main__text');
const controls = document.querySelectorAll('.main__controls-item');
const controlsInner = document.querySelectorAll('.main__controls-inner'); 

function moveLeft() {
 	slider.classList.add('transition-left');
	 controls.forEach(element => {
		 element.removeEventListener('click', moveLeft);
	 });
 }

controls.forEach((el) => el.addEventListener('mouseover', ()=>{
	// el.firstChild.classList.add('hover');
	console.log(el.firstChild);
}));

controls.forEach((el) => el.addEventListener('mouseout', () => {
	// el.firstChild.classList.remove('hover');
}));


controls[0].addEventListener('click', () => {
	controlsInner[0].classList.add('active');
	controlsInner.forEach(element => {
		if (element !== controlsInner[0]){
			element.classList.remove('active');
		}
	});
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	let image = document.createElement('div');
	image.classList.add('image');
	image.classList.add('image--one');
	slideRight.append(image);
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
	controlsInner[1].classList.add('active');
	controlsInner.forEach(element => {
		if (element !== controlsInner[1]) {
			element.classList.remove('active');
		}
	});
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	let image = document.createElement('div');
	image.classList.add('image');
	image.classList.add('image--two');
	slideRight.append(image);
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
	controlsInner[2].classList.add('active');
	controlsInner.forEach(element => {
		if (element !== controlsInner[2]) {
			element.classList.remove('active');
		}
	});
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	let image = document.createElement('div');
	image.classList.add('image');
	image.classList.add('image--three');
	slideRight.append(image);
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
	controlsInner[3].classList.add('active');
	controlsInner.forEach(element => {
		if (element !== controlsInner[3]) {
			element.classList.remove('active');
		}
	});
	let slideRight = document.createElement('div');
	slideRight.classList.add('slider__item');
	slider.append(slideRight);
	let image = document.createElement('div');
	image.classList.add('image');
	image.classList.add('image--four');
	slideRight.append(image);
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
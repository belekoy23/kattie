
const slider = document.querySelector(".slider");
const btns = document.querySelectorAll(".slide-button");
const slides = document.querySelectorAll(".img");
const sliderOptions = document.querySelectorAll(".slider-options");

var index = 1;
var op_index = 0;
var size = slides[index].clientWidth;

update();

function update(){
	slider.style.transform = "translateX("+ (-size * index) +"px)";

	sliderOptions.forEach(op => op.classList.remove('colored'));
	sliderOptions[op_index].classList.add('colored');
}

function slide(){
	slider.style.transition = "transform .5s ease-in-out";
    update();
}


function btnCheck() {
	if (this.id === "prev") {
		index--;

		if (op_index == 0 ) {
			op_index = 4;
		} else {
			op_index--;
		}
	} else if (this.id === "next") {
		index++;

		if (op_index == 4 ) {
			op_index = 0;
		} else {
			op_index++;
		}
	}
	slide();
}

function optionFunc(){
	let i = Number(this.getAttribute('option-index'));
	index = i + 1;
	op_index = i;
	slide();
}

slider.addEventListener('transitionend', () => {
	if(slides[index].id === "first"){
		slider.style.transition = "none";
		index = slides.length - 2;
		slider.style.transform = "translateX("+ (-size * index) +"px)";
	}
	else if(slides[index].id === "last"){
		slider.style.transition = "none";
		index = 1;
		slider.style.transform = "translateX("+ (-size * index) +"px)";
	}
});

btns.forEach(btn => btn.addEventListener('click', btnCheck));
sliderOptions.forEach(option => option.addEventListener('click', optionFunc));
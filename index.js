"use strict";
let questions = document.getElementsByClassName("container-question");
// console.log(questions[0].children[1]);

for(let i=0;i<questions.length;i++) {
	questions[i].addEventListener('click', () => {
		let active = document.getElementsByClassName("active");
		let answers = document.getElementsByClassName("show");
		let arrows = document.getElementsByClassName("rotate");

		// console.log(questions[i].children);
		if(questions[i].children[2].classList.contains("show")) {
			questions[i].children[2].classList.remove("show");
			questions[i].children[1].classList.remove("rotate");
			questions[i].children[0].classList.remove("active");
		}else if(answers.length) {
			answers[0].classList.remove("show");
			active[0].classList.remove("active");
			arrows[0].classList.remove("active");
			questions[i].children[2].classList.add("show");
			questions[i].children[1].classList.add("rotate");
			questions[i].children[0].classList.add("active");
		}else{
			questions[i].children[2].classList.add("show");
			questions[i].children[1].classList.add("rotate");
			questions[i].children[0].classList.add("active");
		}
	});
}
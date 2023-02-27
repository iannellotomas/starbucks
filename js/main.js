addEventListener("load", () => {
	menuOptions();
	scrolledNav();
});
addEventListener("resize", () => menuOptions());

AOS.init(); // Animation on scroll
const aside = document.querySelector(".nav__right");

// ASIDE
function menuOptions() {
	if (innerWidth <= 850) {
		$(".hide").removeClass("hide").addClass("visible");
		aside.classList.add("closed");
	} else {
		$(".visible").removeClass("visible").addClass("hide");
		aside.classList.remove("closed");
	}
}

// ASIDE BUTTON
const menu = document.querySelector(".nav__right");
const changeMenu = document.querySelector(".openNav");

changeMenu.addEventListener("click", () => {
	changeMenu.classList.toggle("active");
	menu.classList.toggle("closed");
});

// NAV SCROLLED
const nav = document.querySelector("nav");
let lastScrollPos = 0;

addEventListener("scroll", () => scrolledNav());
function scrolledNav() {
	if (scrollY < lastScrollPos && scrollY > 0) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}

	lastScrollPos = scrollY;
}

// HEADER ANIMATION
const headerPrev = document.querySelector(".header-prev");
const headerNext = document.querySelector(".header-next");
let sliderItem = 0;
let slider = ["#006341", "#B63B1B", "#FA91AA", "#917B5D", "#DA8325"];

function changeSlider(char) {
	if (char === "<") {
		sliderItem === 0 ? (sliderItem = slider.length - 1) : sliderItem--;
	} else if (char === ">") {
		sliderItem === slider.length - 1 ? (sliderItem = 0) : sliderItem++;
	}

	setSlider();
}

function setSlider() {
	let sliderItemHTML = document.querySelector(".slider img[reveal]");
	$(":root").css("--slider", slider[sliderItem]);
	sliderItemHTML.removeAttribute("reveal");
	document
		.querySelectorAll(".slider img")
		[sliderItem].setAttribute("reveal", "");
}

// PRELOADER CIRCLE
let circleText = document.querySelector(".logo-repeat-x");
let arrayCircle = circleText.textContent.split("");
circleText.textContent = "";

arrayCircle.forEach((letter, index) => {
	circleText.innerHTML += `
		<span
			style="transform: rotate(${(index + 1) * 12}deg)"
			>${letter}</span>
	`;
});

addEventListener("load", () => {
	setTimeout(() => {
		document.querySelector(".preloader").classList.add("disappear");
		document.body.style.overflow = "auto";
	}, 300);
});

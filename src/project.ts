import axios from "axios";

const products: HTMLDivElement = document.querySelector(".products-img");
const found: HTMLParagraphElement = document.querySelector(".found");
const options: NodeListOf<HTMLOptionElement> = document.querySelectorAll(".option");
const allTable: HTMLParagraphElement = document.querySelector(".all")!;
const office: HTMLParagraphElement = document.querySelector(".office")!;
const living: HTMLParagraphElement = document.querySelector(".living")!;
const kitchen: HTMLParagraphElement = document.querySelector(".kitchen")!;
const bedroom: HTMLParagraphElement = document.querySelector(".bedroom")!;
const dining: HTMLParagraphElement = document.querySelector(".dining")!;
const kids: HTMLParagraphElement = document.querySelector(".kids")!;

const API_URL = " https://course-api.com/react-store-products";
//LOGICAL VARIABLES
//GET INFORMATION FROM API
export async function getInfoApi() {
	try {
		const response = await fetch(API_URL);
		const images = await response.json();
		// console.log(images);

		renderTable(images);
		renderCategoryAll(images);
		renderCategoryOffice(images);
		renderCategoryLiving(images);
		renderCategoryKitchen(images);
		renderCategoryBedroom(images);
		renderCategoryDining(images);
		renderCategoryKids(images);
	} catch (error) {
		console.error("NO INTERNET");
	}
}

function renderTable(images: any[]) {
	try {
		let count = 0;
		for (let i = 0; i < images.length; i++) {
			count++;
			console.log(images[i].image);
			products.innerHTML += `	<div class="box">
   <img src="${images[i].image}" alt="">
   <div class="name">
   <h4>${images[i].name}</h4>
   <p class="price">$${images[i].price}</p>
   </div>
   </div>`;
		}
		found.innerText = `${count} products found`;
	} catch (error) {
		console.log(error.message);
	}
}

function priceRange() {
	const rangeInput: HTMLInputElement = document.querySelector(".range")!;
	const rangeText: HTMLParagraphElement = document.querySelector(".p")!;

	rangeInput.addEventListener("input", changePriceValue);

	function changePriceValue() {
		let rangeValue = rangeInput.value;
		rangeText.textContent = `$${rangeValue}`;
	}
}

function renderCategoryAll(images: any[]) {
	allTable.addEventListener("click", () => {
		products.innerHTML = "";
		let count = 0;
		for (let i = 0; i < images.length; i++) {
			count++;
			console.log(images[i].image);
			products.innerHTML += `	<div class="box">
   <img src="${images[i].image}" alt="">
   <div class="name">
   <h4>${images[i].name}</h4>
   <p class="price">$${images[i].price}</p>
   </div>
   </div>`;
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryOffice(images: any[]) {
	let count = 0;
	office.addEventListener("click", () => {
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "office") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryLiving(images: any[]) {
	let count = 0;
	living.addEventListener("click", () => {
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "living room") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryKitchen(images: any[]) {
	let count = 0;
	kitchen.addEventListener("click", () => {
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "kitchen") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryBedroom(images: any[]) {
	let count = 0;
	bedroom.addEventListener("click", () => {
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "bedroom") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryDining(images: any[]) {
	let count = 0;
	dining.addEventListener("click", () => {
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "dining") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}

function renderCategoryKids(images: any[]) {
	let count = 0;
	kids.addEventListener("click", () => {
		found.innerText = "";
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			count++;
			if (images[i].category === "kids") {
				products.innerHTML += `	<div class="box">
     <img src="${images[i].image}" alt="">
     <div class="name">
     <h4>${images[i].name}</h4>
     <p class="price">$${images[i].price}</p>
     </div>
     </div>`;
				console.log(images[i].company);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function init() {
	priceRange();
	getInfoApi();
}
init();

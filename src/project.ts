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
const searchProducts: HTMLInputElement = document.querySelector(".search_products")!;
const loader: HTMLDivElement = document.querySelector(".loader_animate");
const project: HTMLDivElement = document.querySelector(".project");
const select_price: HTMLSelectElement = document.querySelector(".select_price");
const error_animate: HTMLSelectElement = document.querySelector(".error_animate");

//GET INFORMATION FROM API
const API_URL = " https://course-api.com/react-store-products";

async function getInfoApi() {
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
		inputSearch(images);
		select(images);
		priceRange(images);
	} catch (error) {
		project.innerHTML = `	<div class="error_animate">
<h1>404 Error</h1>
<p class="zoom-area">NOT FOUND THIS PAGE</p>
<section class="error-container">
	<span><span>4</span></span>
	<span>0</span>
	<span><span>4</span></span>
</section>
</div>`;
	}
}

function renderTable(images: any[]) {
	try {
		let count = 0;
		for (let i = 0; i < images.length; i++) {
			count++;

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

function displayProduct(images: any[], i: number) {
	products.innerHTML += `	<div class="box">
		<img src="${images[i].image}" alt="">
		<div class="name">
		<h4>${images[i].name}</h4>
		<p class="price">$${images[i].price}</p>
		</div>
		</div>`;
}

function renderCategoryAll(images: any[]) {
	allTable.addEventListener("click", () => {
		products.innerHTML = "";
		let count = 0;
		for (let i = 0; i < images.length; i++) {
			count++;

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
	office.addEventListener("click", () => {
		products.innerHTML = "";
		let count = 0;
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "office") {
				count++;
				displayProduct(images, i);
			}
		}

		found.innerText = `${count} products found`;
	});
}
function renderCategoryLiving(images: any[]) {
	living.addEventListener("click", () => {
		let count = 0;
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "living room") {
				count++;
				displayProduct(images, i);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryKitchen(images: any[]) {
	kitchen.addEventListener("click", () => {
		let count = 0;
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "kitchen") {
				count++;

				displayProduct(images, i);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryBedroom(images: any[]) {
	bedroom.addEventListener("click", () => {
		let count = 0;
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "bedroom") {
				count++;
				displayProduct(images, i);
			}
		}
		found.innerText = `${count} products found`;
	});
}
function renderCategoryDining(images: any[]) {
	dining.addEventListener("click", () => {
		let count = 0;
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "dining") {
				count++;
				displayProduct(images, i);
			}
		}
		found.innerText = `${count} products found`;
	});
}

function renderCategoryKids(images: any[]) {
	kids.addEventListener("click", () => {
		let count = 0;
		found.innerText = "";
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].category === "kids") {
				count++;
				displayProduct(images, i);
			}
		}
		found.innerText = `${count} products found`;
	});
}

//LOGICAL FUNCTIONS
function timerLoader() {
	setTimeout(() => {
		loader.style.display = "none";
		project.style.display = "block";
	}, 3000);
}
function inputSearch(images: any[]) {
	searchProducts.addEventListener("keydown", () => {
		let first_letter = searchProducts.value;
		products.innerHTML = "";
		for (let i = 0; i < images.length; i++) {
			if (images[i].name.toLowerCase().slice(0, first_letter.length) === first_letter) {
				displayProduct(images, i);
				// console.log(first_letter);
			} else {
				console.log("error");
			}
		}
	});
}

function priceRange(images: any) {
	const rangeInput: HTMLInputElement = document.querySelector(".range")!;
	const rangeText: HTMLParagraphElement = document.querySelector(".p")!;

	rangeInput.addEventListener("input", changePriceValue);

	function changePriceValue() {
		let rangeValue = Number(rangeInput.value);
		rangeText.textContent = `$${rangeValue}`;

		let count = 0;
		found.innerText = "";
		products.innerHTML = "";

		for (let i = 0; i < images.length; i++) {
			if (images[i].price < rangeValue) {
				count++;
				displayProduct(images, i);
			}
		}

		found.innerText = `${count} products found`;
	}
}

function select(images: any) {
	select_price.addEventListener("change", () => {
		let selected = select_price.value;
		if (selected === "price_low") {
			let count = 0;
			found.innerText = "";
			products.innerHTML = "";
			for (let i = 0; i < images.length; i++) {
				if (images[i].price > 1 && images[i].price < 110000) {
					count++;
					displayProduct(images, i);
				}
			}
			found.innerText = `${count} products found`;
		} else if (selected === "price_hight") {
			let count = 0;
			found.innerText = "";
			products.innerHTML = "";
			for (let i = 0; i < images.length; i++) {
				if (images[i].price > 110000) {
					count++;
					displayProduct(images, i);
				}
			}
			found.innerText = `${count} products found`;
		}
	});
}
function init() {
	getInfoApi();
	timerLoader();
}
init();

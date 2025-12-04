// Déclaration d'un tableau "slides" contenant les images et textes du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments "arrow" et "dots"
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");

// Ajout d'un EventListener sur chaque élément "arrow"
arrowLeft.addEventListener("click", function () {
	console.log("Clic sur flèche de gauche");
});

arrowRight.addEventListener("click", function () {
	console.log("Clic sur flèche de droite");
});

// Déclaration d'une boucle "pour chaque" slide, correspondant à chaque élément du tableau "slides"
slides.forEach((element, index) => {
	// Création nouvel élément div : bullet point
	const dot = document.createElement("div");
	// Ajout classe "dot" à élément div : application du style des bullets points
	dot.classList.add("dot");
	// Ajout nouvel élément div à son conteneur parent "dots" : création d'un bullet point par slide
	dots.appendChild(dot);

	// Déclaration condition if : "si élément en cours dans le tableau"
	if (index === 0) {
		// Ajout classe "dot_selected" à bullet point
		dot.classList.add("dot_selected");
	}
});
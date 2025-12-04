// Déclaration tableau "slides" contenant les images et textes du carrousel
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




// Déclaration variables : sélection des éléments flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");


// Ajout d'un EventListener sur chaque flèche
arrowLeft.addEventListener("click", () => {
	console.log("Clic sur flèche de gauche");

	// Au clic, slide en cours devient élément (index du tableau) précédent
	currentSlide--

	// Au clic, retour à dernière slide si première slide dépassée
	if (currentSlide < 0) {
		currentSlide = slides.length -1;
	}
	
	// Au clic, appel de la fonction de mise à jour du carrousel
	updateCarousel();
});

arrowRight.addEventListener("click", () => {
	console.log("Clic sur flèche de droite");

	// Au clic, slide en cours devient élément (index du tableau) suivant
	currentSlide++
	
	// Au clic, retour à première slide si dernière slide dépassée
	if (currentSlide >= slides.length) {
		currentSlide = 0;
	}

	// Au clic, appel de la fonction de mise à jour du carrousel
	updateCarousel();
});




// Déclaration variable : sélection du conteneur des bullets points
const dotsContainer = document.querySelector(".dots");


// Déclaration d'une boucle "pour chaque" slide, correspondant à chaque élément du tableau "slides"
slides.forEach((slide, i) => {
	// Déclaration variable : création nouvel élément div (bullet point)
	const dot = document.createElement("div");
	// Ajout classe "dot" à élément div : application du style des bullets points
	dot.classList.add("dot");
	// Ajout nouvel élément div à son conteneur parent "dots" : création d'un bullet point par slide
	dotsContainer.appendChild(dot);

	// Ajout condition "si élément en cours dans tableau"
	if (i === 0) {
		// Ajout classe spécifique "dot_selected" : modification état du bullet point
		dot.classList.add("dot_selected");
	}
});




// Déclaration variables : sélection des éléments image et texte du carrousel
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");

// Déclaration variable : sélection de tous les bullets points, créés ci-dessus (classe "dot")
const dots = document.querySelectorAll(".dot");

// Déclaration variable : initialisation slide en cours (= slide n°0, +1 ou -1 à l'événement au clic sur flèches)
let currentSlide = 0;


// Déclaration fonction de mise à jour du carrousel : éviter répétition du code pour chaque flèche
function updateCarousel() {
	// Intégration nouveau lien src de l'image en le récupérant dans la propriété "image" du tableau "slides" à l'index "currentSlide"
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Intégration nouveau texte en le récupérant dans la propriété "tagLine" du tableau "slides" à l'index "currentSlide"
	bannerTxt.innerHTML = slides[currentSlide].tagLine;

	// Changement bullet point actif : déclaration d'une boucle "pour chaque" bullet point, correspondant à chaque élément ".dot" récupéré dans la variable "dots"
	dots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === currentSlide);
	});
}
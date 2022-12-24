const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const catsList = document.querySelector("ul");
const catsElements = catsList.querySelectorAll("li"); // array of li
const mainElement = document.querySelector(".main-class");
const HIDDEN = document.querySelector(".hidden");
const hideButtonElement = document.getElementById("hide-button");
const detailsContainer = document.querySelector(".details-container");
const IS_POINT = ("is-point");

function showDetails() {
	mainElement.catList.remove(HIDDEN);
	detailsContainer.classList.add(IS_POINT);
	setTimeout(function () {
		detailsContainer.classList.remove(IS_POINT)
	})

}
function hideDetails() {
	mainElement.catList.add(HIDDEN);

	
}


for (let i = 0; i < catsElements.length; ++i) {
	const catImage = catsElements[i].querySelector(".thumbnails-img");
	const catTitle = catsElements[i].querySelector(".thumbnails-title");
	
	
	catImage.addEventListener("click", () => {
		detailsImage.src = catImage.src;
		detailsTitle.innerHTML = catTitle.innerHTML;
	});
	catImage.addEventListener('dblclick', () => {
		showDetails();

	})
}
hideButtonElement.addEventListener("click", hideDetails);


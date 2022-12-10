const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const catsList = document.querySelector("ul");
const catsElements = catsList.querySelectorAll("li"); // array of li


for (let i = 0; i < catsElements.length; ++i) {
	const catImage = catsElements[i].querySelector(".thumbnails-img");
	const catTitle = catsElements[i].querySelector(".thumbnails-title");
	catImage.addEventListener("click", () => {
		detailsImage.src = catImage.src;
		detailsTitle.innerHTML = catTitle.innerHTML;
	});
}

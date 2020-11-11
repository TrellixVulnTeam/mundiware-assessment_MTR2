// Flickity is a javascript lib for touch, responsive flickable carousels

const newsCarousel = new Flickity(".news__carousel", {
	// options
	freeScroll: true,
	contain: true,
	// disable previous & next buttons and dots
	prevNextButtons: false,
	pageDots: false,
});

const profileCarousel = new Flickity(".profile__carousel", {
	// options
	freeScroll: true,
	contain: true,
	// disable previous & next buttons and dots
	prevNextButtons: false,
	pageDots: false,
});

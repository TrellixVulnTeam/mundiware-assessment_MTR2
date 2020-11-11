// Flickity is a javascript lib for touch, responsive flickable carousels

const newsCarousel = new Flickity(".news__carousel", {
	// options
	cellAlign: "left",
	contain: true,
	prevNextButtons: false,
});

const profileCarousel = new Flickity(".profile__carousel", {
	// options
	cellAlign: "left",
	contain: true,
	prevNextButtons: false,
});

const productsListContainer = document.querySelector('.products__list-container');
const TABLET_MAX_WIDTH = 1279;
const Mobile_MAX_WIDTH = 639;
let mySwiper;

const enableSwiper = () => {
	mySwiper = new Swiper('.products__list-container', {
		on: {
			slidePrevTransitionEnd: function () {
				productsListContainer.classList.remove('products__list-container--no-mask');
			},
			reachEnd: function () {
				productsListContainer.classList.add('products__list-container--no-mask');
			},
		},

		slidesPerView: 'auto',

		wrapperClass: 'products__list',

		slideClass: 'products__item',

		pagination: {
			el: '.products__list-pagination',
			clickable: true,
		},

	})
}
const disableSwiper =() => {
	mySwiper.destroy(true, true)
}

if (window.innerWidth <= TABLET_MAX_WIDTH) {
	enableSwiper();
}

if (window.innerWidth <= Mobile_MAX_WIDTH) {
	disableSwiper();
}

const promocodeDataText = document.querySelector('.promocode__data-text');
const copyButton = document.querySelector('.promocode__copy-button')

copyButton.addEventListener('click', () => {
	window.navigator.clipboard.writeText(promocodeDataText.textContent);
})


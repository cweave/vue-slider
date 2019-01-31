Vue.use(VueAwesomeSwiper)
new Vue({
	 el: '#vueapp',

	  data() {
		return {
		//  swiperOptionTop: {
		//   setWrapperSize: true
			// },
		images: ['../img/elite.jpg', '../img/usda.jpg', '../img/winter.jpg', '../img/gift.jpg', '../img/appraisal.jpg'],
		swiperOptionThumbs: {
			spaceBetween: 20,
			slidesPerView: 4,
			centeredSlides: true,
			// touchRatio: 0.2,
			slideToClickedSlide: true,
			grabCursor: true,
			// freemode: true,
			slidesOffsetBefore: -400,
			navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
			}
       },
     }
   },
   mounted() {
     this.$nextTick(() => {
       const swiperTop = this.$refs.swiperTop.swiper
       const swiperThumbs = this.$refs.swiperThumbs.swiper
       swiperTop.controller.control = swiperThumbs
       swiperThumbs.controller.control = swiperTop
     })
   }
})
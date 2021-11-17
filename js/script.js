function Circlle(el) {
    $(el).circleProgress({
        fill: {color:'rgb(142, 42, 17)'},
        emptyFill: "rgba(142, 42, 17, .3)",
        startAngle: (-Math.PI)*2.5,
        
        
    })
    
    .on('circle-animation-progress', 
    function(event, progress, stepValue){
        $(this). find('strong').text(String(stepValue.toFixed(2)).substr(2) + '%');
    });
};

Circlle('.round');



document.addEventListener('DOMContentLoaded', () => {
	const scrollitems = document.querySelectorAll('.scroll-item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight / 1.2) + window.scrollY;
		scrollitems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
				
			} else {
				el.classList.remove('animation-class');
				
			}
			
		});
		
	};
	
	scrollAnimation();
	
	window.addEventListener('scroll', () => {
		scrollAnimation();
		
	})


} );


$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
    });
});





function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.header__burger');
	let links = menu.find('.menu__link');
	//let overlay = menu.find('.burger-menu__overlay');
	
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	
	links.on('click',() => toggleMenu());
	//overlay.on('click',() => toggleMenu());


	function toggleMenu(){
		menu.toggleClass('active');
		
	}
}


burgerMenu ('.header__menu');

(function($){
	$(document).ready(function(){
		$(window).scroll(function(){
			if($(window).scrollTop() > 200){
				$('.header-bottom').addClass('header-bottom-fixed');
			}else{
				$('.header-bottom').removeClass('header-bottom-fixed');
			}
		});

//type js
	var app = document.getElementById('type1');

	var typewriter = new Typewriter(app, {
   	 loop: true,
   	  delay: 100,
	});

typewriter.typeString('shamim.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('hossain.')
    .pauseFor(500)
    .deleteChars(10)
    .pauseFor(500)
    .start();
//type js
	var app = document.getElementById('type2');

	var typewriter = new Typewriter(app, {
   	 loop: true,
   	 delay: 100,
	});

typewriter.typeString('ishrat.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('jahan.')
    .pauseFor(500)
    .deleteChars(10)
    .pauseFor(500)
    .start();

    //type js
	var app = document.getElementById('type3');

	var typewriter = new Typewriter(app, {
   	 loop: true,
   	 delay: 100
	});

typewriter.typeString('shemul.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('hossain.')
    .pauseFor(500)
    .deleteChars(10)
    .pauseFor(500)
    .start();

	});
})(jQuery)
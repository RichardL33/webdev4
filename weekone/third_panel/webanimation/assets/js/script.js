$(document).on("ready", function() {

	// create the timeline
	var tl = new TimelineMax();

	// add animation to it
	tl.fromTo("#yellow_lion", 10, {
		top: -300, 
		left: 100, 
		ease: Power0.easeInOut
	},	{
		top: 600, 
		left: -40,
		});
	tl.to("#yellow_lion", 3, {top: 600, left: -120, scale: 1, ease: Power1.easeInOut});
	tl.to("#yellow_lion", 3, {top: 650, left: -220, scale: 1.2, ease: Power1.easeInOut});
	tl.to("#yellow_lion", 3, {top: 700, left: -320, scale: 1.3, ease: Power1.easeInOut});
	tl.to("#yellow_lion", 3, {top: 750, left: -420, scale: 1.4, ease: Power2.easeInOut});
	tl.to("#yellow_lion", 3, {top: 800, left: -520, scale: 1.5, ease: Power2.easeInOut});
	tl.to("#yellow_lion", 3, {top: 850, left: -620, scale: 1.6, ease: Power3.easeInOut});
	tl.to("#yellow_lion", 3, {top: 900, left: -720, scale: 1.7, ease: Power3.easeInOut});
	tl.to("#yellow_lion", 3, {top: 1000, left: -820, scale: 1.8, ease: Power4.easeInOut});
	tl.to("#yellow_lion", 3, {top: 1000, left: -940, scale: 2, ease: Power4.easeInOut});
	tl.to("#yellow_lion", 3, {top: 1000, left: -1060, scale: 2, ease: Power4.easeInOut});

	tl.pause();

	var ratio = 30; // play with this number to set the speed. it's actually the ratio of pixels scrolled to seconds seeked into the timeline

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl.seek(t);
	})

})


$(document).on("ready", function() {

	// create the timeline
	var tl2 = new TimelineMax();

	// add animation to it
	tl2.fromTo("#red_lion", 12, {
		top: -600, 
		left: 220, 
		ease: Power0.easeInOut
	},	{
		top: 700, 
		left: 140,
	});

	tl2.to("#red_lion", 3, {top: 700, left: -90, scale: 1.2, ease: Power1.easeInOut});
	tl2.to("#red_lion", 3, {top: 750, left: -190, scale: 1.4, ease: Power1.easeInOut});
	tl2.to("#red_lion", 3, {top: 800, left: -290, scale: 1.6, ease: Power1.easeInOut});
	tl2.to("#red_lion", 3, {top: 850, left: -390, scale: 1.8, ease: Power2.easeInOut});
	tl2.to("#red_lion", 3, {top: 900, left: -490, scale: 2, ease: Power2.easeInOut});
	tl2.to("#red_lion", 3, {top: 1020, left: -590, scale: 2, ease: Power3.easeInOut});
	tl2.to("#red_lion", 3, {top: 1020, left: -690, scale: 2, ease: Power3.easeInOut});
	tl2.to("#red_lion", 3, {top: 1020, left: -790, scale: 2, ease: Power4.easeInOut});
	tl2.to("#red_lion", 3, {top: 1020, left: -890, scale: 2, ease: Power4.easeInOut});
	tl2.to("#red_lion", 3, {top: 1020, left: -1060, scale: 2, ease: Power4.easeInOut});

	tl2.pause();

	var ratio = 30; // play with this number to set the speed. it's actually the ratio of pixels scrolled to seconds seeked into the timeline

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl2.seek(t);
	})

})


$(document).on("ready", function() {

	// create the timeline
	var tl3 = new TimelineMax();

	// add animation to it
	tl3.fromTo("#red_black_lion", 12, {
		top: -600, 
		left: 350, 
		ease: Power0.easeInOut
	},	{
		top: 900, 
		left: 140,
	});

	tl3.to("#red_black_lion", 3, {top: 900, left: 160, scale: 1.2, ease: Power1.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 850, left: 190, scale: 1.4, ease: Power1.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 800, left: 290, scale: 1.6, ease: Power1.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 750, left: 390, scale: 1.8, ease: Power2.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 700, left: 490, scale: 2, ease: Power2.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 650, left: 590, scale: 2, ease: Power3.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 600, left: 690, scale: 2, ease: Power3.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 550, left: 790, scale: 2, ease: Power4.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 500, left: 890, scale: 2, ease: Power4.easeInOut});
	tl3.to("#red_black_lion", 3, {top: 400, left: 1060, scale: 2, ease: Power4.easeInOut});

	tl3.pause();

	var ratio = 30; // play with this number to set the speed. it's actually the ratio of pixels scrolled to seconds seeked into the timeline

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl3.seek(t);
	})

})


$(document).on("ready", function() {

	// create the timeline
	var tl4 = new TimelineMax();

	// add animation to it
	tl4.fromTo("#blue_lion", 12, {
		top: -600, 
		right: 220, 
		ease: Power0.easeInOut
	},	{
		top: 700, 
		right: 20,
	});

	tl4.to("#blue_lion", 3, {top: 700, right: -90, scale: 1.2, ease: Power1.easeInOut});
	tl4.to("#blue_lion", 3, {top: 750, right: -190, scale: 1.4, ease: Power1.easeInOut});
	tl4.to("#blue_lion", 3, {top: 800, right: -290, scale: 1.6, ease: Power1.easeInOut});
	tl4.to("#blue_lion", 3, {top: 850, right: -390, scale: 1.8, ease: Power2.easeInOut});
	tl4.to("#blue_lion", 3, {top: 900, right: -490, scale: 2, ease: Power2.easeInOut});
	tl4.to("#blue_lion", 3, {top: 1020, right: -590, scale: 2, ease: Power3.easeInOut});
	tl4.to("#blue_lion", 3, {top: 1020, right: -690, scale: 2, ease: Power3.easeInOut});
	tl4.to("#blue_lion", 3, {top: 1020, right: -790, scale: 2, ease: Power4.easeInOut});
	tl4.to("#blue_lion", 3, {top: 1020, right: -890, scale: 2, ease: Power4.easeInOut});
	tl4.to("#blue_lion", 3, {top: 1020, right: -1060, scale: 2, ease: Power4.easeInOut});

	tl4.pause();

	var ratio = 30; // play with this number to set the speed. it's actually the ratio of pixels scrolled to seconds seeked into the timeline

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl4.seek(t);
	})

})


$(document).on("ready", function() {

	// create the timeline
	var tl5 = new TimelineMax();

	// add animation to it
	tl5.fromTo("#green_lion", 10, {
		top: -300, 
		right: 100, 
		ease: Power0.easeInOut
	},	{
		top: 600, 
		right: -40,
		});
	tl5.to("#green_lion", 3, {top: 600, right: -120, scale: 1.2, ease: Power1.easeInOut});
	tl5.to("#green_lion", 3, {top: 650, right: -220, scale: 1.4, ease: Power1.easeInOut});
	tl5.to("#green_lion", 3, {top: 700, right: -320, scale: 1.6, ease: Power1.easeInOut});
	tl5.to("#green_lion", 3, {top: 750, right: -420, scale: 1.8, ease: Power2.easeInOut});
	tl5.to("#green_lion", 3, {top: 800, right: -520, scale: 2, ease: Power2.easeInOut});
	tl5.to("#green_lion", 3, {top: 850, right: -620, scale: 2, ease: Power3.easeInOut});
	tl5.to("#green_lion", 3, {top: 900, right: -720, scale: 2, ease: Power3.easeInOut});
	tl5.to("#green_lion", 3, {top: 1000, right: -820, scale: 2, ease: Power4.easeInOut});
	tl5.to("#green_lion", 3, {top: 1000, right: -940, scale: 2, ease: Power4.easeInOut});
	tl5.to("#green_lion", 3, {top: 1000, right: -1060, scale: 2, ease: Power4.easeInOut});

	tl5.pause();

	var ratio = 30; // play with this number to set the speed. it's actually the ratio of pixels scrolled to seconds seeked into the timeline

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl5.seek(t);
	})

})

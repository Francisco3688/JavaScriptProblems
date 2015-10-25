$(document).ready(function(){

	$("#topBorder").animate({"top":"-500px"}, 10000 );
	$("#bttmBorder").animate({"bottom":"-600px"},7000);
	$("li").hover(function(){
		$(this).fadeOut(200);
		$(this).fadeIn(300);
	});
	$("#witch").animate({"right":"-1300px"}, 12000);
	$("#box1").hide(function(){
		$(this).fadeIn(12000);
	});
	$("#box2").hide(function(){
		$(this).fadeIn(14000);
	});
	$("#box3").hide(function(){
		$(this).fadeIn(15000);
	});

});

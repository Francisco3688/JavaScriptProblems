$(document).ready( function(){
 
	setInterval( function(){
   		var time = new Date();
  		var Min = time.getMinutes();
  	// console.log(Min);
  	 if(Min % 2 == 0){
    	$("body").css("background", "red");
  		 }
   	else {
   		$("body").css("background", "black");
   		}
	}, 1000);

});
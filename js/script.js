$(document).ready(function(){
	var $1 = $('#1');
	var number = 256;
	for(var i = 0; i < number; i++) {
		$1.append('<div class="blokas"></div>');
	}; 
	$(document).on('mouseenter','.blokas', function(){
		$(this).css("background-color", "red");
	});
	$('#black').on('click', function (){
		$('.blokas').remove();
		var input = +prompt("How many squares per side you want?");		
		var size = 960 / input - 2;
		if(input > 0 && input < 65) {
			for(var i = 0; i < (input * input); i++) {
				$('<div class="blokas"></div>').appendTo($1).css({"height": size, "width": size});
			}; 
		}
		else {
			confirm("Error");
		}
		$(document).on('mouseenter','.blokas', function(){
			$(this).css("background-color", "red");
		});
	});
	$('#colored').on('click', function (){
		$('.blokas').remove();
		var input = +prompt("How many squares per side you want?");		
		var size = 960 / input - 2;
		if(input > 0 && input < 65) {
			for(var i = 0; i < (input * input); i++) {
				$('<div class="blokas"></div>').appendTo($1).css({"height": size, "width": size});
			}; 
		}
		else {
			confirm("Error");
		}
		$(document).on('mouseenter','.blokas', function(){
			var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
			jQuery(".font-style").animate({color: newColor}, 2000);
			$(this).css("background-color", newColor);
		});
	});
});


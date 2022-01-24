$(document).ready(function() {
	//alert("hello");
	
	var touch = false;
	var inMaze = false;
	var passedStart = false;
	
	$(".boundary").hover(
		function () {
			if(passedStart === true) {
				$(".boundary").addClass("youlose");
				touch = true;
				//css("background-color", "#ff8888")
			}
		});
	
	$("#end").hover(
		function () {
			if (passedStart !== true) {}
			else if (touch === false && inMaze === true && passedStart == true) {
				$("#status").text("You win!");
				//alert(inMaze);
				//alert("You win!");
			} else {
				$(".boundary").addClass("youlose");
				$("#status").text("Sorry, you lost!");
				touch = true;
				//alert("Sorry, you lost!");
			}
		});
	
	$("#start").click(
		function () {
			//alert('start');
			$(".boundary").removeClass("youlose");
			touch = false;
			$("#status").text("Now playing");
			passedStart = true;
			
		});
	
	//$("#start").hover(
	//	function () {
	//		passedStart = true;
	//	});
	
	$("#maze").hover(
		function () {
			inMaze = true;
		},
		function () {
			inMaze = false;
			//alert('out');
		});
		
}) ();
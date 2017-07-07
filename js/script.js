$(document).ready(function(){
	//smooth scrolling
	$(document).on('click', 'a', function(event){
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
	});
})

function initMap() {
	var panda = {lat: 36.140821, lng: -97.067212};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: panda,
		scrollwheel: false,
	});
	var marker = new google.maps.Marker({
		position: panda,
		map: map
	});
}
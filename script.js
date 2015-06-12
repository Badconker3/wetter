$(document).ready(function(){
	navigator.geolocation.getCurrentPosition(function(position){

		var koordinaten = {
			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		};
		//console.log(position);
		//$('.longitude').text(position.coords.longitude);
		//$('.latitude').text(position.coords.latitude);
		//$('.accuracy').text(position.coords.accuracy);
		$.ajax({
			url:'https://api.forecast.io/forecast/3a29abb9ce9c8e475af3d33012259689/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {
				units: 'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done(function(data){
			console.log(data);

		});
	});
});
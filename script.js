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
		//Vorcast io Anfrage
		$.ajax({
			url:'https://api.forecast.io/forecast/3a29abb9ce9c8e475af3d33012259689/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {
				units: 'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done(function(data){
			console.log(data);
			$('.current-temperature').text(data.currently.temperature + '°C');
			//Google Maps io Anfrage
			$.ajax({
				url:'https://maps.googleapis.com/maps/api/geocode/json',
				data:{
				latlng: koordinaten.latitude + ',' + koordinaten.longitude,
				key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
				lang: 'de'
				}
			}).done(function(data){
				console.log(data);
				$('current-location').text(data.results[0].formatted address);
			})
		});
	});
});

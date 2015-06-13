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
			$('.wetter-voraussage').text(data.hourly.summary);
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
				//hier werden die einzelnen Daten aus dem Array gelesen
				$('.strasse').text(data.results[0].address_components[1].long_name);
				$('.ort').text(data.results[0].address_components[2].long_name);
				$('.land').text(data.results[0].address_components[5].long_name);
			})
		});
	});
});

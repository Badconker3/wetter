$(document).ready(function(){

var skycons = new Skycons({
		"color": "black",
		resizeClear: true
		});

		var koordinaten;
		
		navigator.geolocation.getCurrentPosition(function(position){
			koordinaten = {

			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		};
	
		drawMap(new google.maps.LatLng(koordinaten.latitude, koordinaten.longitude));

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
			skycons.set($('.js-icon')[0], data.currently.icon);
			skycons.play();
			$('.wetter-jetzt').text(data.hourly.data[0].summary);
			$('.wetter-eins').text(data.hourly.data[1].summary);
			$('.wetter-zwei').text(data.hourly.data[2].summary);
			$('.wetter-drei').text(data.hourly.data[3].summary);
			$('.wetter-vier').text(data.hourly.data[4].summary);
			$('.wetter-fünf').text(data.hourly.data[5].summary);
			$('.wetter-sechs').text(data.hourly.data[6].summary);
			$('.wetter-sieben').text(data.hourly.data[7].summary);
			$('.wetter-acht').text(data.hourly.data[8].summary);
			$('.wetter-neun').text(data.hourly.data[9].summary);
			$('.wetter-zehn').text(data.hourly.data[10].summary);
			$('.wetter-elf').text(data.hourly.data[11].summary);
			$('.wetter-12').text(data.hourly.data[12].summary);
			$('.wetter-13').text(data.hourly.data[13].summary);
			$('.wetter-14').text(data.hourly.data[14].summary);
			$('.wetter-15').text(data.hourly.data[15].summary);
			$('.wetter-16').text(data.hourly.data[16].summary);
			$('.wetter-17').text(data.hourly.data[17].summary);
			$('.wetter-18').text(data.hourly.data[18].summary);
			$('.wetter-19').text(data.hourly.data[19].summary);
			$('.wetter-20').text(data.hourly.data[20].summary);
			$('.wetter-21').text(data.hourly.data[21].summary);
			$('.wetter-22').text(data.hourly.data[22].summary);
			$('.wetter-23').text(data.hourly.data[23].summary);
			$('.wetter-24').text(data.hourly.data[24].summary);
			$('.tag-eins').text(data.daily.data[1].summary);
			$('.tag-zwei').text(data.daily.data[2].summary);
			$('.tag-drei').text(data.daily.data[3].summary);
			$('.tag-vier').text(data.daily.data[4].summary);
			$('.tag-fünf').text(data.daily.data[5].summary);
			$('.tag-sechs').text(data.daily.data[6].summary);
			$('.tag-sieben').text(data.daily.data[7].summary);

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


	function drawMap(latlng) {
		var myOptions = {
			zoom: 10,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map($('.map-canvas')[0], myOptions);

		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
	}

	
});

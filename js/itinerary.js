$( document ).ready(function(){
	var partyid = getURLParameter('partyid');
	var userid = getURLParameter('userid');
	getItineraryData(partyid, function(passengerList){
		var driverid = "";
		var passengers = [];
		for(var i = 0; i < passengerList.length; i++) {
			var pass = passengerList[i];
			if(pass.id == userid) {
				driverid = pass.driverid;
			}
		}
		for(var i = 0; i < passengerList.length; i++) {
			var pass = passengerList[i];
			if(pass.driverid == driverid) {
				passengers.push(pass);
			}
		}
		passengers.sort(function(a, b) {return a.order - b.order});
		for(var i = 0; i < passengers.length; i++) {
			$('.itinerary').append(renderPassenger(passengers[i]));
		}
	});

	function renderPassenger(passenger) {
		var passengerTemplate = '<div class="iternaryPersonBig">'+
				'<div class="numberCircle colorClass">passengerAbbr</div>'+
				'<b>passengerRole:</b> passengerName <br>'+
				'<b>Number:</b> <a href="tel:'+'passengerPhone">passengerPhone</a> <br>'+
				'<b>Address:</b><a href="http://maps.google.com/?q=passengerMapQuery"> passengerAddress</a> <br>'+
			  '</div>'+
			  '<hr>';
		var html = passengerTemplate.replace('passengerAbbr', passenger.name[0].toUpperCase());
		if( passenger.spot >= 0 ) {
			html = html.replace('passengerRole', 'Driver');
		} else {
			html = html.replace('passengerRole', 'Passenger');
		}
		html = html.replace('passengerAddress', passenger.address);
		html = html.replace('passengerName', passenger.name);
		html = html.replace('passengerPhone', passenger.phone);
		html = html.replace('passengerPhone', passenger.phone);
		html = html.replace('passengerMapQuery', passenger.address.replace(' ', '+'));
		
		var randomIndex = passenger.name[0].charCodeAt(0) % 5 + 1;
        var colorClass = "colorClass" + randomIndex.toString();
		html = html.replace('colorClass', colorClass);
		return html;
	}
});

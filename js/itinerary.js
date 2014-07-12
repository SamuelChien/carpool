
$( document ).ready(function(){
	var partyid = getURLParameter('partyid');
	var driverid = getURLParameter('driverid');
	var passengers = [];
	var driver = [];
	getItineraryData(partyid, function(passengerList){
		for(var i = 0; i < passengerList.length; i++) {
			var pass = passengerList[i];
			if(pass.driverid == driverid) {
				if(pass.spot > 0) {
					driver = pass;
					passengers.push(pass);
				} else {
					passengers.push(pass);
				}
			}
		}
		passenger.sort(function(a, b) {return a.order - b.order});
		for(var i = 0; i < passengers.length; i++) {
			$('.itinerary')[0].append(renderPassenger(passengers[i]));
		}
	});

	function renderPassenger(passenger) {
		var passengerTemplate = '<div class="iternaryPerson">'+
				'<div class="numberCircle">passengerAbbr</div>'+
				'<b>Driver:</b> passengerName <br>'+
				'<b>Number:</b> passengerPhone <br>'+
				'<b>Address:</b><a href="http://maps.google.com/?q=passengerAddressQuery">1 Infinite Loop,<br> passengerAddress</a> <br>'+
			  '</div>'+
			  '<hr>';
		var html = passengerTemplate.replace('passengerAbbr', passenger.name[0].toUpper());
		html = html.replace('passengerAddress', passenger.address);
		html = html.replace('passengerName', passenger.name);
		html = html.replace('passengerPhone', passenger.phone);
		html = html.replace('passengerAddressQuery', passenger.address.replace(' ', '+'));
		return html;
	}
});
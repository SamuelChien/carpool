
$( document ).ready(function(){
	var partyid = getURLParameter('partyid');
	var userid = getURLParameter('userid');
	var driverid = "";
	var passengers = [];
	var driver = [];
	getItineraryData(partyid, function(passengerList){
		for(var i = 0; i < passengerList.length; i++) {
			var pass = passengerList[i];
			if(pass.id == userid) {
				driverid = pass.driverid;
			}
		}
		for(var i = 0; i < passengerList.length; i++) {
			var pass = passengerList[i];
			if(pass.driverid == userid) {
				if(pass.spot > 0) {
					driver = pass;
					passengers.push(pass);
				} else {
					passengers.push(pass);
				}
			}
		}
		passengers.sort(function(a, b) {return a.order - b.order});
		for(var i = 0; i < drivers.length; i++) {
			if(driverid == driverid)
			$('.itinerary').append(renderPassenger(passengers[i]));
		}
		for(var i = 0; i < passengers.length; i++) {
			$('.itinerary').append(renderPassenger(passengers[i]));
		}
	});

	function renderPassenger(passenger) {
		var passengerTemplate = '<div class="iternaryPerson">'+
				'<div class="numberCircle">passengerAbbr</div>'+
				'<b>Driver:</b> passengerName <br>'+
				'<b>Number:</b> passengerPhone <br>'+
				'<b>Address:</b><a href="http://maps.google.com/?q=passengerMapQuery">passengerAddress</a> <br>'+
			  '</div>'+
			  '<hr>';
		var html = passengerTemplate.replace('passengerAbbr', passenger.name[0].toUpperCase());
		html = html.replace('passengerAddress', passenger.address);
		html = html.replace('passengerName', passenger.name);
		html = html.replace('passengerPhone', passenger.phone);
		html = html.replace('passengerMapQuery', passenger.address.replace(' ', '+'));
		return html;
	}
});

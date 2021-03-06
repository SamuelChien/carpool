$( document ).ready(function(){
   var partyid = getURLParameter("partyid");
   var title;
   var list;
   var partyid;
   
   list = getParty(partyid, function(party){
       $("#partyTitle").text(party.name + " ID: " + party.partyid.toString());
       var mapContent = '<a href="http://maps.google.com/?q=passengerMapQuery">passengerAddress</a>';
       mapContent = mapContent.replace('passengerAddress', party.address);
          mapContent = mapContent.replace('passengerMapQuery', party.address);
       
       $("#addressPlace").html(mapContent);
       for(i=0; i<party.passengers.length; i++)
       {
           var partyid = party.passengers[i].partyid;
 		   var userid = party.passengers[i].id;
 		   var randomIndex =  party.passengers[i].name[0].charCodeAt(0) % 5 + 1;
           var colorClass = "colorClass" + randomIndex.toString();
           $("#scrollView").append(
               "<div class='iternaryPerson'><input type='hidden' class='hiddenValue' name='" + partyid + "' value='" + userid + "'><div class='smallNumberCircle " + colorClass + "'>" + party.passengers[i].name[0].toUpperCase() + "</div><b>" + party.passengers[i].name + "<br></div><hr>"
	  		    );
	  		    
	  		    ///itinerary.html?partyid=X&userid=Y
                $(".iternaryPerson").mousedown(function(){
                    $(this).css("background-color","#C0C0C0");
                });
                
                $(".iternaryPerson").mouseup(function(){
                    $(this).css("background-color","#fff");
                });
                
                $(".iternaryPerson").click(function(){
                    window.location.href="/itinerary.html?partyid=" + $(this).find("input:first").attr('name') + "&userid=" + $(this).find("input:first").val();
                    return false;
                });
                
       }
   });
});

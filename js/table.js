$( document ).ready(function(){
   var partyid = getURLParameter("partyid");
   var title;
   var list;
   var partyid;
   var colors = ['#ff0000', '#00ff00', '#0000ff'];
   var random_color = colors[Math.floor(Math.random()*colors.length)];
   $('#style.numberCircle').css('color', random_color);
   list = getParty(partyid, function(party){
       $("#partyTitle").text(party.name);
       for(i=0; i<party.passengers.length; i++)
       {
           var partyid = party.passengers[i].partyid;
 		   var userid = party.passengers[i].id;
           $("#scrollView").append(
               "<div class='iternaryPerson'><input type='hidden' id='hiddenValue' name='" + partyid + "' value='" + userid + "'><div class='smallNumberCircle'>" + party.passengers[i].name[0].toUpperCase() + "</div><b>" + party.passengers[i].name + "<br></div><hr>"
	  		    );
	  		    
	  		    ///itinerary.html?partyid=X&userid=Y
                $(".iternaryPerson").mousedown(function(){
                    $(this).css("background-color","#C0C0C0");
                });
                
                $(".iternaryPerson").mouseup(function(){
                    $(this).css("background-color","#fff");
                });
                
                $(".iternaryPerson").click(function(){
                    window.location.href="/itinerary.html?partyid=" + $("#hiddenValue").attr('name') + "&userid=" + $("#hiddenValue").val();
                    return false;
                });
                
       }
   });
});

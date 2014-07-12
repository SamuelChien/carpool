$( document ).ready(function(){
   var partyid = getURLParameter("partyid");
   var title;
   var list;
   var partyid;
   list = getParty(partyid, function(party){
       $("#partyTitle").text(party.name);
       for(i=0; i<party.passengers.length; i++)
       {
           
           $("#scrollView").append(
               "<div class='iternaryPerson'><div class='smallNumberCircle'>" + party.passengers[i].name[0].toUpperCase() + "</div><b>" + party.passengers[i].name + "<a href='/itinerary.html?partyid=" + party.passengers[i].partyid +"&userid=" + party.passengers[i].id  +"'><img class='rightBtn' src='css/img/right.jpg' height='42' width='42'></a><br></div><hr>"
	  		    );
       }
   });
});
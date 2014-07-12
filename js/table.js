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
               "<div class='iternaryPerson'><div class='smallNumberCircle'>" + party.passengers[i].name[0] + "</div><b>" + party.passengers[i].name + "<img class='rightBtn' href='/itinerary.html?partyid=" + party.passengers[i].id +"&name=" + party.passengers[i].name  +"' src='css/img/right.jpg' height='42' width='42'><br></div><hr>"
	  		    );
       }
   });
});
$( document ).ready(function(){
   var partyid = getURLParameter("partyid");
   var title;
   var list;
   var partyid;
   list = getParty(partyid, function(party){
       //alert(listitems);
       alert(party.name);
       alert(party.passengers);
   });
});
$( document ).ready(function(){
   var partyid = getURLParameter("partyid");
   var title;
   var list;
   var partyid;
   list = getParty(partyid, function(listitems){
       alert(listitems);
   });
});
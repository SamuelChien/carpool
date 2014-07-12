$( document ).ready(function(){
   var partyid = getURLParameter("id");
   var title;
   var list;
   var partyid;
   list = getParty(partyid, function(listitems){
       alert(listitems);
   });
});
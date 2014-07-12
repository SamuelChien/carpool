$( document ).ready(function(){
   var eid = getURLParameter("eid");
   var title;
   var list;
   var partyid;
   getPartyByGuid(eid, function(item){
       partyid = item.partyid;
       title = item.name;
       //alert(title);
   }).done();
   list = getParty(partyid, function(listitems){
       alert(listitems);
   });
});
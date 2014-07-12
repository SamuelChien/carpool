
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function insertParty(partyName, address) {
  var item = { name : partyName, address : address };
  return TABLE_CLIENT.getTable("party").insert(item);
}

function insertUser(name, phone, partyid, address, spot) {
  var item = {name : name, phone : phone, partyid : partyid, address : address, spot : spot}
  return TABLE_CLIENT.getTable("user").insert(item);
}
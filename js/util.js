
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function insertParty(partyName, address) {
  var item = { name : partyName, address : address };
  return TABLE_CLIENT.getTable("party").insert(item);
}

function insertUser(name, phone, guid, address, spot) {
  var partyid;
  getPartyByGuid(guid, function(item){
      partyid = item.partyid;
  })
  var item = {name : name, phone : phone, id : guid, address : address, spot : spot}
  return TABLE_CLIENT.getTable("user").insert(item);
}

function getParty(partyid) {
  var partyApi = BASE_URL + "api/party?partyid=" + partyid;
  $.getJSON(partyApi, {
    format: "json"
  })
  .done(function(data) {
    return data;
  })
}

function getPartyByGuid(guid, success) {
  var partyApi = BASE_URL + "api/partyid?id=" + guid;
  $.getJSON(partyApi, success);
}

function getIternaryDate() {
  
}
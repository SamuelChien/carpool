
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

function getParty(partyid, success) {
  var partyApi = BASE_URL + "api/party?partyid=" + partyid;
  $.getJSON(partyApi, success);
}

function getPartyByGuid(guid, success) {
  var partyApi = BASE_URL + "api/partyid?id=" + guid;
  $.getJSON(partyApi, success);
}

function getItineraryData(partyid, success) {
  var url = BASE_URL + 'api/itinerary?partyid=' + partyid;
  $.getJSON(url, success);
}
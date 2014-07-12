
  function insertFakeData() {
    var client = new WindowsAzure.MobileServiceClient(
    "https://licarpool.azure-mobile.net/",
    "bbIcqJfgUPjcZiVNrFujvChujcZgyb85"
    );
    
    insertParty("partyName", "Party Address 123 Post Street").done(function (item) {
      getPartyByGuid(item.id, function(item){
      insertUser("Kevin", 1234567, item.partyid, "K address", 3);
      insertUser("Mengye", 1234567, item.partyid, "M address", -1);
      insertUser("Sam", 1234567, item.partyid, "S address", -1);
      insertUser("Josh", 1234567, item.partyid, "J address", 3);  
      });
    });
  }
  

  function cleanTable() {
    var client = new WindowsAzure.MobileServiceClient(
      "https://licarpool.azure-mobile.net/",
      "bbIcqJfgUPjcZiVNrFujvChujcZgyb85"
    );

    client.getTable("party").select(function() {});
  }
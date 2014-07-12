
  function insertFakeData() {
    var client = new WindowsAzure.MobileServiceClient(
    "https://licarpool.azure-mobile.net/",
    "bbIcqJfgUPjcZiVNrFujvChujcZgyb85"
    );
    
    insertParty("partyName", "Party Address 123 Post Street").done(function (item) {
      insertUser("Kevin", 1234567, item[0].partyid, "K address", 3);
      insertUser("Mengye", 1234567, item[0].partyid, "M address", 0);
      insertUser("Sam", 1234567, item[0].partyid, "S address", 0);
      insertUser("Josh", 1234567, item[0].partyid, "J address", 3);  
    });
  }
  

  function cleanTable() {
    var client = new WindowsAzure.MobileServiceClient(
      "https://licarpool.azure-mobile.net/",
      "bbIcqJfgUPjcZiVNrFujvChujcZgyb85"
    );

    client.getTable("party").select(function() {});
  }
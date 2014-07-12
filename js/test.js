
  function insertFakeData() {
    var client = new WindowsAzure.MobileServiceClient(
    "https://licarpool.azure-mobile.net/",
    "bbIcqJfgUPjcZiVNrFujvChujcZgyb85"
    );

    client.getTable("party");
    
    insertParty("partyName", "Party Address 123 Post Street").done(function (item) {
      insertUser("Kevin", 1234567, item.id, "K address", 3);
      insertUser("Mengye", 1234567, item.id, "M address", 0);
      insertUser("Sam", 1234567, item.id, "S address", 0);
      insertUser("Josh", 1234567, item.id, "J address", 3);
    });
  }
  
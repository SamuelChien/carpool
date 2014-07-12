
$( document ).ready(function(){
    $("#availableSeat").hide();
    
    $("#RideQuest").change(function(){
        var currentSelected = $("#RideQuest").val();
        if(currentSelected == "Driver")
        {
            $("#availableSeat").show();
        }
        else if (currentSelected == "Passenger")
        {
            $("#availableSeat").hide();
        }
    });
    
    
    $("#joinEventBtn").click(function(){
        window.location.href="/listview.html?partyid=" + $("#partyID").val();
        return false;
    });
    
    $("#createEventBtn").click(function(){
        insertParty($("#partyNameField").val(), $("#partyAddressField").val()).done(function(item){
            getPartyByGuid(item.id, function(item){
                window.location.href="/addUser.html?partyid=" + item.partyid;
            })
        });
        return false;
    });
    
    $(".iternaryPerson").click(function(){
        //$(this).css("background-color","#ADD8E6");
        alert("yo");
        return false;
    });
    
    $("#addMeBtn").click(function(){
        partyid = getURLParameter("partyid");
        window.location.href="/addUser.html?partyid=" + partyid;
        return false;
    });
    
    $("#addUserBtn").click(function(){
		var name = $("#userNameField").val();
		var address = $("#userAddressField").val();
		var phone = $("#userPhoneField").val();
		var partyid = getURLParameter("partyid");
		var spot = -1; 
				
        if($("#RideQuest").val() == "Driver")
        {
            spot = $("#availableSeat").val();
        }


        insertUser(name, phone, partyid, address, spot).done(function(item){
            window.location.href="/listview.html?partyid=" + partyid;
            return false;
        });
        return false;
        
    });
});
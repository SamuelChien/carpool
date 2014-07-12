
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
        window.location.href="/listview.html?eid=" + $("#partyID").val();
        return false;
    });
    
    $("#createEventBtn").click(function(){
        insertParty($("#partyNameField").val(), $("#partyAddressField").val()).done(function(item){
            window.location.href="/addUser.html?eid=" + item.id;
        });
        return false;
    });
    
    $("#addUserBtn").click(function(){
		alert("hi");
		var name = $("#userNameField").val();
		var address = $("#userAddressField").val();
		var phone = $("#userPhoneField").val();
		var partyid = getURLParameter("eid");
		var spot = -1; 
				
        if($("#RideQuest").val() == "Driver")
        {
            spot = $("#availableSeat").val();
        }


        insertUser(name, phone, partyid, address, spot).done(function(item){
            window.location.href="/listview.html?eid=" + item.id;
            return false;
        });
        return false;
        
    });
});
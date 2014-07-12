
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
		
		var name = $("#name").val();
		alert(name);
		var address = $("#address").val();
		alert(address);
		var userPhoneField = $("#userPhoneField").val();
		alert(userPhoneField);
		var partyid = getURLParameter("eid");
		alert(partyid);
		var spot = -1; 
		alert(name);
		
		alert(name +  " " +  address + " " +  partyid + " " + spot + " " + phone)
		
        if($("#RideQuest").val() == "Driver")
        {
            spot = $("#availableSeat").val();
        }


        insertUser(name, phone, partyid, address, spot).val().done(function(item){
            window.location.href="/listview.html?eid=" + item.id;
        });
        return false;
        
    });
});

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
        var eid = insertParty($("#partyNameField").val(), $("#partyAddressField").val()).done(function(item){
            window.location.href="/listview.html?eid=" + item.id;
        });
        return false;
    });
});
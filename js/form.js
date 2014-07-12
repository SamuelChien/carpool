
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
});
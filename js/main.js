$(document).ready(function() {
    $("#all").change(function() {
        $(".teams").hide();
        $("#" + $(this).val()).show();

    });

    $(".notbegin").click(function() {
        alert("RR Vs MI Match Not Yet Started");
    });
    $("#four").click(function() {
        alert("CSK Vs KXP Match Not Yet Started");
    });
    $("#five").click(function() {
        alert("RCB Vs KKR Match Not Yet Started");
    });

    $("#tabs").tabs({
        activate: function(event, ui) {
            var active = $('#tabs').tabs('option', 'active');
            $("#tabid").html('the tab id is ' + $("#tabs ul>li a").eq(active).attr("href"));

        }
    });

});
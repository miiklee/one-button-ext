$(document).ready(function() {

    var state = "none" // or horizontal_scanning or vertical_scanning


    //create div elements for the bars
    $("body").prepend($("<div id='xline' class='linex'></div>"))
    $("body").prepend($("<div id='yline' class='liney'></div>"))
    
    
    //track bar positon
    var xpos;
    var ypos;

    //check if bars should be moving every 200ms
    setInterval(function() {
        paint();
    }, 200);


    //move bars
    function paint(){
        if (state == "horizontal_scrolling") {
            //update horizontal scan bar position
            $("#xline").css("left", "+=10px");

        } else if (state == "vertical_scrolling") {
            //update vertical scan bar position
            $("#yline").css("top", "+=10px");
        }
    }

    //actions on SPACE key press
    document.addEventListener('keydown', function(e) {
        e.preventDefault();

        if (e.code == "Space"){ //if space is key pressed
            //update state given current state
            if (state == "horizontal_scrolling") {
                state = "vertical_scrolling";
    
            } else if (state == "vertical_scrolling") {
                state = "none";

            } else {
                state = "horizontal_scrolling";
            }
            console.log(state)
            return false;
        }

        e.stopPropagation();


    });

});
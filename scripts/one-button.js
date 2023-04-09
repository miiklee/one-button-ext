$(document).ready(function() {

    //universal variable for accessing current zoom
    console.log("this loaded")
    var zoomAmt = 1.0;
    var pixelZoom = 1.0;
    $("body").css("position", "relative");
    var scroll = 0;
    var content;

    //CREATE DIV FOR REFACTORING LATER
    $("body").prepend($("<div id='mydiv'></div>"));
    $('#mydiv').css({ "width":"70%", "padding":"20px",
     "background-color":"chartreuse", "z-index":"10",
    "position":"fixed", "font-size":"30px", "margin":"5% auto", "left":"0", "right":"0",
    "display":"none", "border-radius":"10px"});


    $("*:not(body)").hover(function(ev) {
        //EXECUTED WHEN MOUSE HOVERS OVER ELEMENT
        content = $(this); //update content
    });



    
    //KEY PRESS FUNCTIONS
    document.addEventListener('keydown', function(e) {
        // EXECUTED ON KEY DOWN
        //BROWSER ZOOM
        if (e.code == 'Equal' && e.shiftKey == false) {
            //IF KEY IS +/= and shift hasn't been pressed
            zoomAmt += 0.1; //increment counter
            document.body.style.zoom = zoomAmt; //use basic zoom

        } else if (e.code == 'Minus' && e.shiftKey == false){
            //IF KEY IS -/_ and shift hasn't been pressed         
            zoomAmt -= 0.1; //decrement counter
            document.body.style.zoom = zoomAmt;

        } 
        
        //GRAPHICAL ZOOM
        else if (e.code == 'Equal' && e.shiftKey == true){
            //IF KEY IS +/= and shift HAS been pressed
            pixelZoom += 0.1;
            $("body").css("transform", "scale(" + pixelZoom + ")");

            //fix text location on page
            $("body").css("left", "+=35px"); 
            $("body").css("top", "+=250px");

        } else if (e.code == 'Minus' && e.shiftKey == true){
            //IF KEY IS -/_ and shift HAS been pressed 
            pixelZoom -= 0.1;
            $("body").css("position", "relative");
            $("body").css("transform", "scale(" + pixelZoom + ")");

            //fix text location on page
            $("body").css("left", "-=35px");
            $("body").css("top", "-=250px");

        } 
        
        //REFACTORING CONTENT
        else if (e.code == '' || e.code == 'Unidentified' || e.code == 'Space') {
            //IF KEY IS SPACEBAR
            //stop it from scrolling on spacebar
            e.preventDefault();

            var srcofimg = content.attr("src");
            $('#mydiv').empty(); //get rid of previos stuff
            $("#mydiv").text(content.text()); //update text
            if(srcofimg != null){
                //add photo if photo exists
                $("#mydiv").prepend('<img src="' + srcofimg + '" style="width:100%"/>'); 
            }
            $("#mydiv").toggle(); //make visible if not or vice versa

        }

    });


    //SCROLL WHEN CONTENT DOESN'T FIT
    document.addEventListener('mousemove', function(e) {
        //scroll to the right
        if (($(document).width() > $(window).width()) && (e.clientX >= $(window).width() -100)){
            scroll += 10;
            $(document).scrollLeft(scroll);
        }

        //scroll to the left
        if (($(document).width() > $(window).width()) && (e.clientX <= 100)){
            scroll -= 10;
            $(document).scrollLeft(scroll);
        }

    })

})
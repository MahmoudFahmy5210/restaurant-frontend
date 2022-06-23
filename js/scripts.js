
//when the file be ready in the browser do this func    
$(document).ready(function(){
//selector is the carousel , make it's speed to 2s 
    $("#mycarousel").carousel( { interval: 2000 } );
    //at the button carousel-pause when user click it do this func
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass("fa-pause"))
        {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play"))
            {
                $("#mycarousel").carousel("cycle");
                $("#carouselButton").children("span").removeClass("fa-play");
                $("#carouselButton").children("span").addClass("fa-pause");
            }

    });

    $("#reserve").click(function(){
        $("#reserveModal").modal("toggle");
    });
    $("#loginLink").click(function(){
       $("#loginModal").modal("toggle"); 
    });

});


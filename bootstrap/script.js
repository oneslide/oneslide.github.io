$( document ).ready(function() {
$('#slider').nivoSlider();
    setTimeout(function(){
            $('#slider2').nivoSlider({ pauseTime:3000, pauseOnHover:false });
    }, 1000);
        setTimeout(function(){
            $('#slider3').nivoSlider({ pauseTime:3000, pauseOnHover:false });
    }, 1000);
});
    $(document).ready(function() {
    if($(window).width() > 767){
    $.fn.fullpage();
    }
    else{
    }
    });
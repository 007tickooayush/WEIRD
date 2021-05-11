// noinspection JSUnresolvedFunction

$(document).ready(function(){
    let $nav = $('.nav');
    let $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu;
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        //to let the posts scroll automatically
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        // custom nav using fa
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });


});
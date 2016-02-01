Template.slider.rendered = function(){
    var site = $('#site');  
    $(document).ready(function() {
        window.prettyPrint && prettyPrint();
        $('.windowWidh').text($(window).width());
        $('#responsive').lightSlider({
            item:1,
            slideMove:2,
            loop:true,
            cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            auto:true,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ],
            onSliderLoad: function() {
                $('#responsive').removeClass('cS-hidden');
            } 
        });  
        $('#responsive1').lightSlider({
            item:1,
            slideMove:2,
            loop:true,
            cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:2000,
            auto:true,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ],
            onSliderLoad: function() {
                $('#responsive1').removeClass('cS-hidden');
            } 
        });
        
    });   
};
Template.mainLayout.helpers({
    checkslider:function(){
        var current = Router.current().route.path(this);
        console.log("CURRENT="+current);
        
        if(current == "/"){
            return true;
        }else{
            return false;
        }
    }
});
 
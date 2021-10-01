$(document).ready(function(){


    $.fn.isInViewport = function() {
         
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
        };

       function isview(name){

        if($(name).isInViewport()){

            $(name).css({

                "opacity":"1",
                "transform":"translateX(0px)",
                "transition":"2s"

            });
                
        }
        else{

            $(name).css({

                "opacity":"0",
                "transform":"translateX(-50px)",
                "transition":"2s"

            });

        }

       }


        $(window).scroll(function(){


            isview('#journey');
            isview('#summary');
            isview('#t-img-box1');
            isview('#t-img-box2');
            isview('#t-img-box3');
            isview('#hire');
            isview('#proj');

        });



    $('#hy-btn').hover(() => {

        $('#hire div').css({

            "opacity":"1",
            "transition":"2s"
            
        });

    },() => {


        $('#hire div').css({

            "opacity":"0",
            "transition":"2s"
            
        });

    });

    //footer links

    $('.footer-btn').hover(function() {

        $(this).css({

            "transform":"translateY(-10px)",
            "transition":"1s"
            
        });

    },function() {


        $(this).css({

            "transform":"translateY(0px)",
            "transition":"1s"
            
        });

    });



});
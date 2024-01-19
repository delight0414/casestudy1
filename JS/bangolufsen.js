$(function(){
    $(".lang ul li").click(function(e){
        e.preventDefault();
        $(".lang ul li").removeClass("on");
        $(this).addClass("on");
    });
    $(".control ul li").click(function(e){
        e.preventDefault();
        $(".control ul li").removeClass("on");
        $(this).addClass("on");
    });
    $("#gnb .nav_inner > ul > li:nth-child(-n+3)").hover(function(){
			$(this).find("ul").addClass("active");
			$(".gnb_bg").addClass("active");
		},
		function(){
			$(this).find("ul").removeClass("active");
			$(".gnb_bg").removeClass("active");
		}
	);

	$("#gnb .nav_inner > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		if($(this).next().length !== 0) {
			$(this).next().addClass("active");
			$(".gnb_bg").addClass("active");
		}
	});

	$("#gnb .nav_inner > ul > li > a").focusout(function(){
        console.log($(this).next().length);
		if($(this).next().length === 0) {
			$(this).parent().removeClass("active");
		}
        
	});
	$("#gnb .nav_inner li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		$(this).parent().removeClass("active");
		$(".gnb_bg").removeClass("active");
	});

let mainCurrent, mainTotal;
    const mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
        autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
        on :{ 
            init: function(){
                mainCurrent=this.realIndex+1;
                mainTotal=this.slides.length;
                $("span.current").text(mainCurrent);
                $("span.total").text(mainTotal);
            },
            slideChange: function(){
                mainCurrent=this.realIndex+1;
                $("span.current").text(mainCurrent);
            }
        }
    });
    $("a.left").click(function(e){e.preventDefault();
        mainSwiper.slideNext();
    });
    $("a.right").click(function(e){e.preventDefault();
        mainSwiper.slidePrev();
    });
});

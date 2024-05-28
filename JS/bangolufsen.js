$(function () {
	$(".lang ul li").click(function (e) {
		e.preventDefault();
		$(".lang ul li").removeClass("on");
		$(this).addClass("on");
	});
	$(".control ul li").click(function (e) {
		e.preventDefault();
		$(".control ul li").removeClass("on");
		$(this).addClass("on");
	});
	$("#gnb .nav_inner > ul > li:nth-child(-n+3)").hover(function () {
		$(this).find("ul").addClass("active");
		$(".gnb_bg").addClass("active");
	},
		function () {
			$(this).find("ul").removeClass("active");
			$(".gnb_bg").removeClass("active");
		}
	);

	$("#gnb .nav_inner > ul > li > a").focusin(function () {
		$(this).parent().addClass("active");
		if ($(this).next().length !== 0) {
			$(this).next().addClass("active");
			$(".gnb_bg").addClass("active");
		}
	});

	$("#gnb .nav_inner > ul > li > a").focusout(function () {
		console.log($(this).next().length);
		if ($(this).next().length === 0) {
			$(this).parent().removeClass("active");
		}

	});
	$("#gnb .nav_inner li li:last-child").focusout(function () {
		$(this).parent().parent().removeClass("active");
		$(this).parent().removeClass("active");
		$(".gnb_bg").removeClass("active");
	});

	const swiperData = [
		{
			sub: "메탈의 경이로움",
			title: "Beosound A5",
			content: ["어떤 포터블 스피커도 결코 갈 수 없었던 곳으로 향합니다.", "전에 만나볼 수 없던 음향.", "전에 만나볼 수 없던 미학.", "전에 만나볼 수 없던 자연스러움."]
		},

		{
			sub: "편안한 만능 헤드폰",
			title: "Beoplay HX",
			content: ["하루 종일 사용해도 편안합니다.", "선명함과 파워.", "새로운 휴식 지대.", "극대화된 미니멀리즘."]
		},

		{
			sub: "충실한 사운드의 정석",
			title: "Beosound A9",
			content: ["완벽한 재생 사운드를 선사합니다.", "새로운 차원의 디테일.", "조형적 디자인.", "형태와 기능의 조화."]
		},
	];

	function keytextFunction(n) {
		let mainData = "";
		let listData = "";

		for (let i = 0; i < swiperData[n].content.length; i++) {
			listData += `<span class="block text-left">${swiperData[n].content[i]}</span>`;
		}

		mainData = `
			<p class="title text-5xl font-bold text-left w-max">${swiperData[n].sub} <span class="product block text-base font-medium text-right">${swiperData[n].title}</span></p>
			<p class="subtitle mt-4 text-base font-normal text-right">
				${listData}
			</p>
		`;

		$(".desc .dynamic_html").html(mainData);
	}

	let mainCurrent, mainTotal;

	const mainSwiper = new Swiper(".mainSwiper", {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			init: function () {
				mainCurrent = this.realIndex + 1;
				mainTotal = this.slides.length;
				$("span.current").text(mainCurrent);
				$("span.total").text(mainTotal);

				keytextFunction(this.realIndex);
			},
			slideChange: function () {
				mainCurrent = this.realIndex + 1;
				$("span.current").text(mainCurrent);

				keytextFunction(this.realIndex);
			}
		}
	});
	$("a.left").click(function (e) {
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$("a.right").click(function (e) {
		e.preventDefault();
		mainSwiper.slidePrev();
	});
});

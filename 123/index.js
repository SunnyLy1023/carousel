$(function(){
	var num = 0;
	$('ul li').click(function(){
		num=$(this).index();
		tab();
	});

	function next(){
		num++;
		if (num==$('ul li').length) {
			num=0;
		}
		tab();
	}

	function tab(){
		for (var i = 0; i < $('ul li').length; i++) {
			$('ul li')[i].className='';
		}
		$('ul li').eq(num).addClass('active');
		$('ol').animate({
			'top' : -150*num,
		});
	}
	var timer = setInterval(next,2000);
	$('#play').mouseover(function(){
		clearInterval(timer);
	});
	$('#play').mouseout(function(){
		timer = setInterval(next,2000);
	});
});
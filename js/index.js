//$(function() {
//	$('#wrapper').bind('mousewheel', function(event, delta) {
//		console.log(event);
//		var dir = delta > 0 ? 'Up' : 'Down';
//		if(dir == 'Up') {
//			console.log('“向上滚动， www.imiansha.com”');
//		} else {
//			console.log('“向下滚动， http: //blog.csdn.net/u011627980”');
//		}
//		return false;
//});
//})


$(function() {
	var initData = 1, 
	canScroll = true, //限制连续滚动
	letGo = false, //首页上拉后中间页才能拉动
	isMiddle = true,//页面是否在中间
	isDown = false//首页是否已下拉
	;
	windowAddMouseWheel(scrollToTop,scrollToDown);
	function windowAddMouseWheel(callback1,callback2) {
	    var scrollFunc = function (e) {
	        e = e || window.event;
	        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
	            if (e.wheelDelta > 0) { //当滑轮向上滚动时
	            	callback1();
//	                console.log("滑轮向上滚动");
//	                $('.sca').removeClass('active');
	            }
	            if (e.wheelDelta < 0) { //当滑轮向下滚动时
	            	callback2();
//	                console.log("滑轮向下滚动");
//	                $('.sca').addClass('active');
//	                $('.leftsection1 .animationpart').show();
	            }
	        } else if (e.detail) {  //Firefox滑轮事件
	        	console.log(e.detail);
	            if (e.detail> 0) { //当滑轮向上滚动时
	            	callback2();
//	                console.log("滑轮向下滚动");
//	                $('.sca').removeClass('active');
	            }
	            if (e.detail< 0) { //当滑轮向下滚动时
//	                console.log("滑轮向上滚动");
					callback1();
//	                $('.sca').addClass('active');
//	                $('.leftsection1 .animationpart').show();
	            }
	        }
	        

//	        }
	    };
	    //给页面绑定滑轮滚动事件
	    if (document.addEventListener) {
	        document.addEventListener('DOMMouseScroll', scrollFunc, false);
	    }
	//滚动滑轮触发scrollFunc方法
	    window.onmousewheel = document.onmousewheel = scrollFunc;
	}
	function scrollToTop() {
		if(!isMiddle) return;
		
		if(canScroll && letGo) {
			if(initData != 1) {
				$('.body .box .cube').removeClass('active'+initData);
				initData --;
				$('.body .box .cube').addClass('active'+initData);
				$('.body .partleft .section .animationpart').removeClass('active');
				$('.body .partleft .section .left').removeClass('active');
				$('.body .partleft .section').removeClass('active');
				$('.body .partleft .leftsection'+ initData + ' .animationpart').addClass('active');
//				$('.body .partleft .leftsection'+ initData + ' .animationpart').show();
				$('.body .partleft .leftsection'+ initData + ' .left').addClass('active');
				$('.body .partleft .leftsection'+ initData + ' .left').show();
				$('.body .partleft .leftsection'+ initData).addClass('active');
				
				$('.body .partright .section').removeClass('active');
				$('.body .partright .section'+ initData).addClass('active');
				
				$('.body .partright .buttonright .unit').removeClass('active');
				$('.body .partright .buttonright .bccolor' + initData).addClass('active');
			}
			canScroll = false;
	        setTimeout(function() {
	        	canScroll = true;
	        },300)
		}
	}
	function scrollToDown() {
		pageFirstPass();
        if(!isMiddle) return;
        if(canScroll  && letGo) {
        	if(initData != 7) {
				$('.body .box .cube').removeClass('active'+initData);
				initData ++;
				$('.body .box .cube').addClass('active'+initData);
				$('.body .partleft .section .animationpart').removeClass('active');
				$('.body .partleft .section .left').removeClass('active');
				$('.body .partleft .section').removeClass('active');
				$('.body .partleft .leftsection'+ initData + ' .animationpart').addClass('active');
//				$('.body .partleft .leftsection'+ initData + ' .animationpart').show();
				$('.body .partleft .leftsection'+ initData + ' .left').addClass('active');
				$('.body .partleft .leftsection'+ initData + ' .left').show();
				$('.body .partleft .leftsection'+ initData).addClass('active');
				
				$('.body .partright .section').removeClass('active');
				$('.body .partright .section'+ initData).addClass('active');
				
				$('.body .partright .buttonright .unit').removeClass('active');
				$('.body .partright .buttonright .bccolor' + initData).addClass('active');
			}
        	canScroll = false;
	        setTimeout(function() {
	        	canScroll = true;
	        },300)
        }
	}
	$('.headpage .button').on('click',function() {
		pageFirstPass();
	});
	setTimeout(function() {
    	pageFirstPass();
    },8500);
	
	$('.bar .box .unit').on('click',clickChoice);
	//点击中间按钮事件
	function clickChoice() {
		if(!isMiddle) return;
		$('.body .box .cube').removeClass('active'+initData);
		initData = parseInt($(this).attr('data-initdata'));
		$('.body .box .cube').addClass('active'+initData);
		$('.body .partleft .section .animationpart').removeClass('active');
		$('.body .partleft .section .left').removeClass('active');
		$('.body .partleft .section').removeClass('active');
		$('.body .partleft .leftsection'+ initData + ' .animationpart').addClass('active');
//		$('.body .partleft .leftsection'+ initData + ' .animationpart').show();
		$('.body .partleft .leftsection'+ initData + ' .left').addClass('active');
		$('.body .partleft .leftsection'+ initData + ' .left').show();
		$('.body .partleft .leftsection'+ initData).addClass('active');
		
		$('.body .partright .section').removeClass('active');
		$('.body .partright .section'+ initData).addClass('active');
		
		$('.body .partright .buttonright .unit').removeClass('active');
		$('.body .partright .buttonright .bccolor' + initData).addClass('active');
	}
	
	
	//首页上拉事件
	function pageFirstPass() {
		if(letGo) return;
		if(isDown) return;
		isDown = true;
		$('.sca').addClass('active');
		$('.body .partleft .leftsection1').addClass('active');
		$('.body .partleft .leftsection1 .animationpart').addClass('active');
//		$('.body .partleft .leftsection1 .animationpart').show();
		$('.body .partleft .leftsection1 .left').addClass('active');
		$('.body .partleft .leftsection1 .left').show();
		
		$('.body .partright .section').removeClass('active');
		$('.body .partright .section1').addClass('active');
		
		$('.body .partright .buttonright .unit').removeClass('active');
		$('.body .partright .buttonright .bccolor1').addClass('active');
		setTimeout(function() {
	        	letGo = true;
	    },500)
	}
	
	//点击详情按钮
	$('.body .partleft .section .right .zy .first').on('click',function() {
		$('.body').addClass('moveLeft');
		isMiddle = false;
	});
	//点击向右按钮
	$('.body .partright .buttonright .unit .open').on('click',function() {
		$('.body').addClass('moveRight');
		isMiddle = false;
	});
	
	//点击主页按钮
	$('.body .partleft .section .right .zy .second').on('click',function() {
		$('.body').removeClass('moveLeft');
		isMiddle = true;
	});
	//点击关闭后向左的按钮
	$('.body .partright .buttonright .unit .close').on('click',function() {
		$('.body').removeClass('moveRight');
		isMiddle = true;
	});
})


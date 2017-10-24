import "../fonts/iconfont.css";
require('../less/index.less');

var COMMON = require('./common.js');


$(function(){
	$('.source-list-box .j-list-box-tit').click(function(){
		var arr = $(this).siblings('.j-list-box-cnt').css('display');
		if(arr=='block'){
			$(this).siblings('.j-list-box-cnt').slideUp();
			$(this).find('.arrow').addClass('arrow-left').removeClass('arrow-up');
		}else{
			$(this).siblings('.j-list-box-cnt').slideDown(); 
			$(this).find('.arrow').removeClass('arrow-left').addClass('arrow-up');
		}
	});
	$('.j-select-options-list li').each(function(){
		$(this).on('click',function(){
			$('.j-option-text').text($(this).text());
			return false;
		});
	});

	COMMON.commentRelated();
});

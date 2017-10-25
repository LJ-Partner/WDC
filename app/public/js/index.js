import "../fonts/iconfont.css";
require('../less/index.less');
var COMMON = require('./common.js');
$(function(){
	var INDEX = {
		init : function(){
			this.bindEvent();
		},
		bindEvent: function(){
			$('.j-e-cat-click').click(function(){
				var arr = $(this).siblings('.j-e-cat-list-slide').css('display');
				if(arr=='block'){
					$(this).siblings('.j-e-cat-list-slide').slideUp();
					$(this).find('.arrow').addClass('arrow-left').removeClass('arrow-up');
				}else{
					$(this).siblings('.j-e-cat-list-slide').slideDown(); 
					$(this).find('.arrow').removeClass('arrow-left').addClass('arrow-up');
				}
			});
			$('.j-e-select-click').each(function(){
				$(this).on('click',function(){
					$('.j-e-select-text').text($(this).text());
					return false;
				});
			});	
			$('.j-e-search-key').on('click',function(){
				$('.subsources,.hot-sorting,.column-scrollable').addClass('hide');
				$('.search-bar-w,.search-close,.column-default').removeClass('hide');
			});
			$('.j-e-close-search-key').on('click',function(){
				$('.subsources,.hot-sorting,.column-scrollable').removeClass('hide');
				$('.search-bar-w,.search-close,.column-default').addClass('hide');	
			});
		}
	}
	INDEX.init();
	COMMON.commentRelated();
});

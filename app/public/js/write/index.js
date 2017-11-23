require ('../../less/write/index.less')
var COMMON = require('../common/common.js');
$(function(){
	var INDEX = {
		init: function(){
			this.bindEvent();
			var ue = UE.getEditor('editor');
		},
		bindEvent: function(){
			$('.j-e-btn-select').on('click',function(){
				$(this).toggleClass('open');
			});
			$('.j-e-option-list li').on('click',function(){
				$('.j-e-btn-select em').text($(this).find('a').text());
				if($(this).find('a').text() == '转载'){
					$('.pop-w').show();
				}
			});
			$('.j-e-close').on('click',function(){
				$('.pop-w').css('display','none');
			});
			$(document).mouseup(function(e){  
				var _con = $('.pop');   // 设置目标区域  
				if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1  
					$('.pop-w').css('display','none');  
				}  
			}); 
			$('.j-e-tag-focus').on('focus',function(){
				$('.j-e-tag-focus-cnt').show();
			});
			$('.j-e-tag-tab li').each(function(i){
				$(this).on('click',function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.j-e-tag-tab-cnt .tab-item').eq(i).show().siblings().hide();
				});
			});
			// $('.j-e-tag-focus').on('blur',function(){
			// 	$('.j-e-tag-focus-cnt').hide();
			// });
		}
	}
	INDEX.init();
});


require('../less/index.less');
var COMMON = require('./common.js');
$(function(){
	var INDEX = {
		init : function(){
			this.bindEvent();
		},
		bindEvent: function(){
			var flag  = 0;
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
			$('.j-e-search-key').unbind('click').on('click',function(){
				if(flag == 0){
					$('.subsources,.hot-sorting,.column-scrollable').addClass('hide');
					$('.search-bar-w,.search-close,.column-default').removeClass('hide');
					flag = 1;
				}else{
					if($('.search-bar-w').css('display') == 'block'){
						flag = 1;	
					}else{
						flag = 0;	
					}
					//搜索结果
					console.log(flag);
				}
			});
			$('.j-e-close-search-key').on('click',function(){
				$('.subsources,.hot-sorting,.column-scrollable').removeClass('hide');
				$('.search-bar-w,.search-close,.column-default').addClass('hide');
				flag = 0;	
			});
			$('.j-e-search-focus').on('keyup',function(){
				INDEX.fuzzyMatch();
			});
		},
		fuzzyMatch: function(){
			var a = $('.j-e-cat-list-slide li a');  
			var filter = $('.j-e-search-focus').val().toUpperCase();  
			// 循环所有列表，查找匹配项  
			for (var i = 0; i < a.length; i++) {  
				var searchval = a[i].getElementsByTagName('h4')[0];  
				if (searchval.innerHTML.toUpperCase().indexOf(filter) > -1) {  
				    a[i].style.display = '';  
				} else {  
				    a[i].style.display = 'none';  
				}  
			}  	
		}
	} 
	INDEX.init();
	COMMON.commentRelated();
	COMMON.login();
});

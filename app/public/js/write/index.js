require ('../../less/write/index.less')
var COMMON = require('../common/common.js');
$(function(){
	var INDEX = {
		init: function(){
			var ue = UE.getEditor('editor');
			this.bindEvent();
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
			$('body').on('click', function(e) {
				if(e.target != $('input[type=checkbox]')[0]){
					e.preventDefault();
				}
                if ($(e.target).parents(".j-e-tag-focus-cnt").length === 0 && $(e.target).parents('.tags-info').length === 0 && !$(e.target).hasClass('tags-info'))
                return $('.j-e-tag-focus-cnt').hide();
            }),
			$('.j-e-tag-tab li').each(function(i){
				$('.j-e-tag-tab li').on('click',function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.j-e-tag-tab-cnt .tab-item').eq(i).show().siblings().hide();
					
				});
			});
			$('.item-list li a').unbind().on('click',function(){
				var txtvalue = $(this).text();
				if(txtvalue!=''){
					if($('.info-item').length < 5){
						INDEX.addTag($(this));
					}else{
						return false;	
					}
				}	
			});
			$('#license').on('change',function(){
				INDEX.change();
			});
		},
		addTag: function(obj) {
			var tag = obj.text();
			if (tag != '') {
				var i = 0;
				$('.info-item').each(function() {
					if ($(this).text() == tag + '×') {
						$(this).addClass('tag-warning');
						setTimeout(function(){
							$('.tag-warning').removeClass('tag-warning');	
						},1e3);
						i++;
					}
				})
				if (i > 0) { //说明有重复
					return false;
				}
				$('.form-field-tags').before('<span class="info-item">' + tag + '<em class="j-e-tag-close">×</em></span>'); //添加标签
				
				$('.j-e-tag-focus-cnt').css('left',$('.j-e-tag-focus').position().left);
				$('.j-e-tag-close').on('click', function() {
					$(this).parent('.info-item').remove();
					$('.j-e-tag-focus-cnt').css('left',$('.j-e-tag-focus').position().left);
				});
			}
		},
		change: function(){
			var t,i;
        	t = $('#editorStatus'),
	        t.html('保存中...').removeClass('hide'),
	        $('#dropIt').addClass('hide'),
	        clearTimeout(i),
	        i = setTimeout(function() {
	            INDEX.save();
	        }, 4e3);
		},
		save: function(){
        	var t = $('#editorStatus');
	        t.html('已保存草稿').removeClass('hide');
	        $('#dropIt').removeClass('hide');	
		}
	}
	INDEX.init();
});


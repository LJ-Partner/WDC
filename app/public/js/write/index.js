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
			$('body').on('click', function(e) {
				e.preventDefault();
                if ($(e.target).parents(".j-e-tag-focus-cnt").length === 0 && $(e.target).parents('.tags-info').length === 0 && !$(e.target).hasClass('tags-info'))
                return $('.j-e-tag-focus-cnt').hide();
            }),
			$('.j-e-tag-tab li').each(function(i){
				$(this).on('click',function(){
					$(this).addClass('active').siblings().removeClass('active');
					$('.j-e-tag-tab-cnt .tab-item').eq(i).show().siblings().hide();
				});
			});

			// var t = $('.item-list li a');
			// var e ;
			// t.click(function(t) {
   //              var n, r, i;
   //              return i = $(this).data('tag'),
   //              r = -1,
   //              e.result.forEach(function(e, t) {
   //                  if (~~e.id === ~~i.id)
   //                  return r = t
   //              }),
   //              r !== -1 ? (n = e.$container.find(".sf-typeHelper-item").eq(r),
   //              n.css("background-color", "#FFF2AB"),
   //              setTimeout(function() {
   //                  return n.addClass("blink")
   //              }, 1),
   //              setTimeout(function() {
   //                  return n.css("background-color", "#E7F2ED")
   //              }, 1e3)) : e.result.length === e.opt.maxNum && 0 !== e.opt.maxNum ? t.preventDefault() : e.add(i)
   //          });
		}
	}
	INDEX.init();
});


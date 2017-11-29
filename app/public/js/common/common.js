import "../../fonts/iconfont.css";
module.exports = {
	login : function(){
		$('.j-e-login').unbind().on('click',function(){
			$('.dialog .tit').text('登录');
			$('.dialog-w,.login-box').show();
			$('.reg-box').hide();
		});
		$('.j-e-register').unbind().on('click',function(){
			$('.dialog .tit').text('注册');
			$('.dialog-w,.reg-box').show();
			$('.login-box').hide();
		});
		$('.j-e-dialog-close').on('click',function(){
			$('.dialog-w').hide();	
		});
		$('.btn-reg').on('click',function(){
			$('.dialog-w').hide();
			$('.attention-category-w').show();	
		});
		$('.j-e-category-close').on('click',function(){
			$('.attention-category-w').hide();
		});
		$(document).mouseup(function(e){  
			var _con = $('.dialog');  
			var _con2 = $('.attention-category-w'); // 设置目标区域 
			console.log(_con);
			if((!_con.is(e.target) && _con.has(e.target).length === 0) || (!_con2.is(e.target) && _con2.has(e.target).length === 0)){ 
				$('.attention-category-w,.dialog-w').hide();
			}  
		}); 
	},
	commentRelated : function () {
		$('.j-e-commentfocus').on('focus',function(){
			var arr = $(this).siblings('.j-e-comment-slide').css('display');
			if(arr == 'block' ){
				$(this).siblings('.j-e-comment-slide').slideUp();	
			}else{
				$(this).siblings('.j-e-comment-slide').slideDown();	
			}
		});

		$('.j-e-commentcancel').on('click',function(){
			var type = $(this).attr('data-type');
			$(this).parents('.j-e-comment-slide').slideUp().siblings().parents('.j-e-comment-slide').slideDown();
			$(this).parents('.j-e-comment-slide').siblings('.j-e-commentfocus').val('');
		});

		$('.j-e-commentadd').on('click',function(){
			$(this).parents('.more-comment').siblings('.new-comment-w').toggle();
			$(this).parents('.more-comment').siblings('.new-comment-w').find('.j-e-commentfocus').val('');
		});
		//回复
			//一级回复
		$('.j-e-comment').each(function(i){
			var len = $('.comment-w').eq(i).find('.j-e-sub-comment').length; 
			var flag = true;
			$('.sub-comment-list').eq(i).find('.j-e-sub-comment').slice(3).hide();
			if(len > 2){
				$('.comment-w').eq(i).find('.j-e-more-comment').show();	
				$('.sub-comment-list').eq(i).find('.moreover-num').text(parseInt(len - 3));
				$(this).find('.j-e-unfolded').unbind().on('click',function(){
					if(flag){
						$('.sub-comment-list').eq(i).find('.j-e-sub-comment').slice(3).show();
						$('.sub-comment-list').eq(i).find('.line-wrap span').hide();
						$(this).text('收起');
						flag = false;
					}else{
						$('.sub-comment-list').eq(i).find('.j-e-sub-comment').slice(3).hide();
						$('.sub-comment-list').eq(i).find('.line-wrap span').show();
						$(this).text('展开查看');
						flag = true;
					}
				});
			}else{
				$('.comment-w').eq(i).find('.j-e-more-comment').hide();		
			}
			$(this).find('.j-e-repeat').unbind().on('click',function(){
				$('.comment-w').eq(i).find('.comment-box .new-comment-w').toggle();
				$(this).parents('.comment-w').siblings().find('.comment-box .new-comment-w').hide();
			});
		});
			//多级回复
		$('.j-e-sub-comment').each(function(i){
			$(this).find('.j-e-sub-repeat').unbind().on('click',function(){
				var text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
				$('.sub-comment-box').eq(i).find('.j-e-commentfocus').val(text);
				$('.sub-comment-box').eq(i).find('.new-comment-w').toggle();
				$(this).parents('.sub-comment-box').siblings().find('.new-comment-w').hide();	
			});
		});
	},
	attentionCat : function(){
		$('.j-e-category-close').on('click',function(){
			$('.attention-category-w').hide();
		});
	}
};


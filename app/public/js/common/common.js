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
			var len = $('.j-e-sub-comment').length;
			
			$(this).find('.j-e-repeat').unbind().on('click',function(){
				$('.comment-w').eq(i).find('.comment-box .new-comment-w').toggle();
				$(this).parents('.comment-w').siblings().find('.comment-box .new-comment-w').hide();
			});

			$(this).find('.j-e-unfolded').unbind().on('click',function(){
				if(len > 1){
					$('.j-e-sub-comment:gt(1)').hide();
				}
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


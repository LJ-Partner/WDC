import "../fonts/iconfont.css";
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
		var flag=true,flag1=true;
		$('.js-e-commentfocus').on('focus',function(){
			var arr = $(this).siblings('.js-e-comment-slide').css('display');
			if(arr == 'block' ){
				$(this).siblings('.js-e-comment-slide').slideUp();	
			}else{
				$(this).siblings('.js-e-comment-slide').slideDown();	
			}
		});

		$('.js-e-commentcancel').on('click',function(){
			$(this).parents('.js-e-comment-slide').slideUp().siblings().parents('.js-e-comment-slide').slideDown();
			$(this).parents('.js-e-comment-slide').siblings('.js-e-commentfocus').val('');
		});

		$('.j-e-commentadd').on('click',function(){
			$(this).parents('.more-comment').siblings('.new-comment-w').toggle();
			$(this).parents('.more-comment').siblings('.new-comment-w').find('.js-e-commentfocus').val('');
		});
		//回复
		$('.j-e-repeat').unbind().on('click',function(){
			var type = $(this).attr('data-type');//1 一级回复， 2 2级回复
			var show;
			var text;
			if(type == '1'){
				flag = false;
				if(!flag && flag1){
					$(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').toggle();
				}
				$(this).parents('.comment-box').siblings('.sub-comment-list').find('.js-e-commentfocus').val(text);
			}else if(type == '2'){
				text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
				if(flag1){
					$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideDown();
					flag1 = false;	
				}else{
					$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideUp();
					flag1 = true;
				}
				$(this).parents('.sub-comment-box').siblings('.new-comment-w').find('.js-e-commentfocus').val(text);
				flag = true;
			}
		});
	},
	attentionCat : function(){
		$('.j-e-category-close').on('click',function(){
			$('.attention-category-w').hide();
		});
	}
};


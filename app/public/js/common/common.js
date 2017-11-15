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
		// $('.j-e-repeat').unbind().on('click',function(){
		// 	var type = $(this).attr('data-type');//1 一级回复， 2 2级回复
		// 	var show;
		// 	var text;
		// 	var flag = false;
		// 	if(type == '1'){
		// 		flag = false;
		// 		if(!flag && flag1){
		// 			$(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').toggle();
		// 		}
		// 		$(this).parents('.comment-box').siblings('.sub-comment-list').find('.js-e-commentfocus').val(text);
		// 	}else if(type == '2'){
		// 		text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
		// 		if(flag1){
		// 			$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideDown();
		// 			flag1 = false;	
		// 		}else{
		// 			$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideUp();
		// 			flag1 = true;
		// 		}
		// 		$(this).parents('.sub-comment-box').siblings('.new-comment-w').find('.js-e-commentfocus').val(text);
		// 		flag = true;
		// 	}
		// });

		var flag = false;
		$('.j-e-sub-repeat').each(function(i){
			$(this).on('click',function(){
				var text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
				var display = $(this).parents('.sub-comment-box').siblings('.new-comment-w').css('display');
				var text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
				if(!flag){
					if(display == 'block'){
						$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideUp();
						flag = false;
						console.log(1111);
					}else{
						$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideDown();	
						flag = true;
						console.log(222);
					}
				}else{
					if(display == 'block'){
						$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideDown();
						flag = false;
						console.log(333);
					}
				}					
				$(this).parents('.sub-comment-box').siblings('.new-comment-w').find('.js-e-commentfocus').val(text);
			});
		});
	},
	attentionCat : function(){
		$('.j-e-category-close').on('click',function(){
			$('.attention-category-w').hide();
		});
	}
};


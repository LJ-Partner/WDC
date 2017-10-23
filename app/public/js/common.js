module.exports = {
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
		$('.j-e-repeat').on('click',function(){
			var show = $(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').css('display');
			if(show != 'block'){
				$(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').slideDown();
			}else{
				$(this).parents('.comment-box').siblings('.sub-comment-list').find('.js-e-commentfocus').val('');
			}
		});

		$('.j-e-sub-repeat').on('click',function(){
			var show = $(this).parents('.sub-comment-box').siblings('.new-comment-w').css('display');
			var text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
			if(show != 'block'){
				$(this).parents('.sub-comment-box').siblings('.new-comment-w').slideDown();	
			}else{
				$(this).parents('.sub-comment-box').siblings('.new-comment-w').find('.js-e-commentfocus').val(text);
			}	
		});

		// $('.comment-w').each(function(){
		// 	var len = $('.sub-comment-list .sub-comment-box').length;
		// 	if(len > 3){
		// 		$('.sub-comment-box').slice(3).hide();
		// 		$('.j-e-unfolded').on('click',function(){
		// 			($('.sub-comment-box').slice(3)).show();
		// 			$(this).text('收起');	
		// 			$(this).removeClass('j-e-unfolded').addClass('j-e-put-away');
		// 			$('.j-e-put-away').on('click',function(){
		// 				$('.sub-comment-box').slice(3).hide();	
		// 				$(this).text('展开查看');
		// 				$(this).addClass('j-e-unfolded').removeClass('j-e-put-away');
		// 				return false;
		// 			});	
		// 		});	
		// 	}
		// });
	}
};


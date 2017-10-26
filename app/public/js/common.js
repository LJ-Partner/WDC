import "../fonts/iconfont.css";
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
		//回复
		$('.j-e-repeat').unbind().on('click',function(){
			var type = $(this).attr('data-type');//1 一级回复， 2 2级回复
			var show;
			var text;
			var flag  = true;
			var flag1 = true;
			if(type == '1'){
				show = $(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').css('display');
				if(flag = true){
					$(this).parents('.comment-box').siblings('.sub-comment-list').find('.new-comment-w').toggle();	
				}
				$(this).parents('.comment-box').siblings('.sub-comment-list').find('.js-e-commentfocus').val(text);
			}else if(type == '2'){
				show = $(this).parents('.sub-comment-box').siblings('.new-comment-w').css('display');
				text = $(this).parents('.sub-tool-group').siblings('p').find('a').text();
				flag = false;
				$(this).parents('.sub-comment-box').siblings('.new-comment-w').find('.js-e-commentfocus').val(text);
			}
		});
	}
};


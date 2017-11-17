import '../../fonts/iconfont.css';
require('../../less/user/edit.less')
$(function(){
	var EDIT = {
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			$('.edit-item-w').on('click','.j-e-info-edit',function(){
				var type = $(this).attr('data-type');
				if(type == 'sex'){
					$(this).siblings('span').addClass('hide');
				}
				$(this).addClass('hide');
				$(this).siblings('.item-info-update').removeClass('hide');
			});	
		}
	}
	EDIT.init();
});
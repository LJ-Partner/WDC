require('../../less/user/index.less')
var COMMON = require('../common/common.js');
$(function(){
	var INDEX = {
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			$('.intro-item-w').on('click','.j-e-intro-edit',function(){
				$(this).addClass('hide');
				$(this).siblings('.item-intro-update').removeClass('hide');
			});
			$('.intro-item-w').on('click','.j-e-btn-save',function(){
				$(this).parent('.item-intro-update').addClass('hide');
				$(this).parent('.item-intro-update').siblings('.j-e-intro-edit').removeClass('hide');
			});	
		}
	}
	INDEX.init();
})


require ('../../less/write/index.less')
var COMMON = require('../common/common.js');
$(function(){
	var INDEX = {
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			$('.j-e-btn-select').on('click',function(){
				$(this).find('.j-e-option-list').show();
			});
			$('.j-e-option-list li').each(function(i){
				$(this).on('click',function(){
					console.log(i);
				});
			});
		}
	}
	INDEX.init();
})


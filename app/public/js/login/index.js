require ('../../less/login/index.less')
$(function(){
	var LOGIN = {
		init: function(){
			var me = this;
			me.bindEvent();
			me.generateCaptcha();
		},
		bindEvent: function(){
			$('.j-e-login').on('click',function(){
				alert('登录')
			});	
		},
		generateCaptcha(){
			var send_params = {
				width: 240,
				height: 100
			};
			$.ajax({
				type:'POST',
				url:'http://120.132.22.128:8180/user/generateCaptcha',
				headers: {
					"content-type": "application/json"
				},
				data:JSON.stringify(send_params),
				success:function(data){
					console.log(data)
				},
				error:function(jqXHR){
				}								
			});
		}
	}
	LOGIN.init();
})


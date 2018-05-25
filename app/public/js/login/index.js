require ('../../less/login/index.less')
$(function(){
	var LOGIN = {
		init(){
			var me = this;
			me.formCheck();
		},
		toLogin(phone,Password){
			$.ajax({
				type:'POST',
				url:'http://120.132.22.128:8180/user/login',
				headers: {
					'content-type': 'application/json'
				},
				data:JSON.stringify({phone:phone,Password:Password}),
				success:function(data){
					if(data.code == 200){
						
					}else{
						$('.err-tip').show();
						$('.tootip').html(data.msg);
					}
				},
				error:function(jqXHR){
				}								
			});
		},
		formCheck(){
			var userMobile,passWord;
			var me = this;
			$('#userMobile').on('blur',function(){
				userMobile = $('#userMobile').val();
				if(userMobile){
					$('.err-tip').hide();
					$('.tootip').html('');
				}else{
					$('.err-tip').show();
					$('.tootip').html('手机号不能为空');
					$(this).focus();
					return false;
				}
			});	
			$('#passWord').on('blur',function(){
				passWord = $('#passWord').val();
				if(passWord){
					$('.err-tip').hide();
					$('.tootip').html('');
				}else{
					$('.err-tip').show();
					$('.tootip').html('密码不能为空');
					$(this).focus();
					return false;
				}	
			});
			$('.j-e-login').on('click',function(){
				if(userMobile && passWord){
					$('.err-tip').hide();
					$('.tootip').html('');
					me.toLogin(userMobile,passWord);
				}else{
					$('.err-tip').show();
					$('.tootip').html('手机号或密码不能为空');
				}
			})	
		}
	}
	LOGIN.init();
})


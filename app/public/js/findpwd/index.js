require ('../../less/findpwd/index.less')
import API from '../../js/api/index'
$(function(){
	var FINDPWD = {
		init(){
			var me = this;
			me.formCheck();
		},
		bindEvent(){
			
		},
		findPwd(phone,SMSCode,NewPassword){
			$.ajax({
				type:'post',
				url:'http://120.132.22.128:8180/user/findPwd',
				headers: {
					'content-type': 'application/json'
				},
				data:JSON.stringify({phone:phone,SMSCode:SMSCode,NewPassword:NewPassword}),
				success:function(data){
					if(data.code == 200){
						$('.err-tip').show();
						$('.tootip').html('修改成功');
						setTimeout(()=>{
							window.location.href = '/login';	
						},5000);
					}else{
						$('.err-tip').show();
						$('.tootip').html(data.msg);
						setTimeout(()=>{
							window.location.reload();	
						},5000);
					}
				},
				error:function(jqXHR){
				}								
			});
		},
		formCheck(){
			var userMobile;
			var msgCode = $('#msgCode').val();
			var passWord1;
			var passWord2;	
			var telReg;
			var me = this;
			$('#userMobile').on('blur',function(){
				userMobile = $('#userMobile').val();
				telReg = !!userMobile.match(/^1[3-9]{1}[0-9]{9}$/); 
				if(userMobile){
					if(!telReg){
						$('.err-tip').show();
						$('.tootip').html('请输入正确的手机号码');
						$(this).focus();
						return false;
					}else{
						$('.err-tip').hide();
						$('.tootip').html('');	
					}
				}else{
					$('.err-tip').show();
					$('.tootip').html('手机号不能为空');
					$(this).focus();
					return false;	
				}
			});	
			$('#passWord1').on('blur',function(){
				passWord1 = $('#passWord1').val();
				if(passWord1){
					if(passWord1.match(/^[0-9a-zA-Z@._]{6,30}$/)){
						$('.err-tip').hide();
						$('.tootip').html('');
					}else{
						$('.err-tip').show();
						$('.tootip').html('密码格式不正确！需要6到30个字符，包含数字、字母大小写和@._');
						$(this).focus();
						return false;
					}
				}else{
					$('.err-tip').show();
					$('.tootip').html('请输入密码');
					$(this).focus();
					return false;	
				}
			});
			$('#passWord2').on('blur',function(){
				passWord2 = $('#passWord2').val();	
				if(passWord1 != passWord2){
					$('.err-tip').show();
					$('.tootip').html('两次密码输入不一致');
					$(this).focus();
					return false;
				}else{
					$('.err-tip').hide();
					$('.tootip').html('');	
				}
			});
			$('.j-e-findpwd').on('click',function(){
				msgCode = $('#msgCode').val();
				if(userMobile && msgCode && passWord1){
					$('.err-tip').hide();
					$('.tootip').html('');
					me.findPwd(userMobile,msgCode,passWord1);
				}else{
					$('.err-tip').show();
					$('.tootip').html('请把相关信息填写完整');
				}
			});
		}
	}
	FINDPWD.init();
})


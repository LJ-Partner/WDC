require ('../../less/register/index.less');
import API from '../../js/api/index'
$(function(){
	var captchaId;
	var REGISTER = {
		init: function(){
			var me = this;
			me.bindEvent();
			me.generateCaptcha();
			me.formCheck();
		},
		bindEvent: function(){
			var me = this;
			$('.code-img-w').on('click',function(){
				me.generateCaptcha();
			});	
			$('.j-e-send').on('click',function(){

			});
			
		},
		generateCaptcha(){
			var send_params = {
				width: 240,
				height: 40
			};
			$.ajax({
				type:'POST',
				url:API.generateCaptcha,
				headers: {
					'content-type': 'application/json'
				},
				data:JSON.stringify(send_params),
				success:function(data){
					captchaId = data.data.captchaId;
					$('#codeImg').attr('src',data.data.img);
				},
				error:function(jqXHR){
				}								
			});
		},
		checkNickName(name){
			$.ajax({
				type:'get',
				url:API.checkNickName,
				headers: {
					'content-type': 'application/json'
				},
				data:{nickname:name},
				success:function(data){
					if(data.code != 200){
						$('.err-tip').show();
						$('.tootip').html(data.msg);
						return false;
					}
				},
				error:function(jqXHR){
				}								
			});
		},
		checkCaptcha(id,value){
			$.ajax({
				type:'POST',
				url:API.checkCaptcha,
				headers: {
					'content-type': 'application/json'
				},
				data:JSON.stringify({Id:id,VerifyValue:value}),
				success:function(data){
					if(data.code == 200){
						$('.err-tip').hide();
						$('.tootip').html('');	
						$('.j-e-send').attr('disabled',false);
						$('.j-e-send').addClass('box-btn-green').removeClass('box-btn-gray');
					}else{
						$('.err-tip').show();
						$('.tootip').html(data.msg);
						$('.j-e-send').attr('disabled',true);
						$('.j-e-send').addClass('box-btn-gray').removeClass('box-btn-green');
						$('#codeValue').focus();
						return false;	
					}
				},
				error:function(jqXHR){
				}								
			});
		},
		toRegister(phone,Password,nickName,SMSCode){
			$.ajax({
				type:'POST',
				url:API.register,
				headers: {
					'content-type': 'application/json'
				},
				data:JSON.stringify({phone:phone,Password:Password,nickName:nickName,SMSCode:SMSCode}),
				success:function(data){
					console.log(data)
				},
				error:function(jqXHR){
				}								
			});
		},
		formCheck(){
			var userName;
			var userMobile;
			var codeValue;	
			var msgCode;
			var inviteCode = $('#msgCode').val();
			var passWord;
			var telReg;
			var sendParams;
			$('#userName').on('blur',function(){
				userName = $('#userName').val();
				if(userName){
					if(userName.match(/^[a-zA-Z0-9_\u4e00-\u9fa5]{2,15}$/)){
						$('.err-tip').hide();
						$('.tootip').html('');
						REGISTER.checkNickName(userName);	
					}else{
						$('.err-tip').show();
						$('.tootip').html('昵称格式不正确，需要是2-15个字符，只能包含英文中文数字下划线，不能包含空格');
						$(this).focus();
					}	
				}else{
					$('.err-tip').show();
					$('.tootip').html('用户名不能为空');
					$(this).focus();
					return false;
				}	
			});
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
			$('#codeValue').on('blur',function(){
				codeValue = $('#codeValue').val();
				if(codeValue){
					REGISTER.checkCaptcha(captchaId,codeValue);	
				}else{
					$('.err-tip').hide();
					$('.tootip').html('图形验证码值不能为空');
					$(this).focus();
					return false;
				}	
			});
			$('#passWord').on('blur',function(){
				passWord = $('#passWord').val();
				if(passWord){
					if(passWord.match(/^[0-9a-zA-Z@._]{6,30}$/)){
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
				}
			});
			$('.j-e-register').on('click',function(){
				msgCode = $('#msgCode').val();
				REGISTER.toRegister(userMobile,passWord,userName,msgCode);		
			});
		}
	}
	REGISTER.init();
})


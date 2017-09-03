$(function() {
			
	
		/*	//获取画布
			var clock = document.getElementById('clock');
			//设置绘图环境
			var cxt = clock.getContext('2d');

			function displayTime() {
				//清除画布    从X轴、Y轴 多宽多高
				cxt.clearRect(0, 0, 500, 500);   			
				//获取时间
				var now = new Date();
				var second = now.getSeconds();
				var minute = now.getMinutes();
				var hour1 = now.getHours();
				//将24小时进制转为12小时，且为浮点型
				var hour = hour1 + minute / 60;
				hour = hour > 12 ? hour - 12 : hour;
				//获取全部时间
				var time = now.toLocaleString();*/
/*
				//表盘
				//开始新路径
				cxt.beginPath();
				cxt.lineWidth = 8;
				
				var gradient=cxt.createLinearGradient(0,0,500,0);
				gradient.addColorStop("0","magenta");
				gradient.addColorStop("0.5","blue");
				gradient.addColorStop("1.0","red");
				
				cxt.strokeStyle = gradient;
				//路径函数 x,y,r,角度范围,顺时针/逆时针
				//context.arc(x,y,r,sAngle,eAngle,counterclockwise);
				//x	圆的中心的 x 坐标。
				//y	圆的中心的 y 坐标。
				//r	圆的半径。
				//sAngle	起始角，以弧度计。（弧的圆形的三点钟位置是 0 度）。
				//eAngle	结束角，以弧度计。
				//counterclockwise	可选。规定应该逆时针还是顺时针绘图。False = 顺时针，true = 逆时针。
				cxt.arc(250, 250, 200, 0, 360, false);				
				//绘制已定义的路径
				cxt.stroke();
				//创建从当前点回到起始点的路径
				cxt.closePath();
				//刻度,利用旋转
				//时刻度
				for(var i = 0; i < 12; i++) {
					//保存当前状态
					cxt.save();
					//刻度粗细
					cxt.lineWidth = 5;
					//刻度颜色
					cxt.strokeStyle = "black";
					//设置00点,以画布中心为00
					cxt.translate(250, 250);
					//设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180
					cxt.rotate(i * 30 * Math.PI / 180);
					cxt.beginPath();
					//刻度起始点
					cxt.moveTo(0, -180);
					//刻度结束点
					cxt.lineTo(0, -195);
					cxt.stroke();
					cxt.closePath();
					
					//将旋转后的图片返回原画布
					cxt.restore();
				}

				//分刻度
				for(var i = 0; i < 60; i++) {
					//保存当前状态
					cxt.save();
					//刻度粗细
					cxt.lineWidth = 3;
					//刻度颜色
					cxt.strokeStyle = "black"
					//设置00点,以画布中心为00
					cxt.translate(250, 250);
					//设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180
					cxt.rotate(i * 6 * Math.PI / 180);
					cxt.beginPath();
					//起始点
					cxt.moveTo(0, -188);
					cxt.lineTo(0, -195);
					cxt.closePath();
					cxt.stroke();
					//将旋转后的图片返回原画布
					cxt.restore();
				}
				//表盘中心
				cxt.beginPath();
				cxt.lineWidth = 1;
				cxt.strokeStyle = "red";
				cxt.fillStyle = "red";
				//路径函数 x,y,r,角度范围,顺时针/逆时针
				cxt.arc(250, 250, 4, 0, 360, false);
				cxt.fill();
				cxt.stroke();
				cxt.closePath();
				//时针
				//保存当前状态
				cxt.save();
				cxt.lineWidth = 5;
				cxt.strokeStyle = "black";
				//设置异次元空间00点
				cxt.translate(250, 250);
				//设置旋转角度 参数是弧度，角度 0--360 弧度角度*Math.PI/180
				cxt.rotate(hour * 30 * Math.PI / 180);
				cxt.beginPath();
				cxt.moveTo(0, -120);
				cxt.lineTo(0, 10);
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
				//分针
				cxt.save();
				cxt.lineWidth = "3";
				cxt.strokeStyle = "black";
				cxt.translate(250, 250);
				cxt.rotate(minute * 6 * Math.PI / 180);
				cxt.beginPath();
				cxt.moveTo(0, -150);
				cxt.lineTo(0, 15);
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
				//秒针
				cxt.save();
				cxt.lineWidth = "1.5";
				cxt.strokeStyle = "red";
				cxt.translate(250, 250);
				cxt.rotate(second * 6 * Math.PI / 180);
				cxt.beginPath();
				cxt.moveTo(0, -160);
				cxt.lineTo(0, 20);
				cxt.closePath();
				cxt.stroke();
				//秒针前端小点
				cxt.beginPath();
				//外环为红色
				cxt.strokeStyle = "red";
				//灰色填充
				cxt.fillStyle = "gray";
				//路径函数 x,y,r,角度范围,顺时针/逆时针
				cxt.arc(0, -145, 4, 0, 360, false);
				cxt.fill();
				cxt.closePath();
				cxt.stroke();
				cxt.restore();
				//表盘中心
				cxt.beginPath();
				cxt.lineWidth = 1;
				//外环为红色
				cxt.strokeStyle = "red";
				//灰色填充
				cxt.fillStyle = "gray";
				//路径函数 x,y,r,角度范围,顺时针/逆时针
				cxt.arc(250, 250, 4, 0, 360, false);
				cxt.fill();
				cxt.stroke();
				cxt.closePath();
				//写时间    
				cxt.font = "15px 黑体 ";
				cxt.fillStyle = "black";
				//实心字
				cxt.fillText(time, 160, 150);
			}
			//使用setInterval(代码，毫秒时间)使时钟转起来;
			drawClock();
			setInterval(drawClock, 1000);*/
	
	
	
	var width = $(window).width();
	//alert(width);
	//$("#dmarquee").css("width",width*0.9);
	$("#dmarquee").kxbdMarquee({direction:"right"});
	
	layer.ready(function() {
		layer.photos({
			photos: '#layer-photos-demo'
		});
	});

	$(window).scroll(function() {
		console.log($(document).scrollTop());
		if($(document).scrollTop() >= 900) {
			$(".topnav").css("position", "fixed");
			$(".topnav").css("left", "0");
			$(".topnav").css("top", "0");
			$(".topnav").css("background-color", "white");
			$(".topnav").css("z-index", "100");
		} else {
			$(".topnav").css("position", "");
		}
	});

/*	//弹出登录框
	$("#aLogin").click(function() {			
		$("#txtUserName").val("");
		$("#txtPwd").val("");
		layer.open({
			type: 1,
			area: ["390px", "260px"],
			title: "登录",
			content: $("#con")
		});
	});

	//弹出注册框
	$("#aReg").click(function() {
		$("#uregname").val("");
		layer.open({
			type: 1,
			area: ["390px", "439px"],
			title: "注册",
			content: $(".dreg")
		});
	});*/

	/*//登录验证
	$("#btnLogin").click(function() {
		if("" == $.trim($("#txtUserName").val())) {
			layer.tips('请输入用户名', $("#txtUserName"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#txtUserName").focus();
			return;
		}
		if("" == $.trim($("#txtPwd").val())){
			layer.tips('请输入密码', $("#txtPwd"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#txtPwd").focus();
			return;
		}
		layer.closeAll();
	});
	
	//注册验证
	$("#btnreg").click(function(){
		if("" == $.trim($("#uregname").val())){
			layer.tips('请输入用户名', $("#uregname"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#uregname").focus();
			return;
		}
		if("" == $.trim($("#uregpwd").val())){
			layer.tips('请输入注册密码', $("#uregpwd"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#uregpwd").focus();
			return;
		}
		if("" == $.trim($("#uregconfirmpwd").val())){
			layer.tips('请输入确认密码', $("#uregconfirmpwd"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#uregconfirmpwd").focus();
			return;
		}
		if("" == $.trim($("#uregemail").val())){
			layer.tips('请输入注册邮箱', $("#uregemail"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#uregemail").focus();
			return;
		}
		if("" == $.trim($("#uregqq").val())){
			layer.tips('请输入注册QQ号码', $("#uregqq"), {
				tips: [1, '#3595CC'],
				time: 2000
			});
			$("#uregqq").focus();
			return;
		}
        $.ajax({
            url:"reg.jsp",//请求的url地址
            dataType:"json",//返回的格式为json
            async:true,//请求是否异步，默认true异步，这是ajax的特性
            data:{"uname":$.trim($("#uregname").val()),"upwd":$.trim($("#uregpwd").val())},//参数值
            type:"GET",//请求的方式
            beforeSend:function(){},//请求前的处理
            success:function(req){},//请求成功的处理
            complete:function(){},//请求完成的处理
            error:function(){}//请求出错的处理
        });
		layer.closeAll();
	});
*/
	$(".slidepic li").mousemove(function () {
        $(this).stop(true).animate({ "width": "789px" }, 200)
        .siblings().stop(true).
        animate({ "width": "100px" }, 200);
    });

});
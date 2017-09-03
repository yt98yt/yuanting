function getDate() {
	var oDate = new Date(); //实例一个时间对象；
	var year = oDate.getFullYear(); //获取系统的年；
	var month = oDate.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
	var day = oDate.getDate(); // 获取系统日，
	var hour = oDate.getHours(); //获取系统时，
	var minute = oDate.getMinutes(); //分
	var second = oDate.getSeconds(); //秒
	return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
}
$(function() {
	
	$(".reply").click(function(){	
		$(this).parent().append('<div class="soncom" style="width: 95%;height: 150px;border: 1px solid #ccc;"><textarea placeholder="请输入您的评论！1000字以内" style="	width: 100%;height: 75%;border: 1px solid #ccc;"></textarea><a href="javascript:" style="	float: right;width: 80px;height: 30px;line-height: 30px;display: block;	background-color: blue;color: #FFFFFF;text-align: center;text-decoration: none;border-radius: 5px;">评论</a></div>');
	});
	
	
	$("#parcom").click(function(){
		if($.trim($("#txtcomcon").val()) != ""){
			var appItem = '<div style="margin-top: 20px;"><hr /><div style="margin-top: 10px;"><a href="javascirpt:" style="text-decoration: none;">天上人间</a><span>'+getDate()+'</span></div><div style="margin-top: 10px;" >'+$("#txtcomcon").val()+'</div><div style="margin-top: 10px;" class="com3"><a href="javascript:" onclick="clickReply(this);" class="reply" style="text-decoration: none;">回复</a></div></div>';
			$(".usercom").css("opacity","0").prepend(appItem).animate({opacity:1},1000);
			$("#txtcomcon").val('');
			$("#txtcomcon").focus();
		}
	});
	
});


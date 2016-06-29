<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="com.cqut.util.JQueryLoader"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	JQueryLoader loader = new JQueryLoader(
			"jqGrid-new,tips,dialog,watermark,common-css");
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<base href="<%=basePath%>" />
<title>查看设备备注</title>
<%=loader.getCssFilesStr()%>
<%=loader.getJsFilesStr()%>
<script type="text/javascript">
	var operatorId = "${operatorId}";
</script>
<link rel="stylesheet" href="css/MonitorEquiement/MonitorEquipement.css">
<style>
.page {
	width: 100%;
	background: #F0F0F0 url('images/MonitorEquipement/dian2.png') repeat-x;
}
</style>
</head>
<body style="overflow-x:hidden">
	<div class="topStyle">
		<div class="topTitle">设备状态监控</div>
		<div class="operateRight operate_area">
			<a href="module/monitorEquipementStatus/MonitorEquipementStatus.jsp"
				style="text-decoration : none;">返回</a>
		</div>
	</div>
	<div class="page">

		<div class="box">
			<ul class="event_year">
			</ul>
			<ul class="event_list">
			</ul>

			<div class="clearfix"></div>
		</div>
	</div>
	<script type="text/javascript"
		src="js/module/monitorEquipementStatus/MonitorEquipemenCheckNote.js"></script>
</body>
</html>

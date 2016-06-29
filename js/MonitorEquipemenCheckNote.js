$(document).ready(
		function() {
			var equipementId = getData();
			$.ajax({
				url : 'MonitorEquipmentStatus_checkEquipementNote.action',
				data : {
					equipementId : equipementId,
				},
				type : 'post',
				dataType : 'json',
				success : function(data) {
					for (var i = 0; i < data.length; i++) {
						if (0 == i) {
							$(".event_year")
									.append(
											"<li class='current'><label for='"
													+ data[i]["year"] + "'>"
													+ data[i]["year"]
													+ "</label></li>");
						} else if (data[i]["year"] != data[i - 1]["year"]) {
							$(".event_year")
									.append(
											"<li><label for='"
													+ data[i]["year"] + "'>"
													+ data[i]["year"]
													+ "</label></li>");
						}
						if ((0 != i && data[i]["year"] != data[i - 1]["year"])
								|| 0 == i) {
							$(".event_list").append(
									"<div class='" + data[i]["year"] + "'>"
											+ "<h3 id='" + data[i]["year"]
											+ "'>" + data[i]["year"] + "</h3>"
											+ "<li><span>" + data[i]["mdhm"]
											+ "</span><p><span>"
											+ data[i]["noteInfo"]
											+ "</span></p></li>");
						} else {
							$("." + data[i]["year"]).append(
									"<li><span>" + data[i]["mdhm"]
											+ "</span><p><span>"
											+ data[i]["noteInfo"]
											+ "</span></p></li>");
						}
					}

					addClick();
				},
				error : function(e) {

				}
			});
		});
// 添加点击事件
function addClick() {
	$('label').click(function() {
		$('.event_year>li').removeClass('current');
		$(this).parent('li').addClass('current');
		var year = $(this).attr('for');
		$('#' + year).parent().prevAll('div').slideUp(800);
		$('#' + year).parent().slideDown(800).nextAll('div').slideDown(800);
	});
}
function getData() {
	var s = window.location.search.substr(1);
	var aryVars = s.split("&");
	var aryPair;
	for (var i = 0; i < aryVars.length; i++) {
		aryPair = aryVars[i].split("=");
	}
	return aryPair[1];
}

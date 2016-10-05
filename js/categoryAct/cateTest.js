
console.log("테스트 ");
var currentURL =  location.href;
console.log("currentURL :", currentURL);
$("ul li a").each(function(k,v){
	console.log("k : ", k, ", v : ", $(v).attr("href"));

	var currentHref = $(v).attr("href");

	if(currentURL.indexOf(currentHref) > -1){
		$(v).closest("li").addClass("on");
	}

});
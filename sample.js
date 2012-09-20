function Winopen(P_Url,width,height,win) { 
	var iTop=(window.screen.height-height)/2; 
	var iLeft=(window.screen.width-width)/2;
	window.open(P_Url,"Win"+win,"resizable=no,width="+width+",height="+height+",top="+iTop+",left="+iLeft+",scrollbars=no");
}

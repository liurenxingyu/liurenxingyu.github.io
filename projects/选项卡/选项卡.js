window.onload=function(){
	var li=document.getElementsByTagName("li");
	var div=document.getElementsByTagName("div");
	for(var i=0;i<li.length;i++){
		li[i].index=i;
		li[i].onclick=function(){
			for(var j=0;j<li.length;j++){
				li[j].className="";
				div[j].className="hide";
			}
			this.className="title";
			div[this.index].className="";
		}
	}
}
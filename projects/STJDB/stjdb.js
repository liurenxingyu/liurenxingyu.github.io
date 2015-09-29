var st = document.getElementById("shitou");
var jd = document.getElementById("jiandao");
var bu = document.getElementById("bu");

var computerResult = document.getElementById("computer_result");
var myResult = document.getElementById("my_result");
var computerWinCount = document.getElementById("computer-win-count");
var myWinCount = document.getElementById("my-win-count");
var tiegame = document.getElementById("tiegame");
var imgs = ["pics/ife_game_task1_shitou.jpg", "pics/ife_game_task1_jiandao.jpg", "pics/ife_game_task1_bu.jpg"]
var result = document.getElementById("result");
var myWord =document.getElementById("my-word");
var computerWord = document.getElementById("computer-word");
var clearNub =0;
var woying = 0;
var comying = 0;
var tie = 0;

var clear = document.getElementById("again");

st.onclick = function(){
	
	myResult.src=imgs[0];
	var suiji = Math.random();
		if (suiji < 0.33) {
			computerResult.src=imgs[0];	
			result.innerHTML="tie";
			tie = tie + 1;
			tiegame.innerHTML=tie;
		} //;这里不能出现分号，否则会出错。
		else if(suiji < 0.67) {
	        computerResult.src=imgs[1];
	        result.innerHTML="win";
	        woying = woying+1;
	        myWinCount.innerHTML= woying;
	        
		}
	    else {
	    	computerResult.src=imgs[2];
	    	result.innerHTML="lost";
	    	comying = comying +1;
	    	computerWinCount.innerHTML=comying;
	    }
	
}

jd.onclick = function(){
	myResult.src=imgs[1];
	var suiji = Math.random();
		if (suiji < 0.33) {
			computerResult.src=imgs[1];	
			result.innerHTML="tie";
			tie = tie + 1;
			tiegame.innerHTML=tie;
		} //;这里不能出现分号，否则会出错。
		else if(suiji < 0.67) {
	        computerResult.src=imgs[2];
	        result.innerHTML="win";
	        woying = woying+1;
	        myWinCount.innerHTML= woying;
	        
		}
	    else {
	    	computerResult.src=imgs[0];
	    	result.innerHTML="lost";
	    	comying = comying +1;
	    	computerWinCount.innerHTML=comying;
	    } 
	myResult.style.visibility="visible";
    computerResult.style.visibility="visible"
    result.style.visibility="visible";        
}

bu.onclick = function(){
	myResult.src=imgs[2];
	var suiji = Math.random();
		if (suiji < 0.33) {
			computerResult.src=imgs[2];	
			result.innerHTML="tie";
			tie = tie + 1;
			tiegame.innerHTML=tie;
		} //;这里不能出现分号，否则会出错。
		else if(suiji < 0.67) {
	        computerResult.src=imgs[0];
	        result.innerHTML="win";
	        woying = woying+1;
	        myWinCount.innerHTML= woying;
	        
		}
	    else {
	    	computerResult.src=imgs[1];
	    	result.innerHTML="lost";
	    	comying = comying +1;
	    	computerWinCount.innerHTML=comying;
	    } 
	myResult.style.visibility="visible";
    computerResult.style.visibility="visible"
    result.style.visibility="visible";        
}

clear.onclick = function clearfun(){
    location.reload();
}
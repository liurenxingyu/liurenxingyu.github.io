function Menu(){
	this.init();
};

Menu.prototype.init = function(){
    var wrap = $('
    	<nav role="navagation" id="global-nav">
    	<ul id="menu-mian-nav" clas="nav top-nav">
    	      <li class="menu-item">home</li>
    	</ul>
    	</nav>')

    this.ref = wrap;
    $('body').append(wrap);
};

Menu.prototype.show = function(){
     this.ref.css('display', 'block'); 
};
Menu.prototype.hide = function(){
     this.ref.css('display', 'none');
};
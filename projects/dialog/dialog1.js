//这是干嘛的呢?
function Dialog(id, title, content){   //用户可以传入数据，进行自定义
	this.id = id;                 //用户传入一个id，然后将其在这里面操作，运用
	this.title = title;
	this.content = content;      //用户传进来的content
     //this.ref这里也可以不用，这里是为了方便阅读，写null是现在还没到wrap，后面再进行重新定义
    this.ref = null;           //要调用show方法，需要找到wrap这个DOM结构，因此，要建一个ref.现在的ref还不确定，后面再定义
    
    this.init();   //调用init函数
}

Dialog.prototype.init = function(){
	//首先创建DOM结构，
	
	var wrap = $('<div id="' + this.id +'" class="dialog"></div>');  //新建一个外层包裹div，+只是一个字符串用来分割
	var headerWrap = $('<div class="header">' + this.title + ' <div class="close">x</div> </div>');//新建一个标题wrap
	var contentWrap = $('<div class="content"></div>');  //建一个内容wrap
	contentWrap.append(this.content);    //括号内的还不懂，用户传进来的content。把它添加到创建的content里面
	 wrap.append(headerWrap);       //把headerWrap和congtentWrap添加进wrap
	 wrap.append(contentWrap);
       
       //为了把DOMshow出来，需要把这个wrap找到，为了方便就这样设，以后函数好用
	 this.ref = wrap;               //ref 是干嘛的？参照的，需要的DOM结构，给后面show，hide函数用的，方便找
                                   //这里的this。ref会替代前面对象里设置的null？
	 //再把Dialog插入body中

	 $('body').append(wrap);         //再把wrap添加进body里

	 var _dialog = this;              //把this设置成dialog，后面用到，后面不能直接用this，就是换个名字而已
	   
	   //在此基础上，选中close，进行事件处理程序                                          
	 $('.dialog .close').on('click', function(e){   //dialog是Dialog对象的名字
	 	_dialog.hide();	            //调用hide函数
	 });
      //绑定关闭事件
	 $(document).on('click', function(e){   //e是干嘛的？形参？这里不能用this，因为this会变成触发源，所以就在前面设置一个
	 	var target = e.target;       //定义一个目标target是最小的目标
        //如果目标的父级对象的长度大于0 ，就是不为空 就返回错误
	 	if($(target).parents('.dialog').length > 0) return false;    //判断事件源，不能是dialog里的任何地方，或button
	 	_dialog.hide();    //执行hide元素
	 });
};

//定义两个函数
Dialog.prototype.show = function(){
	this.ref.css('display', 'block');        //this.ref前面已经定义为了wrap，相当于wrap.css
};  //this.ref.show();同样的效果

Dialog.prototype.hide = function(){
	this.ref.css('display', 'none');     //==this.ref.hide()
};
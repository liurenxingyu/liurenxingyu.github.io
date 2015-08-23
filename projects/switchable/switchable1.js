function Switchable(container, conf){            //定义一个Switchable对象，指定添加一些属性
	var defaultConf = {                             //conf是configure配置
		index: 0,
		width: 800,
		duration: 200,
		autoplay: false,
		interval: 2000
	};

	this.conf = conf || {};

	this.conf = $.extend(defaultConf, this.conf);

	this.currentItemIndex = this.conf.index;
	this.timerId = null;

	this.ref = $(container);
	this.items = this.ref.find('>li');    //将item放入li中
	this.indicators = null;

	this.init();            
}

Switchable.autoTask = function(switchable){
	switchable.timerId = setInterval(function(){
  		switchable.next();
  	}, switchable.conf.interval);            //定义自动化函数
};

Switchable.prototype.init = function(){                  //为对象初始化定义
	var ref = this.ref;

	// 构造包裹层、当前位置指示器 DOM结构
	ref.wrap('<div class="switchable-wrap"></div>')         //在外面建一个wrap包裹
		 .addClass('switchable-container');                   //添加一个属性

	var indicatorWrap = $('<div class="switchable-indicators"></div>');
  ref.after(indicatorWrap);                               //创建一个indicator，并添加在后面

	this.items.addClass('switchable-item')                   //给每一个li添加属性，函数
						.each(function(index, ele){
							indicatorWrap.append('<div data-index="' + index + '" class="switchable-indicator"></div>');
						});                                                //给indicator后添加div

	this.indicators = indicatorWrap.find('.switchable-indicator');  //把indicatorwrap下的switchable-indicator传给indicator

	// 自动设置包裹层的宽高
	$('.switchable-wrap').css({
    width: this.conf.width,            //传入用户自定义的值
    height: ref.height()               //height使用ref的
  });

  // 绑定 "当前位置指示器" 点击事件
  var _switchable = this;
  indicatorWrap.on('click', '.switchable-indicator', function(e){
    if($(this).hasClass('current')) return;             //如果是当前就直接返回

    var itemIndex = _switchable.indicators.index(this);   
    _switchable.go(itemIndex, true);              // 不是当前，就去
  });

  // 自动轮播处理
  var _switchable = this;
  if(this.conf.autoplay){
  	Switchable.autoTask(this);

  	ref.hover(function(){
  		clearInterval(_switchable.timerId);       //鼠标悬停就清除间隔，直接转去哪里
  		_switchable.timerId = null;
  	}, function(){
  		Switchable.autoTask(_switchable);
  	});
  }

	// 切换到默认item
  this.go(this.currentItemIndex);               
};

Switchable.prototype.go = function(index, isClick){       //定义go函数
	var conf = this.conf,
			items = this.items,
			indicators = this.indicators,
			ref = this.ref;

	var newIndex = index;

	if(newIndex < 0){
    newIndex = items.length - 1;                      //-1是干嘛呢？？？？定位到最后一个？？？
  }else if(newIndex > items.length-1){                      //如果超过，就设为0
    newIndex = 0;
  }

  var currentItemIndex = this.currentItemIndex,
      width = conf.width,
      offset = (newIndex - currentItemIndex) * width,           //偏移多少
      opration = newIndex - currentItemIndex > 0 ? '-=' : '+=';      //确定移动方向

  // 让正在进行的动画结束
  ref.stop(true, true);
  if(this.conf.autoplay && isClick){
  	clearInterval(this.timerId);
  	this.timerId = null;
  }

  var _switchable = this;

  if(newIndex - currentItemIndex > 0){
    ref.animate({                                    //向左移    先动画
      left: opration + offset + 'px'                     //再移动
    }, conf.duration, function(){                      //在动画完成后，执行函数，

      var i = currentItemIndex;                         //将当前显示的放在第一位，把dom回移

      while(i != newIndex){
        items = ref.find('.switchable-item');          //找出来，
        item = items.last();                            //选最后一个
        item.after(items.first());                     //放在第一位
        i += 1;                                         //循环
      }

      ref.css('left', 0);                                 //把左边距离设为0       再设0 

      if(_switchable.conf.autoplay && isClick){
      	Switchable.autoTask(_switchable);
      }
    });

  }else{
    var i = currentItemIndex;

    while(i != newIndex){                                         //先移动
      items = ref.find('.switchable-item');
      item = items.first();
      item.before(items.last());
      i -= 1;
    }

    ref.css('left', opration + offset);                              //再设0

    ref.animate({                                                    //再动画 
      left: 0
    }, conf.duration, function(){

    	if(_switchable.conf.autoplay && isClick){
      	Switchable.autoTask(_switchable);
      }

    });
  }

  indicators.removeClass('current')
  					.eq(newIndex).addClass('current');

  this.currentItemIndex = newIndex;        
};
                             
Switchable.prototype.prev = function(){                      //pre函数
	this.go(this.currentItemIndex- 1);
};
                                                                
Switchable.prototype.next = function(isClick){                //next函数
	this.go(this.currentItemIndex + 1, isClick);
};

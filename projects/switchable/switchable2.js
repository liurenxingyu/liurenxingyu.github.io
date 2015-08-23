function Switchable(container, conf){    //container就是#test
      var defaultConf = {
      	index:0,
      	width:800,
      	duration:200,
        autoplay:false,
        interval:2000
      };

      this.conf = conf || {};          //短路
      this.conf = $.extend(defaultConf, this.conf);      //合并用户定义的和默认的

      this.currentItenIndex = this.conf.index;
      this.timerId = null;

      this.ref = $(container);         //就是ul
      this.items = this.ref.find('>li');
      this.indicators = null;

      this.init();

       
    
};

Switchable.prototype.init = function(){
      var ref = this.ref;
      ref.wrap('<div class="switchable-wrap"></div>');
         .addClass('switchable-container');

      var indicatorWrap = $('<div class=="switchable-indicators"></div>');
      ref.after('indicatorWrap');

      this.items.addClass('switchable-item');
                .each(function(index, ele){
                	indicatorWrap.append('<div data-index = "' + index　+ '" class="switchable-indicator"></div>');
                });
      this.indicators = indicatorWrap.find('.switchable-indicator');
      
      $('.switchable-wrap').css({
      	width:this.conf.width;
      	height:ref.height();
      });
  
      var _switchable = this;
      indicatorWrap.on('click', '.switchable-indicator', function(e){       //事件代理
      	if($(this).hasClass('current')) return;

      var itemIndex = _switchable.indicators.index(this);          //.indexthis方法，查询当前位置
      	_switchable.go(itemIndex,true);
      });


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

Switchable.autotask = function(switchable){

};

Switchable.prototype.go = function(index, isClick){
            var conf = this.conf,
                items = this.items,
                indicators = this.indicators,
                ref = this.ref;

            var newIndex = index;

            if(newIndex < 0){
              newIndex = items.length - 1;
            } else if(newIndex > item.length-1){
              newIndex = 0;
            }  
             
            var currentItemIndex = this.currentItemIndex,
                width = conf.width,
                offset = (newIndex - currentItemIndex) * width,
                opration = newIndex - currentItemIndex > 0 ? '-=' : '+=';

            ref.stop(true, true);
            if(this.conf.autoplay && isClick){
              clearInterval(this.timerId);
              this.timerId = null;
            }  


            var _switchable = this;
             if (newIndex - currentItemIndex > 0){
              ref.animate({
                left: opration + offset + 'px'
              }, conf.duration, function(){
                var i = currentItemIndex;
                while(i != newIndex){
                  items = ref.find('.switchable-item');
                  item = items.last();
                  item.after(items.first());
                  i += 1;
                }

                ref.css('left', 0);

                if(_switchable.conf.autoplay && isClick){
                  Switchable.autoTask(_switchable);
                }
              })
             };    
};

Switchable.prototype.pre = function(){

};

Switchable.prototype.next = function(isClick){

};
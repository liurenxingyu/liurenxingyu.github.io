function Dialog(id, title, content){
     this.id = id;
     this.title = title;
     this.content = content;
     
     this.ref = null;
     this.init();
    
}

Dialog.prototype.init = function(){
     //创建DOM结构
     var wrap = $('<div id="' + this.id + '" class="dialog"></div>');
     var headerWrap = $('<div class="header"> ' + this.title + ' <div class="close">x</div></div>');
     var contentWrap = $('<div class="content"></div>');
     contentWrap.append(this.content);
     wrap.append(headerWrap);
     wrap.append(contentWrap);
     
     this.ref = wrap;
     //把dialog添加到body里
     $('body').append(wrap);
     
     var _dialog = this;

     //开始绑定事件
     $('.dialog .close').on('click', function(e){
         _dialog.hide();
     });
     $(document).on('click', function(e){
           var  target = e.target;
     	if($(target).parents('.dialog').length > 0) return false;
     	_dialog.hide();
     })
};





Dialog.prototype.show = function(){
     $('.dialog').slideDown(500, 'swing', function(){
          $('.dialog').css('display', 'block');
     });
    
}
Dialog.prototype.hide = function(){ 
     $('.dialog').hide(500,'linear', function(){
          $('.dialog').css('display', 'none');
     });
	
}
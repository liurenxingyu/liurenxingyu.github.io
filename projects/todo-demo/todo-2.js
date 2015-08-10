function Todo(id){
      this.ref = document.getElementById(id);
	this.itemsWrap =  this.ref.querySelector('.todo-items');
	this.activeNumWrap = this.ref.querySelector('.active-num');
	this.completeWrap = this.ref.querySelector('.complete-wrap');
	this.completeNumWrap = this.ref.querySelector('.complete-num');

	this.items = {};
	this.index = 0;
	this.init();
}

Todo.prototype.init = function(){   //对象初始化工作
   var _todo = this;
   var input = this.ref.querySelector('input');
   input.addEventListener('keydown', function(e){
   	if(e.keyCode !== 13) return;
   	if(this.value.trim() === '') return;
   	_todo.add(this.value);
   	this.value = '';
   }, false);



    this.ref.querySelector('.todo-toggle').addEventListener('click', function(e){
   	var items = _todo.items;
   	if(this.className.indexOf('complete') === -1){
   		    for(id in items){
   			    if(!items[id].isActive) continue;
   			    items[id].switchStatus();
   		}
   		this.className += ' complete';
   	    }else{
   		    for(var id in items){
   			    if(items[id].isActive) continue;
   			    items[id].switchStatus();
   		    }
   		    this.className = this.className.replace(' complete', '');
   	    }
    }, false);
     
    var switchWrap = this.ref.querySelector('.todo-filter');
    var switches = switchWrap.querySelectorAll('.switch');

    switchWrap.addEventListener('click', function(e){
    	var className = e.target.className;

    	if(!className.indexOf('switch') === -1) return;

    	for(var i = switchs.length -1; i >=0; i --){
    		sitches[i].className = switches[i].className.replace(' current', '');
    	}
    	var view = 'all';
    	if(className.indexOf('active') > -1){
    		view ='active';
    	}else if(className.indexOf('complete') > -1){
    		view = 'complete';
    	}

    	_todo.switchView(view);

    	if(e.target.className.indexOf('current') === -1){
    		e.target.className += ' current';
    	}
    }, false); 
    



   	






Todo.prototype.add = function(text){

};

Todo.prototype.remove = function(item-dom){

}；

Todo.prototype.switchView = function(view){

};

function TodoItem(){

};

Todo.prototype.switchstatus = function(){

};



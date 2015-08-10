function Todo(id){              //确定dom父级元素
    this.ref = document.getElementById(id);      //this.ref就指定对象 用document可能会有很多个元素
	this.itemsWrap =  this.ref.querySelector('.todo-items');
	this.activeNumWrap = this.ref.querySelector('.active-num');
	this.completeWrap = this.ref.querySelector('.complete-wrap');
	this.completeNumWrap = this.ref.querySelector('.complete-num');

	this.items = {};
	this.index = 0;

	this.init();
}
Todo.prototype.init = function(){
    var _todo = this;   //把todo当做this存起来，先在外面存起来，然后里面再用。“——”代表私有
    //绑定添加item事件处理程序
	var input = this.ref.querySelector('input');
	input.addEventListener('keydown', function(e){
		//不是回车键，直接返回
		if(e.keyCode !== 13) return;

		// 输入框者内容为空，直接返回
		if(this.value.trim() === '') return;

		_todo.add(this.value);

		this.value = '';
	}, false);

}
Todo.prototype.add = function(text){
     
};
Todo.prototype.remove = function(item_dom){   //item_dom根据dom来。写法不唯一，有很多，

};

Todo.prototype.switchView = function(view){

};


function TodoItem(){    //添加的item都是相同的实例，所以定义一个对象

}

TodoItem.prototype.switchStatus = function(){

};

// 1、对象的拓展
// 1.1 __proto__属性

let c={};
let obj={x:10};
Object.setPrototypeOf(obj,c);
c.y=12;
c.z=14;
console.log(obj.y)//12  查看obj的父亲   obj.__proto__

// 获取对象属性
var keys01=Object.getOwnPropertyNames(obj);
let keys02=Object.keys(obj);
console.log(keys01);// ["x"]
console.log(keys02);





// 1.2   getPrototypeOf();  通过构造函数设置原型。
function Animal(){};
Animal.prototype={
	name:"tom",
	eat:function(){
		console.log("都会吃东西");
	}
}
function Cat(){
	this.voice=function(){
		console.log("猫会发出喵的声音");
	}
}                    //子对象       父对象
Object.setPrototypeOf(Cat.prototype,Animal.prototype);
let cat=new Cat();




// 1.3   Object.create()  //实现继承
function Shape() {
  	this.x = 0;
  	this.y = 0;
}
Shape.prototype.move = function(x, y) {
    	this.x += x;
    	this.y += y;
    	console.info("Shape moved.");
};
function Rectangle() {
  	Shape.call(this); //call super constructor.
}
Rectangle.prototype = Object.create(Shape.prototype);
var rect = new Rectangle();
console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
rect.move(1, 1); //Outputs, "Shape moved."
// 看看rect原型链上是怎么回事？





// 1.4 请求参数合并且 模拟ajax请求与响应,将内容显示页面上
let _common={
	phoneNo:"13688888888",
	sessionKey:"1234567890"
};
let _params={
	startTime:"2017-3-1",
	endTime:"2017-3-1"
};
let vm={
	formatMoney(money){
		return money?money/100+".00":"0.00";
	},
	formatTime(time){
		return [time.slice(0,4),time.slice(4,6),time.slice(6,8)].join("-");
	}
};
function ajax(_params){
	// 返回响应的数据
	return {
		orderNo:"123",
		orderTime:"20170303",
		orderMoney:"100"
	};
}
let response=ajax(Object.assign({},_common,_params));

let _money=vm.formatMoney(response.orderMoney);
let _time=vm.formatTime(response.orderTime);
console.log("金额："+_money);
console.log("时间："+_time);

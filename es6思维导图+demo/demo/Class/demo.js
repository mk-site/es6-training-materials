/*var Foo = function() {}  //class Foo{}
Foo.__proto__ === Function.prototype // true
var a = new Foo();*/

// ES5写法：
/*function Flyer(fname, speed) {
	this.fname = fname;
	this.speed = speed;
	if (!Flyer.prototype.fly) {
		Flyer.prototype.fly = function() {
			console.log(this.fname + " 以时速: " + this.speed + " 飞行");
		}
	}
}
function Plane(fname, speed, capacity) {
	Flyer.call(this, fname, speed);
	this.capacity = capacity;
	if (!Plane.prototype.fly) {
		Plane.prototype.fly = function() {
			console.log(this.fname + "搭载 " + this.capacity + "人 以时速: " + this.speed + " 飞行");
		}
	}
	Object.setPrototypeOf(Plane.prototype,Flyer.prototype);
}
var A380 = new Plane("A380", 1800, 555);
A380.fly();*/




// ES6写法：
class Flyer {
	constructor(fname, speed) {
		this.fname = fname;
		this.speed = speed;
	}
	fly() {
		console.log(this.fname + " 以时速: " + this.speed + " 飞行");
	}
}
class Plane extends Flyer{
	constructor(fname, speed,capacity) {
		super(fname,speed);
		this.capacity = capacity;
	}
	fly() {
		console.log(this.fname + "搭载 " + this.capacity + "人 以时速: " + this.speed + " 飞行");
	}
}

var A380=new Plane("A380",100,50);



// 1、class 的继承
class Point{
	constructor(x,y){
		this.x=x;   //此处的this代码实例的对象
		this.y=y;
	}
	toString(){
		return '('+this.x+','+this.y+')';
	}
}
class ColorPoint extends Point{
	constructor(x,y,color){
		super(x,y);
		this.color=color;
	}
	toString(){
		return this.color+" "+super.toString();//调用父类的toString()方法
	}
}
let p1=new Point(17,8);
let p2=new ColorPoint(35,8,"red");






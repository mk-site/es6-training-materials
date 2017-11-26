
// 1、函数的拓展
// 1.0参数默认值的  ES5的基本用法
function log(x,y){
	y=y||"world";
	console.log(x,y);
}
log("hello","china");
log("hello","");  
// 缺点：第二次调用log方法 参数y等于空字符串，结果被改为默认值了。

// 1.1 ES6的默认赋值基本用法
function Point(x=1,y=2){
	this.x=x;
	this.y=y;
}
var point=new Point();
// console.log(point.x);


// 1.3  与解构赋值 默认值结合使用
function foo({x,y=5}){
	console.log(x,y);
}

// foo({});
// foo({x:1});
// foo({x:1,y:2});
// foo();  //报错

// 区别解构赋值  *****难点*****
function m1({x=0,y=1}={}){
	return [x,y];
}
function m2({x,y}={x:0,y:1}){
	return [x,y];
}
// m1();
// m2();//是否相同，值是多少？？？

// m1({x:3,y:8});
// m2({x:3,y:8});


// m1({});
// m2({});//发生什么了？？？


// 区别：m1函数参数的默认值是空对象，设置了对象的解构赋值的默认值
// 区别：m2函数参数的默认值是一个有具体属性的函数，但是没有设置对象解构赋值的默认值



// 1.4  扩展运算符

// rest参数和扩展运算符  使用情况：
function add(...values){
	let sum=0;
	for(let val of values){
		sum+=val;
	}
	return sum;
}
console.log(add(1,2,3));  //???




function add2(x,y){
	return x+y;
}
var numbers=[3,5];
console.log(add2(...numbers));  //???





function add3(...numbers){   //rest参数，把数组当成是一个整体看待
	console.log(numbers); //???
}
add3(numbers,6);




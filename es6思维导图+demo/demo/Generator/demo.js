
// 1、Generator函数
// 1.1  for循环不能改成forEach循环，因为普通函数不能使用yield语句

let arr=[1,[[2,3],4],[5,6]];
let flat=function* (a){
	let length=a.length;
	for(let i=0;i<length;i++){
		let item=a[i];
		if(typeof item !=='number'){
			yield* flat(item);
		}else{
			yield item;
		}
	}
};
for(let f of flat(arr)){
	console.log(f);
}


// 1.2  next方法的参数,调用next()方法时加入参数

function* foo(x){
	let y=2*(yield (x+1));
	let z=yield(y/3);
	return (x+y+z);
}

let a=foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

let b=foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(13));

// 步骤：
// 1. x+1的值是6
// 2. 上一次调用next方法：yield (x=1)返回的值是12，即返回值是：2*12/3=8
// 3. 第二次调用next方法：yield(y/3)的返回值是13;即 x=5,y=24,z=13

// yield*  语句
console.log("*************");


function* foo(){
	yield 'a';
	yield 'b';
}
function* bar(){
	yield 'x';
	yield* foo();
	yield 'y';
}
var g=bar();
// 等价于
/*function* bar2(){
	yield 'x';
	yield 'a';
	yield 'b';
	yield 'y';
}
var g2=bar2();
*/



console.log("***********");

// 

function* concat(it1,it2){
	yield* it1;
	yield* it2;
}
// 等价于
function* concat2(it1,it2){
	for(let value of it1){
		yield value;
	}
	for(let value of it2){
		yield value;
	}
}


console.log("*****Generator函数中的this*************")
// Generator函数中的this
//1、 原型链
function* g1(){}
g1.prototype.hello=function(){
	return 'hello';
}
let obj2=g1();
console.log(obj2 instanceof g1);//true
console.log(obj2.hello());//"hello"






//2、 this 

function* F(){
	yield this.x=2;
	yield this.y=3;
}
// console.log('next' in (new F()));
// new F();

let obj3={};
let f2=F.bind(obj3)();
console.log(obj3);
// f2.next();



// 备注：生成一个空对象obj3,使用bind方法绑定Generator函数内部的this，即this指向obj3



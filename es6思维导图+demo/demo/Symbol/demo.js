
// 1、原始数据类型Symbol

// 1.1作为属性名的Symbol
// 案例一：
var symbol01=Symbol();
var a={};
a.symbol01="hello";
console.log(a[symbol01]);  //
console.log(a["symbol01"]);  //

// 案例二：
let myObject={};
let privateProperty1 = Symbol.for( 'firstName' );
let privateProperty2 = Symbol.for( 'firstName' );
 
myObject[ privateProperty1 ] = 'Dave';
myObject[ privateProperty2 ] = 'Tom';
console.log( myObject[ privateProperty1 ] );


// 1.2消除字符串  三角形面积计算  有什么区别？？？？

// 写法1：
let getArea2=function(shape,options){
	let area=0;
	switch(shape){
		case "Triangle":
		 area=.5*options.width*options.height;
		break;
	}
	return area;
}
let area2=getArea2("Triangle",{width:100,height:100});
console.log(area2);

// 写法2：
// let shapeType={
// 	triangle:"Triangle"
// };
let shapeType={
	triangle:Symbol()
}
let getArea=function(shape,options){
	let area=0;
	switch(shape){
		case shapeType.triangle:
		 area=.5*options.width*options.height;
		break;
	}
	return area;
}
let area=getArea(shapeType.triangle,{width:100,height:100});
console.log(area);



// 以上的写法有什么好处：？？？

// 解决函数方法里面字符串与getArea函数的强耦合
// shapeType.triangle 很适合改用Symbol值，值唯一。
// let shapeType={
// 	triangle:Symbol()
// }

// 案例:1.3  对外提供的方式，无法访问，需要的作用域内有效
// 设置数据，且如果key值相同，value值为数字，（旧数值+新数值）*2
function fun(){
	var _mysymbol=Symbol("multi");
	var _share={
		data:{},
		set:function(name,val){
			if(this.data[name]&&(typeof val==="number")){
				this[_mysymbol](name,val);
			}else{
				this.data[name]=val;
			}
		},
		get:function(name){
			return this.data[name];
		},
		[_mysymbol]:function(name,val){
			this.data[name]=(this.data[name]+val)*2;
		}

	};
	return  _share;
}

var share=fun();
share.set("a",1);
share.set("a",2);
									// share.set("a",3);
console.log(share.get("a"));//值是：？


// share["Symbol(multi)"]("a",3);
// 说明了什么？


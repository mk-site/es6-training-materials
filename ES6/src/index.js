console.log("------------start -----------");

// 案例一：
function testable(target){
	target.isTestbale=true;
}
@testable
class MyTestableClass{}
console.log(MyTestableClass.isTestbale);

// 案例二：

function mixins(...list){
	return function(target){
		console.log("aaaaa");
		Object.assign(target.prototype,...list);
	}
}

const Foo={
	foo(){
		console.log('foo');
	}
}
@mixins(Foo)
class MyClass{}
let obj=new MyClass();
obj.foo();

// 方法的修饰
function readonly(target,name,descriptor){
	descriptor.writable=false;
	return descriptor;
}
class Person{
	constructor(first){
		this.first=first;
	}
	@readonly
   name(){
		return `名字:${this.first}`;
	}
}
let person=new Person("xing");
console.log(person.name());




console.log("-------end-----------------");



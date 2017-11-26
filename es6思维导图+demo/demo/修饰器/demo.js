
// 1、修饰器
function testable(target){
	target.isTestbale=true;
}
@testable
class MyTestableClass{}
console.log(MyTestableClass.isTestbale);//true


function mixins(...list){
	return function(target){
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



// 1、export
// import {firstName,lastName,year,fooName} from './export';
// console.log(firstName+"__"+lastName+"__"+year);
// fooName();



// 2.import  as可重命名
// import {fooName as f} from './export';
// f();




// 3、whole.js整体加载
/*import * as foo from './whole';
console.log(foo);
console.log(foo.aa(11));
console.log(foo.bb(11));*/



// 4.export default命令
// 4.1
/*import fn1 from './export_default';
console.log("1"+fn1());

//4.2 任意取名字
import {default as fn2} from './export_default';
console.log("2"+fn2());

//4.3 可同时输入默认方法和其他变量
import fn3,{fun} from './export_default';
console.log("3"+fn3());
console.log(fun());*/



// 5 模块的继承
// import * as cc from './extends';
// console.log(cc);
// console.log(cc.default(111));

// 6 ES6模块加载的实质

/*import {counter,incCounter} from './counter';

console.log(counter);
incCounter();
console.log(counter);*/

// 如果重新赋值，counter=7,会报错。



// 7 class的模块
import {Car} from './car';
let car =new Car(10,20);

console.log(car.method());
console.log(111123);


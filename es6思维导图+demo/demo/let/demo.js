
//一、 块级作用域：可任意嵌套  如：多个{}
       //内层作用域可定义外层作用域同名变量
{{
    let c=1;
    console.log("c:"+c);
    {
        let c=2;
        console.log("c:"+c);
    }
}}
// 写法变换： 有块级作用域更好
//ES5:
(function () {
  var tmp = 1;
}());

//ES6: 块级作用域写法
{
  let tmp = 1;
}




// 二、不存在变量提升
/*let a=1;
 (function (){
   a=2; //a is not defined
   let a;
   console.log(a);
 }());*/



// 1.在ES6  中函数写法：
// 函数声明语句
{
  let a = 'secret';
  function f1() {
    return a;
  }
}

// 函数表达式
{
  let a = 'secret2';
  let f1 = function () {
    return a;
  };
  console.log(f1());
}

/*比较：var 和 let 区别*/
// 区别一：1.let不存在变量提升

function fun(){
  let n=5;
  if(true){
    let n=10;
  }
  console.log("n:"+n);
}
fun();



// 区别二：2.在条件语句 循环语句的区别
// ES5写法：
function fun1(){
    var a = [];
    var i;
    for ( i= 0; i < 10; i++) {
        a[i] = function() {
            console.log("i1:"+i);
        };
    }
    a[6]();
}
fun1();
// ES6写法：
function fun2() {
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function() {
            console.log("i2："+i);
        };
    }
    a[6](); 
}
fun2();







// 备注：fun1:每次循环 新i值会覆盖上次循环的i值  
//       fun2:let定义的i只在本轮循环有效

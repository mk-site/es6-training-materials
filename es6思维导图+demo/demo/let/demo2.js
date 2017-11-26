// for..in  forEach  for..of三个循环的比较区别

// for..in
// 问题：for...in不仅遍历数组键名，还会遍历手动添加的其他键，甚至包括原型链上的键
var arr=['a','b','c'];
//arr.foo="d";
for(let a in arr){
  console.log("key:"+a);
}

// forEach
//问题：无法中途跳出forEach循环，break命令或者return命令都不能奏效
arr.forEach(function(value){
	if(value==="a"){
		return;
	}
  console.log("value:"+value);
});

// for..of循环  新es6语法多处隐式的调用
for(let value of arr){
  console.log("forOf1:"+value);
}

// 使用break跳出循环
for(let value of arr){
  if(value=="b"){
    break;
  }
  console.log("forOf2:"+value);
}
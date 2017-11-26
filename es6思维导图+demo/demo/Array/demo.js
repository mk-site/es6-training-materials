
// 1、数组

// 练习一：Array.from
const toArray=(()=>
	Array.from?Array.from:obj=>[].slice.call(obj)
)();
let arrLike={
	'0':'a',
	'1':'b',
	'2':'c',
    length:3
};
// 换一种写法
const toArray2=(function(obj){
	return Array.from?Array.from:function(obj){
		return [].slice.call(obj);
	}
})();
console.log(toArray(arrLike));
console.log(toArray2(arrLike));

// 练习二：数组中布尔值转换  Array.from
var arr=Array.from([1,,2,,3],n=>n||0);
console.log(arr);



//数组的 entries()方法  结合for...of循环

/*for(let elem of ['a','b'].values()){
	console.log("____"+elem);
}*/

// ['a','b'].entries() 数组的iterator接口
for(let [index,elem] of ['a','b'].entries()){
	console.log(index+"____"+elem);
}
// 例：[...['a','b'].entries()]   //通过拓展运算符来看一下,与 [index,elem] 一一对应



// 与字符串结合，比较大小，交换，类数组对象。

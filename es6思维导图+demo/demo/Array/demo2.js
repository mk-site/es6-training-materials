// 案例一：

// 如何判断数组中的每一行一个元素都不为0
// 有为0，返回false，都不为0，返回true。

// ES6写法：
let arr = [
	[2, 4, 2, 4],
	[0, 4, 2, 2],
	[4, 4, 2, 2],
	[2, 0, 2, 8]
];
function isFull(arr) {
	// console.log(arr.keys());
	for (let val of arr.keys()) {
		for (let i of arr[val].keys()) {
			if (arr[val][i] == 0) {
				return false;
			}
		}
	}
	return true;
}
console.log("ES6写法：是否满" + isFull(arr));


// ES5写法：
function isFull2(data) {
	for (var r = 0; r < 4; r++) {
		for (var c = 0; c < 4; c++) {
			if (data[r][c] == 0) {
				return false;
			}
		}
	}
	return true;
}
console.log("ES5写法：是否满"+isFull2(arr));


// 案例二：获取页面li的值，
// 1.找到内容为空的li
// 2.倒序排序打印出来字符串
function dealLi(){
	let arr=Array.from(arguments);
	console.log(arr);
	let valArr=[];
	for(let val of arr[0]){
		valArr.push(val.innerHTML);
	}
	var index=valArr.findIndex((n)=>n==="");
	console.log("内容为空的li为第几个："+(index+1));
	console.log(valArr.reverse().join(""));
}
dealLi(document.getElementsByTagName("li"));







// 输入值：values  arr=[...values];  arr[0]去掉[0]
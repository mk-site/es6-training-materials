// 1、this
// 例一：
var b = 100;
(function() {
	var b = 99;
	console.log(this.b);
})();


// 例二：
var a = 2;
function fun() {
	console.log(this.a);
}
var o = {
	a: 3,
	fun: fun
};
var p = {
	a: 4
}; 
o.fun(); //?  3
(p.fun = o.fun)(); //?  2
p.fun(); //?  4
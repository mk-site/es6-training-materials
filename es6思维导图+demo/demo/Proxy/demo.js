// 1、Proxy 拦截器
// 1.1 get

let person = {
	name: "小明"
};
let proxy = new Proxy(person, {
	get: function(target, proKey) {
		if (proKey in target) {
			console.log(1111);
			return target[proKey];
		} else {
			return "目标对象没有此属性" + proKey;
		}
	}
});
console.log(proxy.name);
console.log(proxy.a);



// 1.2 set

let validator = {
	set: function(obj, prop, value) {  //obj指向的目标对象
		if (prop === "age") {
			if (value > 200) {
				console.log("超过年龄范围");
				return;
			} else {
				obj[prop] = value;
			}
		}
	}
}
let person2 = new Proxy({}, validator);
person2.age = 100;
console.log(person2.age);
person2.age = 210;
console.log(person2.age);


// 案例2：阻止对外提供访问权限，可以对外部访问进行拦截不合法的操作
// set和get结合使用：对数据的设置和获取进行规范化；

function fun() {
	let shareData={};  //共享数据
	let valid = {
		get: function(shareData, proKey) {
			if(proKey.indexOf("data_")===0 || proKey.indexOf("ajax_")===0){
				if(shareData[proKey]){
					return shareData[proKey];
				}else{
					return "null";
				}
			}else{
				console.log("格式不正确，不允许获取数据");
			}
		},
		set: function(shareData, proKey, value) {
			// 格式正确才会对共享数据进行设置，否则，不设置
			if(proKey.indexOf("data_")===0 || proKey.indexOf("ajax_")===0){
				shareData[proKey]=value;
				console.log(JSON.stringify(shareData));
			}else{
				console.log("拦截了数据设置");
			}
		}
	};
	var proxy = new Proxy(shareData,valid);
	return proxy;
}
var share=fun();
share.data_city={cityName:"上海"};
share.d_city={cityName:"北京"};  //已经拦截了数据设置

console.log(JSON.stringify(share.data_city));






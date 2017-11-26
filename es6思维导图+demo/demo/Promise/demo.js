// 1、Promise对象
// 1.1 异步加载图片的例子

function loadImageAsync(url) {
	return new Promise(function(resolve, reject) {
		let image = new Image();
		image.onload = function() {
			console.log(image);
			resolve(image);
		};
		image.onerror = function() {
			reject(new Error("不能加载图片，地址是" + url));
		};
		image.src = url;
	});
}
let promise = loadImageAsync("bestpay.png");
promise.then(function(img) {
	console.log(img);
}, function(err) {
	console.log(err);
});


//1.2 ES5封装ajax例子：账单项目

// 原生封装ajax例子 使用ES6
let getJSON = function(url) {
		let promise = new Promise(function(resolve, reject) {
			let xhr;
			//step1:兼容性创建对象
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else {
				xhr = new ActiveXObject('Microsoft.XMLHTTP');
			}
			//step4: 接收响应
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if (xhr.status >= 200 && xhr.status < 300) {
						resolve(this.response);
					} else {
						// reject(this.status);
						reject(this.statusText);
					}
				}
			};
			//step2:建立连接
			xhr.open("GET", url);
			xhr.responseType = "json";
			xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
			// step:3 发送   
			xhr.send(null); //发送数据：如果是GET请求，为null，如果为POST请求，null改为JSON.Stringify(data);
		});
		return promise;
	}
	// 1个then方式
	/*getJSON("city.json").then(function(json) {
		console.log("内容" + JSON.stringify(json));
	}, function(error) {
		console.log("出错了：" + error);
	});*/


// 2个then函数，链式调用
// 不好的写法
getJSON("city.json").then(function(result) {
	if (result.success) {
		// 此处处理数据后
		// throw new Error("test");
		console.log("11111:"+JSON.stringify(result));
		return getJSON("queryOrder.json");
	}
}).then(function(data) {
	console.log(JSON.stringify(data));
}).catch(function(err) {
	console.log(err);
});

// 好的写法.then()函数只写Resolve状态的回调函数。.catch()方法捕捉抛出错误的回调函数。
getJSON("city.json").then(function(result) {
	if (result.success) {
		// 此处处理数据后
		return getJSON("queryOrder.json");
	}
}).then(function(data) {
	console.log(JSON.stringify(data));
}).catch(function(err) {
	console.log(err);
});


// 1.3 Promise与Generator函数结合使用

function getFoo() {
	return new Promise(function(resolve, reject) {
		resolve('foo');
	});
}
let g=function* () {
	try {
		let foo = yield getFoo();
		console.log(foo);
	} catch (e) {
		console.log(e);
	}
}
function run(generator) {
	let it = generator();
	function go(result) {
		console.log(result);
		if (result.done) {
			console.log(result.value);
			return result.value;
		}
		return result.value.then(function(value) {
			return go(it.next(value));
		}, function(error) {
			return go(it.throw(error));
		})
	}

	go(it.next());
}
run(g);






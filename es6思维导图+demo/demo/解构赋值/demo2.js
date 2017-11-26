// 2、对象的解构赋值：

let n = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let { loc: { start: { line } } } = n;
console.log(line);
// console.log(loc);  输出loc呢？？？？
// 只有line是变量，loc和start都是模式，不会被赋值


// 例2:

let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
console.log(obj); //输出什么？
console.log(arr);




// 3：函数参数解构赋值：
function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}
console.log("函数参数解构赋值");
console.log(move({ x: 3, y: 5 }));
console.log(move({ x: 3 }));
console.log(move({}));
console.log(move());


function move2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
// console.log("函数参数解构赋值");
console.log(move2({ x: 3, y: 5 }));
console.log(move2({ x: 3 }));
console.log(move2({}));
console.log(move2());

// 函数move2的参数指定默认值，不是为变量x和y指定默认值

// 4. 函数参数默认值
/*$.ajax(url, { async = true, beforeSend = function() {}, cache = true, complete = function() {}, crossDomain = false, global = true }) {
    //具体操作... var a=c || "1";
};*/

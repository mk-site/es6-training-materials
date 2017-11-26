// 1、解构赋值
// 数组的结构赋值


let [x1=1,y1=x1]=[];
console.log("x1="+x1+" __y1="+y1);

let [x2=1,y2=x2]=[2];
console.log("x2="+x2+" __y2="+y2);

let [x3=1,y3=x3]=[1,2];//
console.log("x3="+x3+" __y3="+y3);

let [x4,y4="b"]=['a',undefined];
console.log("x4="+x4+" __y4="+y4);

let [x5=y5,y5=1]=[2];
console.log("x5="+x5+" __y5="+y5);

// let [x=y,y=1]=[];
// console.log("6__"+x+":"+y);








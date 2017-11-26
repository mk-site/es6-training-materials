
// 1、Iterator接口
// 1.1  模拟Iterator接口

let makeInterator=function(arr){
	let nextIndex=0;
	return {
		next:function(){
			return nextIndex<arr.length?{value:arr[nextIndex++],done:false}:{value:undefined,done:true};
		}
	};
}
let it=makeInterator(['a','b']);
// it.next();
// it.next();
// it.next();

// 1.2  为对象添加Iterator接口
let obj={
	data:['hello','world'],
	[Symbol.iterator](){
		const self=this;
		let index=0;
		return {
			next(){
				if(index<self.data.length){
					return {value:self.data[index++],done:false};
				}else{
					return {value:undefined,done:false};
				}
			}
		};
	}
};

for(let i of obj){
	if(i){
		console.log(i);
	}else{
		break;
	}
	
}



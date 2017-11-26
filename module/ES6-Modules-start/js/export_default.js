
export function fun(){
	return "fun函数";
}

export default function(){
	return "default命令";
}

// 或者写成：
/*let foo =function(){
	return "default命令";
}
export default foo;*/


// 如果只是把fun一个当做默认输出,  export {fun as default};

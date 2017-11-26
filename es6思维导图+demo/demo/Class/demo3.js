// 子类和超类


class SuperType{
	constructor(money=""){
		this.money=money;
	}
	formatMoney(money){
		if(typeof money === "number"){
			retrun (money/100) +"";
		}else{
			return "";
		}
	}
	method(){
		console.log();
	}
}



class SubType extends SuperType{
	constructor(name){
		super();
		this.name=name;
	}
	// 拦截prop属性的设置和获取
	get prop(){
		console.log("获取prop属性值：");
		return this.name;
	}
	set prop(value){
		console.log("设置了prop属性的值为：");
		this.name=value;
	}

}


let subType=new SubType("小明");


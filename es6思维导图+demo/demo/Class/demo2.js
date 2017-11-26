
// 学生系统
// 祖父       房子
// 父母亲     money，义务
// 儿子、女儿 money
class Grandfather{
	constructor(houseSize="100"){
		this.houseSize=houseSize;
	}
	gethouseSize(){
		return this.houseSize;
	}
}
class Parents extends Grandfather{
	constructor(money="10000",houseSize,car="BMW"){
		super(houseSize);
		this.money=money;
		this.car=car;
	}
	getParentsMoney(){
		console.log("拿到父母的钱"+this.money);
	}
	parentsMethod(){
		console.log("父母抚养了我");
	}
}
class Son extends Parents{
	constructor(sex,name){
		super();
		this.sex=sex;
		this.name=name;
	}
}
let son=new Son("男","小明");


class Dauther extends Parents{
	constructor(sex,name){
		super();
		this.sex=sex;
		this.name=name;
	}
}
let dauther=new Dauther("女","小雪");










// 1、Map转为JSON
// 1.1 键名是字符串  转为对象JSON
function mapToObj(map){
  let obj=Object.create(null);
	for(let [k,v] of map){
		obj[k]=v;
	}
	return obj;
}
function mapToArrayJson1(map){
	return JSON.stringify(mapToObj(map));
}
let myMap1=new Map().set('yes',true).set('no',false);
console.log(mapToArrayJson1(myMap1));




// 1.2键名有非字符串  转为数组JSON
function mapToArrayJson2(map){
	return JSON.stringify([...map]);
}
let myMap2=new Map().set(true,7).set({foo:3},['abc']);
console.log(mapToArrayJson2(myMap2));



// 2、JSON转为Map
// 2.1 JSON的键名是字符串 对象形式的字符串
function objToMap(obj){
    let map=new Map();
	for(let k of Object.keys(obj)){
		map.set(k,obj[k]);
	}
	return map;
}
function jsonToStrMap(jsonStr){
	return objToMap(JSON.parse(jsonStr));
}
console.log(jsonToStrMap('{"yes":true,"no":false}'));


// 2.2 JSON是数组形式的字符串


function jsonToMap(jsonStr){
	return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));//数组形式可以直接转为Map
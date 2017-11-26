let firstName="A";
let lastName="B";
let year="2017";
function foo(){
	console.log("foo");
}

export {firstName,lastName,year,foo as fooName,foo as fooNewName};

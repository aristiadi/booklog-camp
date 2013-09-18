(function(){
	
	var base = 5; //ini jadi private, karena pake crougure (ini apa yak)

	function square (argument) {
		base = base * base;
	}

	function getBase(){
		return base;
	}

	return {
		getBase: getBase
	}

}) (); //close

console.log(MyModule.getBase());
console.log(MyModule.square(5));


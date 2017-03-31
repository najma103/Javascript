/*1. **SumDouble** Given two int values, return their sum. Unless the two values are the same, then return double their sum.*/

		/*	sumDouble(1, 2) → 3
			sumDouble(3, 2) → 5
			sumDouble(2, 2) → 4*/
		
		
window.onload = function() { 
	
	function sumDouble(x, y) {
		// do logic here
		// return result;
		if(x === y)
		{
			return x * 2;
		}
		return x + y;
	}
	console.log(sumDouble(2, 2));
	console.log(sumDouble(3, 2));
	console.log(sumDouble(1, 2));
};
		
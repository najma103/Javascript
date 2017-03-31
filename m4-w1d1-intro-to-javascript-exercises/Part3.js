/*3. **LastDigit** Given two non-negative int values, return true if they have the same last digit, such as with 27 and 57.

		lastDigit(7, 17) → true
		lastDigit(6, 17) → false
		lastDigit(3, 113) → true
*/

window.onload = function(){
	function lastDigit(num1, num2){
		var lastDigitOfNum1 = num1.toString().split('').pop();
		var lastDigitOfNum2 = num2.toString().split('').pop();
		if(lastDigitOfNum1 == lastDigitOfNum2){
			return true;
		}
		else {
			return false;
		}
		
	}
	console.log(lastDigit(7, 17));
	console.log(lastDigit(6, 17));
	console.log(lastDigit(3, 113));
};
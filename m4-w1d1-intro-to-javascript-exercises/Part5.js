/*5. **MiddleThree** Given a string of odd length, return the string length 3 from its middle, 
		so "Candy" yields "and". The string length will be at least 3.

		middleThree("Candy") → "and"
		middleThree("and") → "and"
		middleThree("solving") → "lvi"
*/
window.onload = function(){
	function middleThree(str){
		if(str.Length > 2){
			return str.substring(1,3);
		}
	}
	console.log(middleThree("Candy"));
	console.log(middleThree("and"));
	console.log(middleThree("solving"));
};


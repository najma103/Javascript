/*4. **SeeColor** Given a string, if the string begins with "red" or "blue"
		return that color string, otherwise return the empty string.

		seeColor("redxx") → "red"
		seeColor("xxred") → ""
		seeColor("blueTimes") → "blue"
*/
window.onload = function(){
	function seeColor(str){
		if(str.startsWith("red")){
			return "red";
		} else if (str.startsWith("blue")){
			return "blue";
		} else {
			return " ";
		}

	}
	console.log(seeColor("yellowblue"));
	console.log(seeColor("redxx"));
	console.log(seeColor("xxred"));
	console.log(seeColor("blueTimes"));
	
};
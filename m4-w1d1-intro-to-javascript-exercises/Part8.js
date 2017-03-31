/*8. **MakeMiddle** Write a function that given an array of ints of even length, 
		returns a new array length 2 containing the middle two elements from the original array.
		If the original array length is not even, or at least 2 elements in length, return an empty array.*/

window.onload = function(){
		
	function makeMiddle(arr){
		var newArray = [];
		if((arr.length > 2) && (arr.length % 2 === 0)){
			var mid = (arr.length / 2);
			newArray.push(arr[mid - 1]);
			newArray.push(arr[mid]);
			return newArray;
				
		}
		else {
			return arr;
		}
	}
	makeMiddle([1, 2, 3, 4]) /* → [2, 3]*/
	makeMiddle([7, 1, 2, 3, 4, 9]) /* → [2, 3]*/
	makeMiddle([1, 2]) /*→ [1, 2]*/
		
	console.log(makeMiddle([1, 2, 3, 4]));
	console.log(makeMiddle([7, 1, 2, 3, 4, 9]));
	console.log(makeMiddle([1, 2]));
		
};
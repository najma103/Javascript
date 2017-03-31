/*15. **ReverseArray** Write an function that accepts an array of integer values, 
		and display them in the reverse order they appeared in the array.
		One obvious solution is to simply loop through the integer array in reserve order,
		but see if you can come up with an alternative.

		reverseArray([1, 99, 43, 2, 55, 78, 99, 2345, 438, 2, 99, 107]) → 
		1 99 43 2 55 78 2345 438 107
*/
window.onload = function(){
	function reverseArray(arr){
		console.log(arr);
		arr.reverse();
		for(i = 0; i < arr.length; i++ ){
			console.log(arr[i]);
		}
	}
	reverseArray([1, 99, 43, 2, 55, 78, 99, 2345, 438, 2, 99, 107]);
};
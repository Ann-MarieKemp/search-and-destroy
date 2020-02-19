'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if(array.length === 1 && array[0] === target){
		return true;
	}else if(array.length === 1 && array[0] !== target){
			return false;
	}
	let midpt = Math.floor(array.length / 2);
	const left = array.slice(0, midpt);
	const right = array.slice(midpt);
	if(target < array[midpt]){
		return binarySearch(left, target);
	}else{
		return binarySearch(right, target);
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

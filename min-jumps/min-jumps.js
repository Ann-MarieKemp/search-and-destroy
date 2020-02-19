'use strict';

// Complete this algo
const minJumps = arr => {

  let counter = 0;
  if(arr[0] > arr.length){
    return 1;
  }
  findNext();


  function findNext(index = 0){
    let currIdx = arr[index]
    if(index >= arr.length){
      counter++;
      return counter;
    }
    else if( currIdx >= ((arr.length - 1) - index)){
      counter ++;
      return counter;
    }else{
      let miniArr = [];
      for(let i = index + 1; i <= (index + arr[index]); i++){
        miniArr.push(arr[i]);
      }
      counter ++;
      let jumpedTo = Math.max(...miniArr);
      index = arr.indexOf(jumpedTo);
       return counter + findNext(index);
    }
  }
  return counter;
};
minJumps([2,4,1,1,2,3,7,1,1,3]);

module.exports = minJumps

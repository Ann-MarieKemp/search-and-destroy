'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    const newObj = {}

    let currentNode = linkedlist.head
    while (currentNode.next) {
        if (!newObj[currentNode.value]) {
            newObj[currentNode.value] = currentNode.value
            currentNode = currentNode.next
        } else {
            return true
        }
    }
    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
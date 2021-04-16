const sortingSolutions = require("./sortingSolutions");
const Tree = require("./binarySearchTree");

(()=>{
    const array = [7, 8, 2, 9, 1, 0, 3];

    console.log( sortingSolutions.selectionSearch(array) );

    // let tree1 = new Tree();

    // for(let i=0; i < array.length; i++){
    //     tree1.insert( array[i] );
    // }

    // tree1.describe();
    
    console.log( sortingSolutions.binarySearch(array, 1) )
})()
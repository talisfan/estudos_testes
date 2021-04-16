module.exports = class Tree{

    root;

    insert(data){
        const newNode = new Node(data);

        if(!this.root){
            this.root = newNode;

        }else{
            let current = this.root;
            let parent;

            while(true){

                parent = current;

                if(data < current.key){

                    current = current.leftChild;

                    if(!current){
                        parent.leftChild = newNode;
                        return;
                    }          

                }else if(data > current.key){

                    current = current.rightChild;

                    if(!current){
                        parent.rightChild = newNode;
                        return;
                    }

                }else{
                    current.count++;
                    return;
                }
            }
        }
    }

    remove(data){
        let current = this.root;
        let parent;

        while(true){

            parent = current;

            if(data < current.key){

                current = current.leftChild;          

            }else if(data > current.key){

                current = current.rightChild;

            }else{
                if(current.count === 1 && !current.leftChild && !current.rightChild){

                    current = null;
                    return;

                }else if(current.count > 1){

                    current.count--;
                    return;
                }
            }
        }

    }

    describe(node = null){

        if(!node){
            node = this.root;
        }

        if(node.leftChild){
            this.describe(node.leftChild);
        }

        console.log(node.key + " ");

        if(node.rightChild){
            this.describe(node.rightChild);
        }
    }
}

class Node{    
    key;
    leftChild;
    rightChild;
    count = 1;

    constructor(key){         
        this.key = key;
    }
}
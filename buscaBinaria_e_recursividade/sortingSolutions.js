// Odenação do maior para o menor
exports.selectionSearch = (array)=>{
    
    for(let i =0; i < array.length; i++){

        // indice do menor dado
        let indexMin = i;

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
        }

        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }

    return array;
}

// array deve estar ordenado
exports.binarySearch = (array, item, begin = 0, end = array.length - 1)=>{    

    if(begin <= end){
        let mid = ((begin + end) / 2)|0; //divisao inteira

        if(array[mid] === item){
            return mid;
        }else if(item < array[mid]){
            this.binarySearch(array, item, begin, end - mid);
        }else{
            this.binarySearch(array, item, mid + 1, end);
        }
    }

    return -1;
}
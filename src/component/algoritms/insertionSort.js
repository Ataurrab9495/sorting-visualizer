const insertionSort = (inputArray) =>{
   
    for(let i =0;i<inputArray.length;i++){
        let key = inputArray[i];
        let j = i-1;
        while(inputArray[j] > key && j >= 0){
            inputArray[j+1] = inputArray[j];
            j = j-1;
        }
        inputArray[j+1] = key;
    }

    return inputArray
}

export default insertionSort
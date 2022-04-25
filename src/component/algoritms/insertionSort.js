const insertionSort = () =>{
    const dupArray = array.slice();

    for(let i =0;i<dupArray.length;i++){
        let key = dupArray[i];
        let j = i-1;
        while(dupArray[j] > key && j >= 0){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}

export default insertionSort
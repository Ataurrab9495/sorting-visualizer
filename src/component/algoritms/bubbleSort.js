const swap = (arr , i , j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const bubbleSort = () =>{
    const dupArray = array.slice();
    
    for(let i=0;i<dupArray.length;i++){
        for(let j=0;dupArray.length-i-1;j++){
            if(dupArray[j] > dupArray[j+1]){
                swap(dupArray , j , j+1);
            }
        }
    }
}

export default bubbleSort
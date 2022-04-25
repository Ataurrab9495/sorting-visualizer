const mergeSort = () =>{
    const dupArray = array.slice();

    mergeSortHelper(dupArray , 0 , dupArray.length-1);
}

const mergeSortHelper = (arr,start,end) =>{
    if(start >= end){
        const mid = Math.floor((start+end)/2);
        mergeSortHelper(arr, start , mid);
        mergeSortHelper(arr,mid+1,end);
        mergeSort(arr,start, mid, end);
    }
}

const merge = (arr,start,mid,end) =>{
    let i = start;
    let j = mid+1;
    const array =[];

    while(i<= mid && j <= end){
        if(arr[i] <= arr[j]){
            array.push(arr[i++]);
        }else{
            array.push(arr[j++]);
        }
    }


    if(i <= mid ){
        array.push(arr[i++]);
    }

    if(j <= end){
        array.push(arr[j++])
    }
}
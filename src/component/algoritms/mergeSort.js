const mergeSort = (array) => {
    if (array.length === 1) {
    return array                            // return once we hit an array with a single item
 }
 const middle = Math.floor(array.length / 2) // get the middle item of the array rounded down
 const left = array.slice(0, middle)         // items on the left side
 const right = array.slice(middle)           // items on the right side

 return merge(
    mergeSort(left),
    mergeSort(right)
 )
 }




 const merge =(left, right) => {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex])
       leftIndex++
             
       } else {
       result.push(right[rightIndex])
       rightIndex++      
    }
 }
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }

 export default mergeSort
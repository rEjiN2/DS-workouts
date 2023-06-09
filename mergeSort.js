function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left) , mergeSort(right))
}


function merge(left,right){
    let result = [];
    let leftIndex  =  0;
    let rightIndex =  0;
    while(leftIndex<left.length && rightIndex< right.length){
        if(left[leftIndex] <right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


console.log(mergeSort([6,9,7,3,1,4]));
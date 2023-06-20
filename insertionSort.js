function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        var current  = arr[i];
        for(j=i-1;j>=0&&arr[j]>current;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=current;
    }
    return arr;
}

console.log(insertionSort([6,3,1,5,8]));


// var insertionSort = (arr)=>{
//     for(i=1;i<=arr.length-1;i++){
//     var current = arr[i]
//     for(j=i-1 ; j>=0&&arr[j]>current;j--){
//         arr[j+1]=arr[j]
//     }
//     arr[j+1]=current;
// }

// return arr;
// } 
// console.log(insertionSort([15,10,48,79,32,18]));
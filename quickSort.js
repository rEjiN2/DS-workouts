function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    var pivot = arr[arr.length-1];
    var i=0;
    for(j=0;j<arr.length-1;j++){
        if(pivot>arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++;
        }
    }
     [ arr[i] , arr[arr.length-1] ] = [ arr[arr.length-1] , arr[i]]

     return quickSort(arr.slice(0,i)).concat(pivot , quickSort(arr.slice(i+1)))
}

console.log(quickSort([6,9,7,2,3,1]));

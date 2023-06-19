function bubbleSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j] , arr[i]]
            }
        }
    }

    return arr;
}

console.log(bubbleSort([25,10,14,78,63]));
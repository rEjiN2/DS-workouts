function selectionSort(arr){
    
    for(var i=0;i<=arr.length;i++){
        var min = i;
        for(var j=i+1;j<=arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!=i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr;
}

console.log(selectionSort([5,6,8,1,2,3]));
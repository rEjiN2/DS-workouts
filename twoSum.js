const nums =  [2,5,4,9,3,7,8]
const target = 9;
const set={};
const twoSum = (arr,t)=>{
for(let i=0;i<arr.length;i++){
    const dif= t-arr[i];
    if(dif in set){
        return [set[dif] ,i]
    }
    set[arr[i]] = i;
}
return [];
}

console.log(twoSum(nums,target));
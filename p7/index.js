let numbers=[1,2,3,4,5]

function filterArray(arr,callback){

    let filterarray=[]
    for(let i=0;i<arr.length;i++){
        if (callback(arr[i])==true){
            filterarray.push(arr[i])
        }
    }
    return filterarray;
}
function callback(a){
    if(a%2==0){
        return true
    }
}
console.log(filterArray(numbers,callback))
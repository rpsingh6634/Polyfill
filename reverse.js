Array.prototype.customReverse=function(){
    const arr=this;
    let j=arr.length-1;
    for(let i =0 ;i<arr.length/2;i++){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j--;
    }
}
let array=[11,23,26,29,31];
array.customReverse();
console.log(array);
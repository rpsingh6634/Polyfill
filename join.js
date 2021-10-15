Array.prototype.Join=function(joinSep = ''){
    const arr=this;
    let poly='';
    for(let i=0;i<arr.length-1;i++){
        poly+=""+arr[i]+joinSep;
    }
    poly+=""+arr[arr.length-1];
    return poly;
}
let arr=['Fire', 'Air', 'Water'];
let string=arr.Join(' ');
console.log(string);



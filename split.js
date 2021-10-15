String.prototype.customSplit = function(spl = ''){
    let poly = [];
    let temp = ''
    for (let i = 0; i < str.length; i++) {
      let el = str[i]
      if (el === spl || (spl === '' && temp)) {
        poly.push(temp)
        temp = ''
      }
      if (el !== spl) {
        temp += el
      }
    }
    if (temp) {
      poly.push(temp)
      temp = ''
    }
    return poly
  }
  
  let str = 'Life is a question and how we live it is our answer.';
  console.log(str.customSplit());
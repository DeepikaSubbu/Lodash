//1.concat

const arr = ['First item', 'Second item', 'Third item'];

arr.push('Fourth item');

console.log(arr); // ['First item', 'Second item', 'Third item', 'Fourth item']








//2.map function


var arr1 = [4, 5, 10, 3, 8, 6];
        var result = [];
        let i;
  
        //square function returns square of a number
        const square = function(num){  
            return num*num;
        }
  
        for(i=0; i< arr1.length; i++){
            result.push(square(arr1[i]));
        }
  
        console.log(result);
        //Expected output: [16 ,25, 100, 9, 64, 36]







//3.reverse

function reverse1(str){
    let r = "";
    for(let i = str.length-1; i >= 0; i--){
      r += str[i];
    }
    return r;
  }
  
  console.log(reverse1("javascript"))
  //Expected output:tpircsavaj




  

  //4.remove method

  var number=[2,6,4,7,10,6];
  number.length=6;
  console.log(number);
  number.pop();
  number.pop();
  console.log(number);
//Expected outp[ut:[2,6,4,7]






  //5.Min method

  function Maximum(a,b){
      var max = arguments[0];
      for(var i=0, j=arguments.length; i<j; i++){
      if(arguments[i]>max){
          max=arguments[i];
      }
  }
  return max;
}
  console.log(Maximum(9, 4));
  //Expected output:9


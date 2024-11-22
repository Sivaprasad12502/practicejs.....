// write a program to convert the decimal number to a binary representation?



decimalTobinary=(n)=>{
  let binery="";
  for(;n>0;n=Math.floor(n/2)){
    let remainder=n%2;
    binery=remainder+binery;

  }
  

  return binery;
  
}
console.log(decimalTobinary(60));


// test case


test=()=>{
  let input=[[13],[60]];
  let output=['1101','111100'];
  for(let i=0;i<input.length;i++){
    let result=decimalTobinary(input[i][0]);
    if(result===output[i]){
      console.log(' test is passed')
    }else{
      console.log('test is failed')
    }
  }

}

test()
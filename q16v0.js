// Write a program to check whether the given string is palindrome or not?



palindrome=(str)=>{
   let reversed='';
   for(let i=str.length-1;i>=0;i--){
      reversed=reversed+str[i];

      
     
   }
   return reversed===str;
  
}
console.log(palindrome('malayalam'))




// test case



test=()=>{
   let input=['malayalam','hello'];
   let output=[true,false];
   for(i=0;i<input.length;i++){
      let result=palindrome(input[i]);
      if(result===output[i]){
         console.log('test is passed');
      }else{
         console.log('test is failed')
      }
   }
}

test()



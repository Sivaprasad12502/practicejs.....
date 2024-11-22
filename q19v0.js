// Write a program to count the number of vowels in a string?




vowelsInString=(str)=>{
   let vowels=["a","e","i","o","u","A","E","I","O","U"];
   let numberOfvowels=0;
   for(let i=0;i<vowels.length;i++){
    for(let j=0;j<str.length;j++){
        if(vowels[i]==str[j]){
            numberOfvowels++;
        }

    }
       
   }
   return numberOfvowels;

}
console.log(vowelsInString('si'));



// test cases 


test=()=>{
    let input=["malayalam","si"];
    let ouput=[4,1];
    for(let i=0;i<input.length;i++){
        let result=vowelsInString(input[i])
        if(result==ouput[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }

}
test()
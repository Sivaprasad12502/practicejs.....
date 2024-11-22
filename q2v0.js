// Write a program to find the averagae of an array of numbers?

arrayAverage=(arry)=>{
   let sum=0;
   for(i=0;i<arry.length;i++){
       sum=sum+arry[i];
   }
   averagae=sum/arry.length;
   return averagae;

}
console.log(arrayAverage([6,7,8,9,10]))


test=()=>{
    let input=[[1,2,3,4,5],[6,7,8,9,10]];
    let output=[3,8];
    for(let i=0;i<input.length;i++){

        let result=arrayAverage(input[i]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }


    }
}

test()
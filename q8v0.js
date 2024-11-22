// Write a program to find the most repeated value in an array of numbers?


mostRepeatedValue=(arry)=>{
    arry.sort((a,b)=>a-b);
    let maxCount=1;
    let currentCount=1;
    let mostRepeat=arry[0]
    for(let i=0;i<arry.length;i++){
       if(arry[i]==arry[i-1]){
        currentCount++;
       }else{
        currentCount=1;
       }
       if(currentCount>maxCount){
        maxCount=currentCount;
        mostRepeat=arry[i]
       }
    }
    return mostRepeat;
}

console.log(mostRepeatedValue(arry=[1,2,3,5,1]))

test=()=>{
    let input=[[1,2,3,5,1,3,9,3,8,3,0,8,3],[1,2,3,5,1]];
    let ouput=[3,1];
    for(let i=0;i<input.length;i++){
        let result=mostRepeatedValue(input[i]);
        if(result==ouput[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()
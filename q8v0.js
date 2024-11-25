// Write a program to find the most repeated value in an array of numbers?


mostRepeatedValue=(arry)=>{
    if(!Array.isArray(arry)){
        return "enter elements in the array"
    }
    for(let i=0;i<arry.length;i++){
        if(typeof arry[i]!=='number'){
            return "enter only numbers int the array"
        }
    }
    arry.sort((a,b)=>a-b);
    let maxCount=1;
    let currentCount=1;
    let mostRepeat=arry[0]
    for(let i=1;i<arry.length;i++){
        
       if(arry[i]===arry[i-1]){
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


// test case 


test=()=>{
    let input=[[1,2,3,5,1],[2,3,3,3,2]];
    let ouput=[1,3];
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
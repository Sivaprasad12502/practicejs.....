// Write a program to check whether a given number is an Armstrong number or not?




armstrongNumber=(number)=>{
    if(typeof number !=='number'){
        return "enter a valid number to check"
    }
    let numStr= number.toString();
    let sum=0;
    for(let i=0;i<numStr.length;i++){
        let digit=parseInt(numStr[i])
        sum=sum+ Math.pow(digit,numStr.length)
    }
    if(sum===number){
        return true
    }
    return false

}
console.log(armstrongNumber(153,));


// test case


test=()=>{
    let input=[34,153,1];
    let output=[false,true,true];
    for(let i=0;i<input.length;i++){
        let result=armstrongNumber(input[i])
        if(result==output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
        
}

test()
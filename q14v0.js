// Write a program to check whether a given number is a perfect number or not?







perfectNumber=(num)=>{
    if(typeof num!=='number'){
        return "enter a number to check"
    }
    let divisible=[];
    let sum=0;
    for(let i=0;i<num;i++){
        if(num%i==0){
            divisible.push(i)
        }
    
        
    }
    for(let i=0;i<divisible.length;i++){
        sum=sum+divisible[i];

    }
    if(sum==num){
        return true
    }
    return false

}
console.log(perfectNumber(28));



// test case 



test=()=>{
    let input=[28,2];
    let ouput=[true,false]
    for(let i=0;i<input[i];i++){
        let result=perfectNumber(input[i])
        if(result==ouput[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()




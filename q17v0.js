// Write a porgram to find the greatest common divisor(GCD)of two numbers?


gcd=(a,b)=>{
    let smaller=[];
    if(a>b){
        smaller=b
    }else{
        smaller=a
    }
    for(let i =smaller;i>=1;i--){
        if(a%i===0  && b%i==0){
            return i
        }

    }


    
}
console.log(gcd(10,5))


// test case



test=()=>{
    let input=[[48,18],[10,5]];
    let output=[6,3];
    for(let i=0;i<input.length;i++){
        let result=gcd(input[i][0],input[i][1]);
        if(result==output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()

// Write a program to calculate the Fibonacci series of a given Number?


fibonacci=(n)=>{
    let fibo=[0,1];
    for(let i=2;i<n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];

    }
    return fibo;
}

console.log(fibonacci(12))

test=()=>{
    let input=[13,6,2];
    let output=[fibonacci(13),fibonacci(6),fibonacci(2)];
    for( i=0;i<input.length;i++){
        let result=fibonacci(input[i])
        if(result==output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }

    }
}
test()





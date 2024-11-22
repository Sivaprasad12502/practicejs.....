// Write a program to find the first n prime numbers up to the given number?


checkPrime=(n)=>{
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(47));

printPrime=(limit)=>{
    let primes=[];
    for(let i=2;i<limit;i++){
        if(checkPrime(i)){
            primes.push(i);
            
        }
    }
   
    return primes;
    
}

console.log(printPrime(50));

test=()=>{
    let input=[[10],[25]];
    let ouput=[checkPrime(10),checkPrime(25)];
    for(let i=0;i<input[i];i++){
        let result=checkPrime(input[i]);
        if(result==ouput[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}
test()
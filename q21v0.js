// Write a program to find the first n prime numbers up to the given number?


checkPrime=(n)=>{
    if(typeof n!=='number'){
        return "enter a valid number"
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(9));

printPrime=(limit)=>{
    if(typeof limit!=='number'){
        return "enter a valid  number"
    }
    let primes=[];
    for(let i=2;i<limit;i++){
        if(checkPrime(i)){
            primes.push(i);
            
        }
    }
   
    return primes;
    
}

console.log(printPrime(35));


arrayEqual=(arr,arr2)=>{


    for(let i=0;i<arr.length;i++){
        if(arr[i]!==arr2[i]){
            return false
        }
    }
    return true
}


// test case 

test=()=>{
    let input=[35];
    let ouput=[[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]]
    for(let i=0;i<input.length;i++){
        let result=printPrime(input[i]);
        if(arrayEqual(result,ouput[i])){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}
test()
// Write a program to find the lest common multiple(LCM) of two Numbers?




gcd=(a,b)=>{
    let smaller
   if(a>b){
    smaller=b
   }else{
    smaller=a;
   }
   for(let i=smaller;i>=1;i--){

    if(a%i===0&&b%i===0){
        return i
    }
   }
}
console.log(gcd(48,18))




lcm=(a,b)=>{
    let lcm=(a*b)/gcd(a,b);
    return lcm;
}
console.log(lcm(20,12))


test=()=>{
    let input=[[48,18],[20,12]];
    let output=[144,60];
    for(let i=0;i<input.length;i++){
        let result=lcm(input[i][0],input[i][1]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()
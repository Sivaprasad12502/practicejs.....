gcd=(a,b)=>{
    let smaller;
    if(a>b){
        smaller=b;
    }else{
         smaller=a;

    }
    for(let i=smaller;i>1;i--){
        if(a%i==0 &&b%i==0){
            return i;
        }
    }
}

fraction=(x,y)=>{
  let a=gcd(x,y);
  return `${x/a}/${y/a}`;
}
console.log(fraction(14,32));

// test case



test=()=>{
    let input=[[44,22],[14,32]];
    let ouput=['2/1','7/16'];
    for(let i=0;i<input.length;i++){
        let result=fraction(input[i][0],input[i][1]);
        if(result==ouput[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()
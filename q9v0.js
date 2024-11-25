// write a program that approximates the derivate of f(x)=x^n?



approximateDerivate=(x,n,h=1e-5)=>{
    if(typeof x!=='number'||typeof n!=='number'){
        return "enter valid numbers"
    }

    const fx=Math.pow(x,n);
    const fxh=Math.pow(x+h,n);
    const derivative=(fxh-fx)/h;
    return derivative;



}
console.log(approximateDerivate(5,3));


// test case


test=()=>{
    let input=[[2,3],[5,3]];
    let output=[12.000060000261213,75.00014999664018];
    for(let i=0;i<input.length;i++){
        let result=approximateDerivate(input[i][0],input[i][1]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is faied')
        }
    }
}

test()
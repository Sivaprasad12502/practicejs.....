// write a program to calculate the factorial of a number using a recursive method?



fact=(n)=>{
if(typeof n!=='number'){
    return "enter valid number"
}
 if(n==0){
    return 1;
 }else{
    return n* fact(n-1)
 }
}

console.log(fact(3))


// test cases 


test=()=>{
    let input=[5,9];
    let output=[120,362880];
    for(let i=0;i<input.length;i++){
        let result=fact(input[i]);
        if(result==output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()
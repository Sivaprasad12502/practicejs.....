// Write a program to check if the given number is perfect square or not?


perfectSquare=(n)=>{
    n=Math.sqrt(n)
    if(Number.isInteger(n)){
        return('perfect')
    }else{
        return('not perfect')
    }

}
perfectSquare(26)


// test case 


Test=()=>{
    let input=[[26],[25]];
    let output=['not perfect','perfect'];
    for(let i=0;i<input.length;i++){
        let result=perfectSquare(input[i]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}
Test()
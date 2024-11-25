// Write a program to calculate the Fibonacci series of a given Number?


fibonacci=(n)=>{
    if(typeof n!=='number'){
        return "enter a valid number"
    }
    let fibo=[0,1];
    for(let i=2;i<n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];

    }
    return fibo;
}

console.log(fibonacci(12))



//test case
arraEqual=(arr1,arr2)=>{
    for(let i =0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }
        
    }
    return true
}

test=()=>{
    let input=[[13],[12]];
    let output=[[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144],[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]];
    for(let i=0;i<input.length;i++){
        let result=fibonacci(input[i][0])
        if (arraEqual(result,output[i])){
             console.log('test is passed')
         } else {
             console.log('tes id failed')
         }
    }
       

    
}
test()





// Write a program to calculate the remainder of two numbers?

remainder=(a,b)=>{
if(typeof a!=='number'||typeof b!=='number'){
    return "enter a  valid number "
}
 let remainder =0;
 remainder=a%b;
 return(remainder);
}
console.log(remainder(10,2));



// test case



test=()=>{
    let input=[[3,2],[2,2]];
    let output=[1,0];
    for(i=0;i<input.length;i++){
        let result=remainder(input[i][0],input[i][1]);
        if(result===output[i]){
            console.log('test is passed');

        }else{
            console.log('test is failed');
        }
    }

}
test()
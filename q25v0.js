// Write a program to find the range (difference between the highest and lowest value )in an array of numbers?




range=(arr)=>{
let range=0;
arr.sort((a,b)=>a-b);
range=(arr[arr.length-1])-(arr[0])
return range;
}
console.log(range([1,3,5,]))


// test case  



test=()=>{
    let input=[[1,3,5],[4,6,7]];
    let output=[4,3];
    for(i=0;i<input.length;i++){
        let result=range(input[i]);
        if(result===output[i]){
            console.log('test is passed ')
        }else{
            console.log('test is failed')
        }
    }
}
test()




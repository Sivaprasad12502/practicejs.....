// Write a program to calculate the area of a rectangele,given its length and breadth?


area=(l,w)=>{
    let area=0;
    area=l*w;
    return area;
}
console.log(area(4,3));



// test case

test=()=>{
    let input=[[4,3],[5,5]];
    let output=[12,25];
    for(let i=0;i<input.length;i++){
        let result=area(input[i][0],input[i][1])
            if(result===output[i]){
                console.log('test is passed')
            }else{
                console.log('test is failed')
            }
        
    }
}
test()



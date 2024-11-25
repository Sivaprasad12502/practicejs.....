// Write a program to calculate the area of  a triangle given its base and height?



areaOfAtriangle=(h,b)=>{
    if(typeof h!=='number'||typeof b!=='number'){
        return "enter only valid numbers"
    }
    let area=0;
    area=(h*b)/2;
    return area;

}
console.log(areaOfAtriangle(3,7))

// test case 



test=()=>{
    let input=[[2,3],[6,7]];
    let output=[3,21];
    for(let i=0;i<input.length;i++){
        let result=areaOfAtriangle(input[i][0],input[i][1]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}
test()


// Write a program remove duplicate in an array of numbers?




duplicatArayy=(arr)=>{
    let arrayy=[];
    for(let i=0;i<arr.length;i++){
            if(!arrayy.includes(arr[i])){

                arrayy.push(arr[i])
            }
    }
    return arrayy;
}
console.log(duplicatArayy(arr=[1,2,4,3,1]))


arayEqual=(arr,arr1)=>{
    if(arr.length!==arr1.length){
        return false
    }
    for(let i=0;i<arr.length;i++){
            if(arr[i]!==arr1[i]){
                return false
            }
    }
    return true

}

test=()=>{
    let input=[1,2,4,3,5,2,4,5,3];
    let ouput=[1, 2, 4, 3, 5];
    let result=duplicatArayy(input);
    if(arayEqual(result,ouput)){
        console.log('test is passed')
    }else{
        console.log('test is failed')
    }
}
test()
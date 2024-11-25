// Write a program to check if the given matirx is an identity matrix?



identityMatrix=(matrix)=>{
    if(!Array.isArray(matrix)){
        return "enter elements in array"
    }
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        if(typeof matrix[i][j]!=='number'){
            return " in the array enter only numbers"
        }
        if(i===j){
            if(matrix[i][j]!==1){
                return false;

        }
       
       
    }
    else{
        if(matrix[i][j]!==0){
            return false;
        }
    }
  }
}
  return true;

}
console.log(identityMatrix(matrix=[[1,0,0],[0,1,0],[0,0,1]]))




// test case

test=()=>{
    let input=[[[1,0,0],[0,1,0],[0,0,1]],[[1,0,0],[0,1,0],[9,0,1]]];
    let output=[true,false];
    for(let i=0;i<input.length;i++){
        let result=identityMatrix(input[i]);
        if(result===output[i]){
            console.log('test is passed')
        }else{
            console.log('test is failed')
        }
    }
}

test()
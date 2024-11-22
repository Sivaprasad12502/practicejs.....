// Write a program to check if the given matrix is and  digonal matrix?


diagonalMatrix=(matrix)=>{
    const row=matrix.length;
    const column=matrix[0].length;
    for(let i=0;i<row;i++){
        
        for(let j=0;j<column;j++){
            // console.log([i][j])
            // console.log(matrix[i][j])

            if(i!==j&&matrix[i][j]!==0){
                return false;
            }
        }
    }
    return true;
}

// diagonalMatrix()
// console.log(diagonalMatrix());


test=()=>{
    let input = [
        [[1,0,0],[0,5,0],[0,0,9]],
        [[1,9,0],[0,5,0],[0,0,9]] 
    ];  
     let output=[true,false];
   for(let i=0;i<input.length;i++){
    let result=diagonalMatrix(input[i]);
    if(result===output[i]){
        console.log('test is passed')
    }else{
        console.log('test is failed')
    }
   }
}
test()


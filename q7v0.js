// write a program that returns the transpose of a given matrix?




transposeMatrix=(matrix)=>{
 
  let transposed=[];
  for(let i=0;i<matrix[0].length;i++){
    transposed[i]=[];
    for(let j=0;j<matrix.length;j++){
        transposed[i][j] = matrix[j][i];
    }

  }
  return transposed;
};
console.log(transposeMatrix(matrix=[[1,2,3],[4,5,6],[3,4,6]]));


// test case

arrayEqual=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i].length!==arr2[i].length){
            return false;
        }
        for(let j=0;j<arr1.length;j++){
            if(arr1[i][j]!==arr2[i][j]){
                return false
            }
        }
    }
    return true;

}
console.log(arrayEqual(arr1=[[1,2,3],[4,5,6]],arr2=[[1,2,3],[4,5,6]]))


test=()=>{
    let input=[[1,2,3],[4,5,6]];
    let output=[[1,4],[2,5],[3,6]];
        let result=transposeMatrix(input);
        if(arrayEqual(result,output)){
            console.log('test is passed')
        }else{
            console.log('test is failed')
    }
}
test()


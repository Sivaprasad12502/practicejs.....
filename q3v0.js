// Write a program to add two matrices?


matrixaddition=(matrix,matrixb)=>{
    // let matrix =[
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9]
    // ];
    // let matrixb=[
    //     [10,11,12],
    //     [13,14,15],
    //     [16,17,18]
    // ];
    let result=[];
   for(let i=0;i<matrix.length;i++){
    let row=[];
       for(let j=0;j<matrix[i].length;j++){
       row.push(matrix[i][j]+matrixb[i][j]);
      

    }
    result.push(row)
    

   }
   return result;
}
// console.log(matrixaddition(matrix =[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ],
//  matrixb =[
//     [10,11,12],
//     [13,14,15],
//     [16,17,18]
// ]))

// array comparison

arrayEqual=(arr1,arr2)=>{
  if(arr1.length!==arr2.length){
    return false;
  }
  for(let i=0;i<arr1.length;i++){
    if(arr1[i].length!==arr2[i].length){
        return false;
    }
    for(let j=0;j<arr1.length;j++){
        if(arr1[i][j]!==arr2[i][j]){
            return false;
        }
    }

  }
  return true;
}



// test case







test=()=>{
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
    
      const matrixb = [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
      ];
    
    let output=[
        [11, 13, 15],
        [17, 19, 21],
        [23, 25, 27]];

        let result=matrixaddition(matrix,matrixb);
        if(arrayEqual(result,output)){
            console.log('test is passed ')
        }else{
            console.log('test is failed')
        }
    

}
test()


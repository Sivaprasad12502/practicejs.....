// Write a program check whether the given string with space is isPalindrome or not?



isPalindrome=(str)=>{
    let cleanedstr=str.replace(/\s+/g, '').toLowerCase();
    let reversedStr='';
    for(let i=cleanedstr.length-1;i>=0;i--){
        reversedStr+=cleanedstr[i]

    }

    if(cleanedstr===reversedStr){
        return true
    
}
return false
}


// test case 

test=()=>{

    let input=" A man a plan a canal Panama";
    let output=true;
    let result=isPalindrome(input);
    if(result===output){
        console.log('test is passed')
    }else{
        console.log('test is failed')
    }

    

}
test()
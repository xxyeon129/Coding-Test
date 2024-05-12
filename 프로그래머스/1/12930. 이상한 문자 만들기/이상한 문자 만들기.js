function solution(s) {
    // 짝수번째 대문자
    // 홀수번째 소문자
    const arr = s.split(" ")
    const resultArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let string = "";
        
        for(let j = 0; j < arr[i].length; j++){
            if(j % 2 === 0){
                string += arr[i][j].toUpperCase();
            }else{
                string += arr[i][j] = arr[i][j].toLowerCase();
            }
        }
        resultArr.push(string)
    }
    
    
    return resultArr.toString().replaceAll(",", " ")
}
function solution(s) {
    const result = [];
    const sArray = s.split('');
    
    sArray.map((el, index) => {
        if(sArray.indexOf(el) === index) {
            result.push(-1);
        }else{
            // index 전을 자르고
            const findStrArr = sArray.slice(0, index).reverse();
            result.push((findStrArr.indexOf(el)) + 1);
        }
    });
    
    return result;
}
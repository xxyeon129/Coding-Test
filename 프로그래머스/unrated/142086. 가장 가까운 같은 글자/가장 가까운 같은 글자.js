function solution(s) {
    const result = [];
    const sArray = [...s];
    
    sArray.forEach((el, index) => {
        if(sArray.indexOf(el) === index) {
            result.push(-1);
        }else{
            const findStrArr = sArray.slice(0, index).reverse();
            const distance = findStrArr.indexOf(el) + 1;
            result.push(distance);
        }
    });
    
    return result;
}
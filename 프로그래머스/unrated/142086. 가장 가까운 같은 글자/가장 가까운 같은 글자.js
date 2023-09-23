function solution(s) {
    const sArray = [...s];
    
    return sArray.map((el, index) => {
        if(sArray.indexOf(el) === index) {
            return -1;
        }else{
            const findStrArr = sArray.slice(0, index).reverse();
            const distance = findStrArr.indexOf(el) + 1;
            return distance;
        }
    });
}
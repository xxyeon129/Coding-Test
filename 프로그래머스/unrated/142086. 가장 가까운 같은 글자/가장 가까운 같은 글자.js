function solution(s) {
    const sArray = [...s];
    
    return sArray.map((el, index) => {
        if(sArray.indexOf(el) === index) {
            return -1;
        }else{
            const findStrArr = s.slice(0, index);
            const distance = index - findStrArr.lastIndexOf(el);
            return distance;
        }
    });
}
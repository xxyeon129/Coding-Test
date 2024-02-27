function solution(n) {
    let arr = ("" + n).split("")
    
    return arr.reverse().map((el) => Number(el))
}
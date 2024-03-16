function solution(arr) {
    const smallNum = [...arr].sort((a,b) => a-b)[0]
    
    arr.splice(arr.indexOf(smallNum), 1)
    
    return arr.length > 0 ? arr : [-1]
}
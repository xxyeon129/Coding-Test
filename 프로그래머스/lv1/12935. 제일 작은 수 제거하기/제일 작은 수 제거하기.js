function solution(arr) {
    const smallNum = [...arr].sort((a,b) => a-b)[0]
    const deleteIdx = arr.indexOf(smallNum)
    
    arr.splice(deleteIdx, 1)
    
    return arr.length > 0 ? arr : [-1]
}
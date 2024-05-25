function solution(sizes) {
    const arrSort = sizes.map((arr) => {
        if(arr[1] > arr[0]){
             arr.reverse()
        }
        return arr;
    })
    
    return Math.max(...arrSort.map(el => el[0])) * Math.max(...arrSort.map(el => el[1]))

}
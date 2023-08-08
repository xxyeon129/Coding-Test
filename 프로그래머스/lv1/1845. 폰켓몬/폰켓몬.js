function solution(nums) {
    const pick = nums.length / 2;
    
    const set = new Set(nums);
    const numsSet = [...set];
    
    if(numsSet.length >= pick) return pick;
    if(numsSet.length < pick) return numsSet.length;
}
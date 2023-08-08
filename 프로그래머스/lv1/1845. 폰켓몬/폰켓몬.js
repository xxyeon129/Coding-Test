function solution(nums) {
    const pick = nums.length / 2;
    const numsSet = [...(new Set(nums))];
    
    return numsSet.length < pick ? numsSet.length : pick;
}
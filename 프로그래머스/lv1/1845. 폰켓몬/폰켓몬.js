function solution(nums) {
    const pick = nums.length / 2;
    const numsLength = [...new Set(nums)].length;
    
    return numsLength < pick ? numsLength : pick;
}
function solution(arr1, arr2) {
    return arr1.map((arr1, idx1) => arr1.map((val, idx2) => val+arr2[idx1][idx2]));
}
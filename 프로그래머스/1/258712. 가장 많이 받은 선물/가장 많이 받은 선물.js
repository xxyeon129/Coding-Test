function solution(friends, gifts) {
    const giveTakeArr = friends.map(() => Array(friends.length).fill(0));
    
    const giftCountObj = friends.reduce((acc, cur) => {
        acc[cur] = [0, 0, 0];
        return acc;
    }, {});
    
    gifts.forEach(gift => {
        const friendArr = gift.split(" ");
    
        giveTakeArr[friends.indexOf(friendArr[0])][friends.indexOf(friendArr[1])] += 1;
        
        giftCountObj[`${friendArr[0]}`][0] += 1;
        giftCountObj[`${friendArr[1]}`][1] += 1;
    });
    
    for (const giveFriendIdx in friends) {
        for(let takeFriendIdx = 0; takeFriendIdx < friends.length; takeFriendIdx++){
            if (giveFriendIdx !== takeFriendIdx){
                 if(giveTakeArr[giveFriendIdx][takeFriendIdx] > giveTakeArr[takeFriendIdx][giveFriendIdx]) {
                     giftCountObj[`${friends[giveFriendIdx]}`][2] += 1;
                 }else if(giveTakeArr[giveFriendIdx][takeFriendIdx] === giveTakeArr[takeFriendIdx][giveFriendIdx]) {
                     const giftCount1 = giftCountObj[`${friends[giveFriendIdx]}`][0] - giftCountObj[`${friends[giveFriendIdx]}`][1];
                     const giftCount2 = giftCountObj[`${friends[takeFriendIdx]}`][0] - giftCountObj[`${friends[takeFriendIdx]}`][1];
                     
                     if(giftCount1 > giftCount2) {
                         giftCountObj[`${friends[giveFriendIdx]}`][2] += 1;
                     }
                 }
            }
        }
    }
    
    const takeGiftsCount = Object.values(giftCountObj).map(arr => arr[arr.length -1]);
    return Math.max(...takeGiftsCount);
}
function solution(friends, gifts) {
    const friendsLength = friends.length;
    
    const giveTakeArr = Array.from({length: friendsLength}, () => Array(friendsLength).fill(0));
    
    const giftCountObj = friends.reduce((acc, cur) => {
        acc[cur] = [0, 0, 0];
        return acc;
    }, {});
    
    gifts.forEach(gift => {
        const [giver, taker] = gift.split(" ");
    
        giveTakeArr[friends.indexOf(giver)][friends.indexOf(taker)] += 1;
        
        giftCountObj[giver][0] += 1;
        giftCountObj[taker][1] += 1;
    });
    
    for (let giveFriendIdx = 0; giveFriendIdx < friendsLength; giveFriendIdx++) {
        for(let takeFriendIdx = 0; takeFriendIdx < friendsLength; takeFriendIdx++){
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
    
    const takeGiftsCount = Object.values(giftCountObj).map(arr => arr[2]);
    return Math.max(...takeGiftsCount);
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const Maj = {};
    for (num of nums) {
        Maj[num] = Maj[num] + 1 || 1;
    }
    let entries = Object.entries(Maj);
    
    let sorted = entries.sort((a, b) => a[1] - b[1]);

    return sorted[sorted.length - 1][0]

};

var twoSum = function (nums, target) {
    let index = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let sum;
        for (let j = i + 1; j < nums.length; j++) {
            sum = nums[i] + nums[j]
            if (sum === target) {
                index.push(nums.indexOf(nums[i]));
                index.push(nums.indexOf(nums[j]));
                break;
            }
        }
    }
    return index;
};
console.log(twoSum([2,11,7,15],9));

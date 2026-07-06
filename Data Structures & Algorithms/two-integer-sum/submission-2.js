class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map()
        for(let i= 0;i < nums.length; i++){
            if (numMap.has(nums[i]))
                return [numMap.get(nums[i]), i]
                        let temp = target - nums[i]
            numMap.set(temp, i);
        }
    }
}

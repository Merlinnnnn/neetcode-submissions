class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        if(nums.length == 1) return nums[0];
        if(nums.length == 2) return Math.min(...nums);
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (nums[left] < nums[right]) return nums[left];
            if (nums[mid] > nums[left] && nums[right] > nums[left])
                return nums[left];
            if (nums[mid] < nums[right]) right = mid;
            if (nums[mid] > nums[right]) left = mid + 1;
        }
        return nums[left];
    }
}

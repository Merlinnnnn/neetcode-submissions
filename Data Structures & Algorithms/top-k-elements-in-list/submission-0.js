class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();

        // Đếm tần suất xuất hiện
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        // Bucket theo tần suất
        const freq = Array(nums.length + 1)
            .fill()
            .map(() => []);

        for (const [num, c] of count) {
            freq[c].push(num);
        }

        const res = [];

        // Lấy từ tần suất cao xuống thấp
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const num of freq[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}

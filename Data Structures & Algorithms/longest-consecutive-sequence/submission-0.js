class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Lưu tất cả phần tử vào Set để tìm kiếm O(1)
        const set = new Set(nums);

        let longest = 0;

        // Duyệt từng số trong Set
        for (let num of set) {

            // Chỉ bắt đầu đếm nếu num là đầu của chuỗi
            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                // Đếm độ dài chuỗi liên tiếp
                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let ans = 0;

        const count = new Map();

        for (let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) || 0) + 1);

            maxFreq = Math.max(maxFreq, count.get(s[right]));

            while ((right - left + 1) - maxFreq > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }

            ans = Math.max(ans, right - left + 1);
        }

        return ans;
    }
}
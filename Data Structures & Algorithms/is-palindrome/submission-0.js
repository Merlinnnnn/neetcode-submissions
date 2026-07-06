class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            // Bỏ qua ký tự không phải chữ hoặc số
            while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
                left++;
            }

            while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
                right--;
            }

            // So sánh không phân biệt hoa/thường
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
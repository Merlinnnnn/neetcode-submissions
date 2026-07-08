class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        let map = new Map([
            [')', '('],
            ['}', '{'],
            [']', '[']
        ])
        for (const letter of s) {
            if (st.length == 0) {
                st.push(letter);
                continue;
            }
            if (st[st.length - 1] === map.get(letter)){
                st.pop();
            } else st.push(letter);
        }
        return st.length == 0
    }
}

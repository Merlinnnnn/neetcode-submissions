class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

    const freq = new Array(26).fill(0);

    for (const c of s) {
        freq[c.charCodeAt(0) - 97]++;
    }

    for (const c of t) {
        freq[c.charCodeAt(0) - 97]--;
    }

    for (const x of freq) {
        if (x !== 0) return false;
    }

    return true;
    }
}

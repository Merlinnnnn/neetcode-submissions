class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        for (let i=0;i <s.length; i++){
            for (let j=0; j< t.length; j++){
                if (s[i] == t[j]){
                    t = t.replace (s[i], '');
                    break;
                }
            }
        }
        return t.length === 0;
    }
}

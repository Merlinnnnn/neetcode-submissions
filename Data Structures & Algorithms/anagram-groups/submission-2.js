class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = [];
        let temps = strs;
        let num = 0;
        const areSetsEqual = (a, b) => 
        a.size === b.size && [...a].every(value => b.has(value));
        const getKey = str => str.split('').sort().join('');
        while (num < strs.length){
            let setStr = new Set(temps[0])
            let key = getKey(temps[0]);
            let firstStr = temps.filter(item => {
                return (getKey(item) === key); 
            })
            temps = temps.filter(item => {
                return !(getKey(item) === key); 
            })
            num += firstStr.length;
            output.push(firstStr);
        }
        return output;
    }
}

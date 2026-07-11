class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let n = temperatures.length;
        let arr = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            if (stack.length == 0) stack.push(i);
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
                let a = stack.pop();
                arr[a] = i - a;
            }
            stack.push(i);
        }
        return arr;
    }
}

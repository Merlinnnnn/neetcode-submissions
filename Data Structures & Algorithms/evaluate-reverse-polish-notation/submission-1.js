class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens) {
            if(!isNaN(token)) stack.push(Number(token));
            else {
                let a = stack.pop();
                let b = stack.pop();
                switch (token){
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(b - a);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(Math.trunc(b/a));
                        break;
                    default:
                        break;
                }
            }
        }
        return stack[0];
    }
}

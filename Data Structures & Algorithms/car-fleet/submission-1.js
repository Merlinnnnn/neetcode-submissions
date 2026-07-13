class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];
        let stack = []
        for (let i = 0; i < position.length; i++) {
            cars[i] = [
                position[i],
                speed[i],
                (target - position[i]) / speed[i]
            ];
        }
        cars.sort((a,b) => b[0] - a[0]);
        for (let i = 0; i < position.length; i++) {
            if(stack.length == 0){
                stack.push(cars[i][2]);
                continue;
            }
            if(cars[i][2] > stack[stack.length-1]) stack.push(cars[i][2]);
            //if(cars[i][2] <= stack[stack.length-1]) continue;
        }
        return stack.length;
    }
}

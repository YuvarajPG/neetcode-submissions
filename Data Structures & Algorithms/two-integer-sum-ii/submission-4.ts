class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l = 0;
        let r = numbers.length - 1;
        while (l <= r) {
            const mid = numbers[l] + numbers[r];
            if (mid === target) {
                return [l+1,r+1];
            }
            if (mid< target) {
                l++
            } else {
                r--;
            }
        }
        return [];
    }
}

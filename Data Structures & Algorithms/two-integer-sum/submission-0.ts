class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            let need = target - nums[i];
            if (map.has(need)) {
                return [map.get(need), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}

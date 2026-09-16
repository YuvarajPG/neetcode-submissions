class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // const map = new Map<number, number>();
        // for (let i = 0; i < nums.length; i++) {
        //     map.set(nums[i], i);
        //     if (map.get(nums[i]) === nums[i] && map.has(nums[i])) {
        //         return true;
        //     }
        // }
        const rem = [...new Set(nums)];
        return rem.length !== nums.length;
    }
}

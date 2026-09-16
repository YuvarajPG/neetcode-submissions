class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        if (s.length === 0 || t.length === 0) return false;
        const map = new Map<string, number>();
        for (let i = 0; i < s.length; i++) {
            map.set(s[i], (map.get(s[i]) ?? 0) + 1);
        }
        for (let i = 0; i < t.length; i++) {
            map.set(t[i], (map.get(t[i]) ?? 0) - 1);
        }
        for (const count of map.values()) {
            if (count !== 0) return false;
        }

        return true;
    }
}

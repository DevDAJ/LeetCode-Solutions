function twoSum(nums: number[], target: number): number[] {
    const hasAppeared: Map<number, number> = new Map()
    for(let i = 0; i < nums.length; i++){
        if (hasAppeared.has(target - nums[i])) 
            return [hasAppeared.get(target - nums[i])!, i]
        hasAppeared.set(nums[i], i)
    }
    return []
};

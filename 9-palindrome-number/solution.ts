function isPalindrome(x: number): boolean {
    const numArr = x.toString().split("").map(v => Number(v))
    for (let i = 0; i <= numArr.length / 2; i++)
        if (numArr[i] - numArr[numArr.length - (i + 1)] !== 0) return false
    return true
};

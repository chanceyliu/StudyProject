### 题目

```
给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

```


注意:

每个数组中的元素不会超过 100
数组的大小不会超过 200
示例 1:

输入: [1, 5, 11, 5]

输出: true

解释: 数组可以分割成 [1, 5, 5] 和 [11].

示例 2:

输入: [1, 2, 3, 5]

输出: false

解释: 数组不能分割成两个元素和相等的子集.

```

```

### 思路

（此处撰写思路）

### 代码

```typescript
function canPartition(nums: number[]): boolean {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0,
    maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
    return false;
  }
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
}

```

**复杂度分析**

- 时间复杂度：O(max(n,log k)) 其中 N 为数组长度
- 空间复杂度：O(1)

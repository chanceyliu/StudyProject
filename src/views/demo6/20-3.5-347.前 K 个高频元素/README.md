### 题目

```
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。



示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]


提示：

1 <= nums.length <= 10^5
k 的取值范围是 [1, 数组中不相同的元素的个数]
题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的


进阶：你所设计算法的时间复杂度 必须 优于 O(n log n) ，其中 n 是数组大小。

```

### 思路

（此处撰写思路）

### 代码

```typescript
function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  return [...countMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((i) => i[0]);
}
```

**复杂度分析**

- 时间复杂度：O(n)
- 空间复杂度：O(n)

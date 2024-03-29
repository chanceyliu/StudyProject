### 题目

```
对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：

对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。

那么数组 A 是漂亮数组。

 

给定 N，返回任意漂亮数组 A（保证存在一个）。

 

示例 1：

输入：4
输出：[2,1,4,3]


示例 2：

输入：5
输出：[3,1,2,5,4]

 

提示：

1 <= N <= 1000

```

### 思路

（此处撰写思路）

### 代码

```typescript
function beautifulArray(n: number): number[] {
  if (n === 1) return [1];
  return [
    ...beautifulArray(Math.ceil(n / 2)).map((i) => 2 * i - 1),
    ...beautifulArray(Math.floor(n / 2)).map((i) => 2 * i),
  ];
}

```

**复杂度分析**

- 时间复杂度：O() 
- 空间复杂度：O()

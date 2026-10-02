
### ✅ nine-nine.md（干净无乱码版本）
```markdown
# 九九乘法表（双层循环练习）
## 题目要求
使用嵌套循环，在控制台打印九九乘法表。

## 思路
- 外层循环i：控制行数
- 内层循环j：控制每行输出多少式子
- 每一行结束后换行

## 完整C代码
```c
#include <stdio.h>
int main()
{
    int i,j;
    for(i = 1; i <= 9; i++)
    {
        for(j = 1; j <= i; j++)
        {
            printf("%d*%d=%d  ",j,i,i*j);
        }
        printf("\n");
    }
    return 0;
}

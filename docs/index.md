# 我的个人技术学习博客

## C语言学习笔记
预习了循环结构，for循环、while循环。

### 例子：水仙花数
```c
#include <stdio.h>
int main()
{
    int i;
    for(i=100;i<=999;i++)
    {
        int a=i/100;
        int b=i/10%10;
        int c=i%10;
        if(a*a*a + b*b*b + c*c*c == i)
        {
            printf("%d 是水仙花数\n",i);
        }
    }
    return 0;
}

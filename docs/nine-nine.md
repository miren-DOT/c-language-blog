\# C语言：九九乘法表

\## 代码示例

```c

\#include <stdio.h>

int main()

{

&#x20;   int i,j;

&#x20;   for(i=1;i<=9;i++)

&#x20;   {

&#x20;       for(j=1;j<=i;j++)

&#x20;       {

&#x20;           printf("%d\*%d=%d\\t",j,i,i\*j);

&#x20;       }

&#x20;       printf("\\n");

&#x20;   }

&#x20;   return 0;

}




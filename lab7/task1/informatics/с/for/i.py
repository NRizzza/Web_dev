import math

a = int(input())
ans = 0
n = int(math.sqrt(a))
for i in range(1, n+1):
    if a % i == 0:
        if i * i == a:
            ans += 1
        else:
            ans += 2

print(ans)
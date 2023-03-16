import math

a = int(input())
b = int(input())

for i in range(max(a,0), b+1):
    x = int(math.sqrt(i))
    if x*x == i:
        print(i, end=" ")
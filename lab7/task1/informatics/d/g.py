n = int(input())
a = input().split(" ")

for i in range(int(n/2)):
    b = a[i]
    a[i] = a[n-1-i]
    a[n-1-i] = b

for i in range(n):
    print(a[i], end=" ")
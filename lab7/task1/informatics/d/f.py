n = int(input())
a = input().split(" ")

ans = 0

for i in range(1, n-1):
    if int(a[i-1]) < int(a[i]) and int(a[i+1]) < int(a[i]):
        ans += 1
print(ans)
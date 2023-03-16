n = input()
n = input().split(" ")
ans = 0
for i in n:
    if int(i) > 0:
        ans += 1
print(ans)
n = int(input())

while n%2 == 0 or n == 1:
    if n == 1:
        print("YES")
        break
    n /= 2
else:
    print("NO")
def power(b, n):
    res = 1.0
    for i in range(n):
        res *= b
    return res


a = input().split(" ")


print(power(float(a[0]), int(a[1])))
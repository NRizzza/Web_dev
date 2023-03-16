def min(a, b, c, d):
    if a > b:
        A = b
    else:
        A = a

    if c > d:
        B = d
    else:
        B = c

    if A > B:
        return B
    return A


a = input().split(" ")

print(min(int(a[0]), int(a[1]), int(a[2]), int(a[3])))
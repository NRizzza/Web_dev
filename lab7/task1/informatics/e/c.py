def xor(a, b):
    if a == b:
        return 0
    else:
        return 1


n = input().split(" ")

print(xor(n[0], n[1]))
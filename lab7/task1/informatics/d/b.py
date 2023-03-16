n = int(input())
n = input().split(" ")

for i in n:
    if int(i) % 2 == 0:
        print(i, end=" ")

v = int(input())
t = int(input())
result = 0
if v > 0:
    result = (v * t)
else:
    result = (-v * t) % 109
    result = 109 - result

print(result % 109)
import math

def zeros(n):
    if(not n):
        return 0
    cnt = 0
    max = int(math.log(n,5)//1)
    sum_range = range(1, max+1)
    for num in sum_range:
        cnt += int(n//(5**num))
    return cnt

print(zeros(6))


# Apparently this works:

# def zeros(n):
#   x = n/5
#   return x+zeros(x) if x else 0

# The code is very simple; what I don't understand is the math. Further reading required.
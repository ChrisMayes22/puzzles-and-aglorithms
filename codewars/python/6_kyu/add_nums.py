def get_sum(a, b):
    if a == b:
        return a
    big = a if a > b else b
    small = b if b < a else a
    i = big
    while i >= small:
        big += i
        i -=1
    return big


print(get_sum(2, 0))



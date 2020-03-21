f = open('seashells.txt', 'r').readlines()
f.reverse()
print(f)

r = open('reversed.txt', 'w')
r.writelines(f)
r.close()

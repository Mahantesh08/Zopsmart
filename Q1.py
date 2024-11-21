def sum(value = 0):
    def check(x = None):
        if x is None:
            return value
        return sum(value + x)
    return check

res1 = sum(1)(2)(3)(4)(5)()
res2 = sum(3)(7)()

print(res1)
print(res2)
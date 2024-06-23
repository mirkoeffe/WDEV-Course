-- Mathematical operator

print(5 + 5) -- addition
print(5 - 25) -- subtraction
print(5 * 5) -- multiply
print(26 / 5) -- divide
print(3 ^ 2) -- power

print(17 / 5)
print(17 % 5) -- module
-- it prints how much is left
--[[ 17 / 5
5 10 15

17 - 15 
2 ]]
-- it prints 25
print(5 + 2 * 10) -- 5 + 20

-- it prints 70
print((5 + 2) * 10) -- 7 * 10

-- it prints 50
print((5 + (2 * 10)) * 2)
-- (5 + 20) * 2
-- 25 * 2

print(math.pi) -- 3.1415926535898

-- Minimum value of the values
print(math.min(10, 5, 100, 80)) -- it prints 5

-- Maximum value of the values
print(math.max(10, 12, 200)) -- it prints 200

-- it will rounds up
print(math.ceil(1.23)) -- it prints 2

-- it will rounds down
print(math.floor(1.98)) -- it prints 1

print(math.random()) -- it prints always the same random number

-- it generates a random number every second
math.randomseed(os.time())
print(math.random())

-- it generates a random number between 1 and 10 every second
print(math.random(10))

-- it generates a random number btwn 10 and 100 every second
print(math.random(10, 100))

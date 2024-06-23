-- Strings

local x = "str"
local y = [[asadaf
dasfa
dsada
  dfas
    fdas
        fdas]]
local z = "Hello World"

print(x)
print(y)

-- the # will prints the length of the string
print(#z) -- it prints the length of the string

-- putting the hashtag at the beginning of the string will be the same result as mentioned above
local a = #"Hello"
print(a)

-- converting a number to a string
local num = 20

local str = tostring(num)

print(num, str)

-- veryfing the type of the value
print(type(num), type(str))

local stri = "Hello World!"
print(stri)
-- printing the string in lowercase
print(string.lower(stri))
-- printing the string in uppercase
print(string.upper(stri))
-- printing the length of the string
-- the # is a shortcut
print(string.len(stri))

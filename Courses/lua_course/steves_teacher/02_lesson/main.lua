-- Variables are places that store values. There are three kinds of variables in Lua: global variables, local variables, and table fields

-- local variables are not allowed to be used outside this file
local x = 6
print(x) -- it prints 6

local y = 3
print(x + y) -- it prints 9

local z = x + y

-- Global variables are allowed to be used outside of this file
_G.GlobalVar = 10
print(GlobalVar + z) -- it prints 19

-- Floating point variable
local f = 3.13

-- Integer type variable
local m = 3

-- Strings variable
local s = "fdafdas --"
local str = [[
  adafda
fdasfa
]]

print(str)

local name = "Mirko"

print("Hello my name is " .. name)

name = "Steve"
print("I have a cool name, " .. name)

-- boolean
local boo = true
local boo1 = false

local one, two, three = "one", 2, false
print(two)
print(one)
print(three)


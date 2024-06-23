-- The first index of the array is 1

local tbl = {
  "Name",
  2,
  9.9,
  true,
  false,
  "Surname",
  {
    "ok",
    "cool"
  }
}

for i = 1, #tbl do
  print(tbl[i])
end

print("The following method is to print the different indexes")

print(tbl[2])    -- it prints 2
print(tbl[1])    -- it prints Name
print(tbl[7][1]) -- it prints the first index of the second table("ok")

-- table.insert will add a value in the table
local nums = { 1, 3, 5, 7, 9 }

--       table, pos, value
table.insert(nums, 3, 19)

for i = 1, #nums do
  print(nums[i])
end

print("The following method will remove the 4 index of the table")

table.remove(nums, 4)
for i = 1, #nums do
  print(nums[i])
end

print("The following method will print the index and the corresponding value")

local numrs = { 2, 4, 6, 8, 0 }

-- for index, value in pairs(table) do
-- run something
-- end
for k, v in pairs(numrs) do
  print(k, v)
end


-- Multidimensional tables --
local numbers = {
  { 1, 8, 3 },
  { 4, 2, 6 },
  { 7, 5, 9, 5, 11, 9, 7 },
}
-- it prints the 2 index of the first table
print(numbers[1][2]) -- 8
-- it prints the 3 index of the second table
print(numbers[2][3]) -- 6
-- it prints the length of the third table
print(#numbers[3])   -- 7
-- it prints all the values stored inside all the tables
for c = 1, #numbers do
  for j = 1, #numbers[c] do
    print(numbers[c][j])
  end
end
--[[
1
8
3
4
2
6
7
5
9
5
11
9
7 ]]
local numb = {
  { 1, 2, 3 },
  {
    { 1,  2,  4 },
    { 11, 23, 43 },
  },
}

print(numb[2][2][2]) -- it prints 23, the 2nd index of the 2nd subtable, inside the 2nd table

-- converting values to a string
local val = { 1, 2, 3 }

print(table.concat(val, " ")) -- it prints 1 2 3 as a text

local tble = {
  name = "Mirko",
  age = 32,
  work = "Bartender"
}

print(tble["name"]) -- Mirko
print(tble["age"]) -- 32
print(tble["work"]) -- Bartender

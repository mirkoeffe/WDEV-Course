local x = 2

if x < 5 then
  print("x is less than 5")
end

--[[
  and
  or
  not
  > more than
  < less than
  >= more or equal
  <= less equal
  ~= not equal
  == equal
]]
local y = 4

if y < 5 and y >= 2 then
  print("x is between 4 and 3 (both included)")
end

local age = 18
local birthday = true

if age >= 18 then
  print("You may enter the bar")

  if birthday then
    print("You get a free drink on us")
  end
elseif age < 13 then
  print("The water slides are down the road")
else
  print("You can't enter the bar")
end


local agee = 19

-- this variable stores the if statement
local name = agee > 18 and "Mike" or "Jeff"

print(name)
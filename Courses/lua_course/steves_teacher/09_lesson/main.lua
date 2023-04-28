local function sayHello(name)
  local name = name or "Jack"
  print("Hello, I'm " .. name .. "!")
end

sayHello()        -- it takes Jack because there's no value (false) passed as an argument
sayHello(false)   -- this is the same as the previous one
-- sayHello(true)    -- this will print an error because no value are passed
sayHello("Mirko") -- it takes Mirko
sayHello("Fabian")
--------------------------------------------------
--------------------------------------------------
local function sum(num1, num2)
  print(num1 + num2)
end

local x = 10

sum(10, x) -- 20
--------------------------------------------------
--------------------------------------------------
local function summ(num1, num2)
  -- local result = num1 + num2
  -- return result

  -- the following method is simpler
  return num1 + num2
  -- after return the function stops to work
end

local c = 20
local ans = summ(10, c)
print("The answer is: " .. ans) -- The answer is: 30
--------------------------------------------------
--------------------------------------------------
local function sumb(nu1, nu2)
  local val = nu1 + nu2

  if val == 10 then
    return val
  end

  if val < 100 then
    return -val
  end

  return val * 2
end

local g = 2

local anss = sumb(101, g)

print("The answer is: " .. anss) -- The answer is: 206

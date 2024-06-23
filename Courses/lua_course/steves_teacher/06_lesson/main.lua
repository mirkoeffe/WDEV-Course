-- Loops
-- is a way to repeat code so it continuosly happen until we say to stop it

for i = 1, 10, 2 do
  print(i)
end

print("The following method is the reverted one!")

for b = 10, 1, -2 do
  print(b)
end

-- infinite loop
-- the while loop without break will run until we stop the code
while true do
  print("Mirko")
  break
end

local count = 0
while true do
  count = count + 1
  print("Jeff")

  if count > 10 then
    break
  end
end

local kount = 10
repeat
  kount = kount + 1

  print("Oscar")
  -- this loop will reapeat until kount is true
until kount > 5

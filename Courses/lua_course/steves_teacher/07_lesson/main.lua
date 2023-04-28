-- User Input

print("What is your name?")
-- io.read will store the value in the variable
local answer = io.read()
-- this value we'll input it through the command line
print("Name:", answer)

-- this is the same as print but we can input the value in the same line
io.write("Enter your name:")
local ans = io.read()

print("Name:", ans)
-- Working with Files

-- io.output creates a new file in the working directory
-- if the file already exist it will be overwritten with a new one
--! io.output("myfile.txt")

-- io.write is used to write inside the newly created file
--! io.write("if you run the code you and then open the file you'll read this line!")

-- io.input([file]) it opens the named file (in text mode)
--! io.input("myfile.txt")

-- io.read Reads the file, according to the given formats, which specify what to read.
--! local fileData = io.read("*all")

--! print(fileData)

-- io.close closes the file, in order to allow other programs to access the file
--! io.close()

 
local file = io.open("myfile.txt", "w")

if file ~= nil then
  file:write("Hello there, this method is better then all the io methods above!")
  file:close()
else
  print("Could not open the file!")
end


local filee = io.open("myfile.txt", "a")

if filee ~= nil then
  filee:write("\nThis will append the text in a new line")
  filee:close()
else
  print("Could not open the file!")
end
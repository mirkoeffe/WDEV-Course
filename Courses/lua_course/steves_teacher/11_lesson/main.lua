-- we are importing the modules created in the custom.lua file

local mod = require("custom")

print(mod.sum(10, 5))

mod.sayHello("Mike")

mod.myName("Mirko")

print(mod.multiply(2, 3))
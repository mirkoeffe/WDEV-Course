Mod = {
  sum = function(x, y)
    return x + y
  end,

  multiply = function (a, b)
    return a * b
  end
}

function Mod.sayHello(name)
  print("Hello, " .. name)
end

function Mod.myName(arg)
  print("My name is ".. arg)
end


return Mod

// Add your functions here
function map(obj, fx) {
    const arr = []
    for (const key in obj) {
      arr.push(fx(obj[key]))
    }
    return arr
  }
  
  function reduce(obj, fx, acc) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (acc) {
      i = 0
    } else {
      acc = obj[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      acc = fx(acc, obj[keys[i]])
    }
    return acc
  }
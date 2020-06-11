let num = 266219,
  str = num + "",
  arr = str.split(''),
  sum = arr.reduce(function(acc, item) {
    return acc * item
  }, 1), 
  trr = sum ** 3,
  grr = trr + "";
  


alert(grr.slice(0, 2));
console.log(sum);





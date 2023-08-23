// way 1:
// we can add some thing in parameter as initial
// for integer put 0, for string put '' , for array   put [], for object put {}.


function name (first , last=''){
  const fullName = first + ' ' + last ;
  // console.log(fullName);
  return fullName;
}

console.log(name('aminur sarker'));

function add (a=0 , b=0) { 
const result = a+b;
console.log (a,b, result)
return result;
}
add();

// way 2:
function add (a,b) {
  return a+b;
}
console.log(add(5,5));

// way 3: arrow function
const add2 = (a,b) => a+b;
const sum = add2(5,5);
console.log(sum);
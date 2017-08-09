// check whether all parenthesis in string are on the right place
// Valid: "My name is (John [Luis] and I have some [secret (information)])"
// Invalid: "This is (incorrect [information)]"
function isValid(str) {

  let stack = []

  !str.split('').forEach(sym => {
    if (sym === '[' || sym === '(') {
      stack.push(sym)
    }
    else if (sym === ']' && stack[stack.length - 1] === '[') {
      stack = stack.slice(0, -1)
    }
    else if (sym === ')' && stack[stack.length - 1] === '(') {
      stack = stack.slice(0, -1)
    }
  })

  return !stack.length
}

console.log(isValid('[hello (may (be) )]'))

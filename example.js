// Example 0
function useState(init) {
  var _val = init // _val is a local variable created by useState
  function state() {
    // state is an inner function, a closure
    return _val // state() uses _val, declared by parent funciton
  }
  function setState(newVal) {
    // same
    _val = newVal // setting _val without exposing _val
  }
  return [state, setState] // exposing functions for external use
}
var [foo, setFoo] = useState(0) // using array destructuring
console.log(foo()) // logs 0 - the initialValue we gave
setFoo(1) // sets _val inside useState's scope
console.log(foo()) // logs 1 - new initialValue, despite exact same call

// function useState(initialValue) {
//   var _val = initialValue
//   // no state() function
//   function setState(newVal) {
//     _val = newVal
//   }
//   return [_val, setState] // directly exposing _val
// }
// var [foo, setFoo] = useState(0)
// console.log(foo) // logs 0 without needing function call
// setFoo(1) // sets _val inside useState's scope
// console.log(foo) // logs 0 - oops!!

// Example 1
function Counter() {
  const [count, setCount] = useState(0) // same useState as above
  return {
    click: () => setCount(count() + 1),
    render: () => console.log('render:', { count: count() })
  }
}
const C = Counter()
C.render() // render: { count: 0 }
C.click()
C.render() // render: { count: 1 }

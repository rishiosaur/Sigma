const expression = require('./expression')

var array = [{type: "constant", value: 3}, {type: "constant", value: 3, operation: "+"}]
var x = new expression(array)

test('initializes properly', () => {
  expect(x.terms).toEqual([{type: "constant", value: 3}, {type: "constant", value: 3, operation: "+"}]);
  expect(x.terms).toBeDefined()
});

test('creates string properly', ()=>{
  expect(x.toString()).toBe("3+3")
})

test('rejects any value other than String or Object', ()=>{
  expect(()=>{new expression(0)}).toThrow(TypeError)
})

test('parses string correctly', ()=>{

})

test('')
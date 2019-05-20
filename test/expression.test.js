const expression = require('../src/expression');

var constantTest = [{type: "constant", value: 3}, {type: "constant", value: 3, operation: "+"}];
var x = new expression(constantTest);

var variableTest = [{type: "constant", value: 3}, {type:"variable", coefficient: 3, variable: "x", operation: "+"}];
var y = new expression(variableTest);

var exponentTest = [{type: "constant", value: 3, exponent: 4}, {type: "constant", value: 3, operation: "+"}];
var z = new expression(exponentTest);
//
//  PROTOTYPE FUNCTION TESTING
//
describe('prototypal function testing',()=>{
  test('initializes properly', () => {
    expect(x.terms).toEqual([{type: "constant", value: 3}, {type: "constant", value: 3, operation: "+"}]);
    expect(x.terms).toBeDefined();
  });

  test('creates string properly using constants', ()=>{
    expect(x.toString()).toBe("3+3");
  });

  test('creates string properly using variables and coefficients', ()=>{
    expect(y.toString()).toBe("3+3x");
  });

  test('rejects any value other than String or Object', ()=>{
    expect(
      ()=>{new expression(0)}
    ).toThrow(TypeError);
  });

  test('creates string properly with exponents using constants', ()=>{
    expect(z.toString()).toBe("3^4+3");
  });

  test('creates string properly with exponents using variables', ()=>{
    var a = new expression([{type: "constant", value: 3}, {type:"variable", coefficient: 3, variable: "x", operation: "+", exponent: "3"}]);
    expect(a.toString()).toBe("3+3x^3");
  });
});
//
//  OPERATIONS TESTING
//
/*
test('adding a constant', ()=>{

})

test('adding a variable', ()=>{

})

test('subtracting a constant', ()=>{

})

test('')*/

test('multiplying by a constant',()=>{
  var a = new expression([{type: "constant", value: 3}, {type:"variable", coefficient: 3, variable: "x", operation: "+", exponent: "3"}])
  
  expect(a.multiply(3)).toEqual([{type: "constant", value: 9}, {type:"variable", coefficient: 9, variable: "x", operation: "+", exponent: "3"}]);
});

test('multiplying by a variable, with the same variable', ()=>{
  var a = new expression([{type: "constant", value: 3}, {type:"variable", coefficient: 3, variable: "z", operation: "+", exponent: 3}])
  expect(a.multiply("z")).toEqual([{type: "variable", coefficient: 3, variable: "z"}, {type:"variable", coefficient: 3, variable: "z", operation: "+", exponent: 4}])
});

test('multiplying a variable by another variable', ()=>{
  var a = new expression([{type: "constant", value: 3}, {type:"variable", coefficient: 3, variable: "r", operation: "+", exponent: 3}])
  expect(a.multiply("z")).toEqual([{type: "variable", coefficient: 3, variable: "z"}, {type:"variable", coefficient: "3z", variable: "r", operation: "+", exponent: 3}])
});
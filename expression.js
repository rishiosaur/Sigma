
/*
Expression Object:
[{type: "constant", value: 3},{type: "variable", operation: ""},{}]
*/

var Expression = function(val){
    this.terms = []
    this.string = []
    if (typeof val === "string") {
        this.terms = val
    }
    else if (typeof val === "object") {

        this.terms = val
    }
    else {
        throw new TypeError('Error: You can only initialize an Expression using an Object or String.')
    }
}

Expression.prototype.add = function(val){
    if (typeof val === "string"){

    } else if (typeof val == "object"){
        
        this.terms.push(val)
    }
}

Expression.prototype.subtract = function(){
    //TODO: Subtraction
}

Expression.prototype.multiply = function(){
    this.terms.map((value)=>{

    })
}

Expression.prototype.toString = function(){
    this.terms.map((value, index)=>{
        if(index==0){
            this.string.push(value.value)
        } else {
            this.string.push(`${value.operation}${value.value}`)
        }
        //TODO: Implement Variables here
    })
    return this.string.join("")
}

module.exports = Expression;

var array = [{type: "constant", value: 3}, {type: "constant", value: 3, operation: "+"}]
var x = new Expression(array)
console.log(x.toString())
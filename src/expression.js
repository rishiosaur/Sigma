/*
Expression Object:
[{type: "constant", value: 3},{type: "variable", operation: ""},{}]
*/

var Expression = function (val) {
    this.terms = [];
    this.string = [];
    if (typeof val === "string") {
        this.terms = val;
    } else if (typeof val === "object") {
        //TODO: Validate array object
        this.terms = val;
    } else {
        throw new TypeError('Error: You can only initialize an Expression using an Object or String.');
    }
};

Expression.prototype.add = function (val) {
    if (typeof val === "string") {

    } else if (typeof val == "object") {

        this.terms.push(val);
    }
};

Expression.prototype.subtract = function () {

};

Expression.prototype.multiply = function (val) {
    if (typeof val == "number") {
        this.terms.map((value, index) => {
            if (value.type == "variable") {
                // Multiplying a variable by a constant gives that explicitly -> x*2 = 2x | this means we must increase the coefficient accordingly.
                this.terms[index].coefficient = this.terms[index].coefficient * val;
            } else if (value.type == "constant") {
                // Obviously, a constant times that constant requires that operation.
                this.terms[index].value = this.terms[index].value * val;
            }
        });
    } else if (typeof val == "string" && val.length == 1) {
        this.terms.map((value, index) => {
            // Checking what the type of term is passed
            if (value.type == "constant") {
                // Replacing the constant type with variable
                this.terms[index].type = "variable";
                //Variables run on coefficients, so this converts the value to a coefficient
                this.terms[index].coefficient = this.terms[index].value;
                //Deleting the previous value key from when the object was of type constant
                delete this.terms[index].value;
                this.terms[index].variable = val;
            } else if (value.type == "variable" && value.variable == val) {
                //When the variable passed to the multiply function is the same as the one in the map function, increase the exponent -> x*x = x^2
                this.terms[index].exponent++;
            } else if (value.type == "variable" && value.variable != val) {
                this.terms[index].coefficient += val;
                //TODO: Recursive function to generate expression object for multiple variable coefficient
            }
        });
    }
    return this.terms;
};

Expression.prototype.divide = function (val) {

};

Expression.prototype.simplify = function (val) {

};

Expression.prototype.toString = function () {
    this.terms.map((value, index) => {
        if (index == 0 && value.type == "constant") {
            this.string.push(value.value);
            if (value.exponent) {
                this.string.push(`^${value.exponent}`);
            }
        } else if (index == 0 && value.type == "variable") {
            this.string.push(`${value.coefficient}${value.variable}`);
            if (value.exponent) {
                this.string.push(`^${value.exponent}`);
            }
        } else if (value.type == "variable") {
            this.string.push(`${value.operation}${value.coefficient}${value.variable}`);
            if (value.exponent) {
                this.string.push(`^${value.exponent}`);
            }
        } else {
            this.string.push(`${value.operation}${value.value}`);
            if (value.exponent) {
                this.string.push(`^${value.exponent}`);
            }
        }
    });
    return this.string.join("");
};
Expression.prototype.raw = function () {
    return this.terms;
};

module.exports = Expression;
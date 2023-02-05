// Extendable Calculator
let powerCalc = new Calculator();
let result;

powerCalc.addMethod("*", (a,b) => a*b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("%", (a, b) => a % b);

addCommand = "2+3";
subtractCommand = "2-3";
mulCommand = "2*3";
divCommand = "2/3";
modCommand = "2%3";
expCommand = "2**3";

console.log(`${addCommand} = ${powerCalc.calculate(addCommand)}`);
console.log(`${subtractCommand} = ${powerCalc.calculate(subtractCommand)}`);
console.log(`${mulCommand} = ${powerCalc.calculate(mulCommand)}`);
console.log(`${divCommand} = ${powerCalc.calculate(divCommand)}`);
console.log(`${modCommand} = ${powerCalc.calculate(modCommand)}`);
console.log(`${expCommand} = ${powerCalc.calculate(expCommand)}`);

function Calculator() {

    this.a = null;
    this.b = null;
    this.operators = ['+','-'];
    this.ops_mapping = {
        '+' : (a, b) => {
            return a + b
        },
        '-' : (a,b) => {
            return a - b
        }
    }
    this.addMethod = function(operator, callbackFunction, overwrite = false) {
        
        if (operator in this.ops_mapping && overwrite == false) {
            console.log(`${operator} has already been added. Please add with overwrite true`);
        }   

        console.log(`Successfully added operator '${operator}' functionality to calculator.`)
        this.ops_mapping[operator] = callbackFunction;
        this.operators.push(operator);
        this.operators.sort(this.sortLongestFirst)
    },
    this.calculate = function(command) {
        for (let operator of this.operators) {
            if (command.indexOf(operator) == -1) {
                continue;
            }
            tokens = command.split(operator);
            if (tokens.length != 2) {
                return 'Error! Please ensure you enter only 2 inputs';
            }
            return this.ops_mapping[operator](+tokens[0], +tokens[1]);
        }
        return `No valid operator found!. Please add.`
    }
    this.sortLongestFirst = (a,b) => {
        // So more specific operators (usually assumed to be longer will be parsed first)
        if (a.length > b.length) return -1;
        if (a.length == b.length) return 0;
        if (a.length < b.length) return 1;
    }
}

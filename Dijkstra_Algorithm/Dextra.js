let arg = process.argv;
let str = arg[2].replaceAll(' ', '');
//let str = '1 + 2 * ( 4 / 2 ) ^ 2 ^ 3 - 1';
let spl = str.split('')
let Out = '';
//---------------------------------приоритеты операций
let priority= new Object();
priority['('] = 0;
priority['-'] = priority['+'] = 1;
priority['*'] = priority['/'] = 2;
priority['^'] = 3;

let stack = [];

//---------------Algorithm---------------------------
for(let token = 0; token < spl.length; ++token){
    if(spl[token] === "("){
        stack.push(spl[token]);
        continue;
    }

    if(spl[token] === "^"){
        stack.push(spl[token]);
        continue;
    }
    if(spl[token] === ")"){
        while(stack.at(-1) !== "("){
            Out += stack.pop();
        }
        stack.pop();
        continue;
    }
    if(/\d/.test(spl[token])){
        Out += spl[token];
    }

    else{
        if (stack.length === 0) {
            stack.push(spl[token]);
        }
        else {
            let first = stack.at(-1);
            if (priority[spl[token]] > priority[first]) {
                stack.push(spl[token]);
            }
            if (priority[spl[token]] === priority[first]) {
                Out += stack.pop();
                stack.push(spl[token]);
            }
            if (priority[spl[token]] < priority[first]) {
                while (priority[spl[token]] <= priority[first]) {
                    Out += stack.pop();
                    first = stack.at(-1);
                }
                stack.push(spl[token]);
            }
        }
    }
}

while(stack.length !== 0){
    Out += stack.pop();
}

console.log("Reverse Polish Notation: ", Out, '\n');
console.log("Calculating the result of Polish Notation.....", '\n');

//-----------------------decode------------------------
function decode(Out) {
    let splString = Out.split("");
    let stack =[];
    if(splString === ''){
        return "Empty String";
    }
    for(let i=0; i<splString.length; i++) {
        if(!isNaN(splString[i])) {
            stack.push(splString[i]);
        }
        else {
            let a = stack.pop();
            let b = stack.pop();
            if(splString[i] === "+") {
                stack.push(parseInt(a) + parseInt(b));
            } else if(splString[i] === "-") {
                stack.push(parseInt(b) - parseInt(a));
            } else if(splString[i] === "*") {
                stack.push(parseInt(a) * parseInt(b));
            } else if(splString[i] === "/") {
                stack.push(parseInt(b) / parseInt(a));
            } else if(splString[i] === "^") {
                stack.push(Math.pow(parseInt(b), parseInt(a)));
            }
        }
    }
    if(stack.length > 1) {
        return "Error";
    }
    else {
        return stack[0];
    }
}
//создаём переменную для сравнения в eval
let str_eval = str;
for(let i =0; i < str.length; ++i){str_eval = str_eval.replace("^", "**")}

//---------------------------
if (eval(str_eval) === decode((Out))){
    console.log("Checking the correct calculation of Polish Notation.......", '\n');
    console.log("Congratulations! The result is correct, the lines match!", '\n');
}

console.log('The result of the expression: ',decode((Out)));
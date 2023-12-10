let arg = process.argv;
let str = arg[2];
//let str = '1 + 2 * ( 4 / 2 ) ^ 2 ^ 3 - 1';

let spl = str.split(' ')
let Out = '';
//---------------------------------
let priority= new Object();
priority['-'] = priority['+'] = 1; priority['*'] = priority['/'] = 2; priority['^'] = 3; priority['('] = 0; //приоритеты операций

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
        let first_1 = stack.at(-1);
        while(first_1 !== "("){          //todo м.б убрать pop и at и оставить только pop
            Out += stack.at(-1);
            stack.pop();
            first_1 = stack.at(-1);
        }
        stack.pop();
        continue;
    }
    if(/\d/.test(spl[token])){
        Out += spl[token];
    }

    else{
        let first = stack.at(-1);
        if(stack.length === 0  ) {
            stack.push(spl[token]);
        }
        else {

            if (priority[spl[token]] > priority[first]) {
                stack.push(spl[token]);
            }
            if (priority[spl[token]] === priority[first]) {
                Out += first;
                stack.pop();
                stack.push(spl[token]);
            }
            if (priority[spl[token]] < priority[first]) {
                while (priority[spl[token]] <= priority[first]) {
                    Out += first;
                    stack.pop();
                    first = stack.at(-1);
                }
                stack.push(spl[token]);

            }
        }
}   }
while(stack.length !== 0){
    Out += stack.pop();
}

console.log("Reverse Polish Notation: ",Out, '\n');
console.log("Calculating the result of Polish Notation.....", '\n');

//-----------------------decode------------------------
function reversePolish(newStr) {
    let Nstr = newStr.split("");
    let stack =[];
    if(Nstr === ''){
        return 0;
    }
    for(let i=0; i<Nstr.length; i++) {
        if(!isNaN(Nstr[i])) {
            stack.push(Nstr[i]);
        }else {
            let a = stack.pop();
            let b = stack.pop();
            if(Nstr[i] === "+") {
                stack.push(parseInt(a) + parseInt(b));
            } else if(Nstr[i] === "-") {
                stack.push(parseInt(b) - parseInt(a));
            } else if(Nstr[i] === "*") {
                stack.push(parseInt(a) * parseInt(b));
            } else if(Nstr[i] === "/") {
                stack.push(parseInt(b) / parseInt(a));
            } else if(Nstr[i] === "^") {
                stack.push(Math.pow(parseInt(b), parseInt(a)));
            }
        }
    }
    if(stack.length > 1) {
        return "Error";
    }else {
        return stack[0];
    }
}
//создаём переменную для сравнения в eval
let str_eval = str;
for(let i =0; i < str.length; ++i){str_eval = str_eval.replace("^", "**")}

//---------------------------
if (eval(str_eval) === reversePolish((Out.toString()))){
    console.log("Checking the correct calculation of Polish Notation.......", '\n');
    console.log("Congratulations! The result is correct, the lines match!", '\n');
}

console.log('The result of the expression: ',reversePolish((Out.toString())));
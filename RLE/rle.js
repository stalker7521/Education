let fs = require('fs');
let arg = process.argv;
let inText;
let testString = "";
let i = 0, n = 1;
let mode =  arg[2];
let directory_in = arg[3];
let directory_to = arg[4];

//console.log(arg)

//=================================encoding======================================

if (mode === "code"){                 /* выбираем режим работы программы*/
    fs.readFile(directory_in, (err,data) => {
        if (err){
            console.error(err);
            return;
        }

        inText = data.toString();
        //console.log(inText);

        while (i < inText.length){
            let symb = inText.charAt(i);
            while(inText.charAt(i) === inText.charAt(i+n))
                n++;

            if (  (symb === "#")|| (4 <= n && n <= 255) ){
                testString += "#" + String.fromCharCode(n) + symb;
            }
             else if (n <= 3){
                testString += symb.repeat(n);
            }
            else {
                let counter255 = (Math.floor(n / 255));

                for (let x = 0; x < counter255; x++) {
                    testString += '#' + String.fromCharCode(255) + symb;
                }

                testString += '#' + String.fromCharCode((n % 255)) + symb;
            }
            i += n;
            n  = 1;
        }
        //console.log(testString);
        fs.writeFileSync(directory_to, testString);
    });
}


//=================================decode======================================

if (mode === "decode"){                                /* выбираем режим работы программы*/

    fs.readFile(directory_in, (err,data) => {

        if (err) {
            console.error(err);
            return;
        }

        inText = data.toString();

        while (i < inText.length){

            let symb = inText.charAt(i);
            if (symb !== "#"){
                testString += symb;
                i += 1;
            }

            else {
                let counter = inText.charAt(i+1).charCodeAt(0);
                testString += inText.charAt(i+2).repeat(counter);
                i += 3;
            }

        }

        //console.log(testString);
        fs.writeFileSync(directory_to, testString);
    })
}
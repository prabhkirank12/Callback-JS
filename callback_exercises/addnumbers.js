// readline and require libraries are provided by node environment NOT by browser
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let addNumbers = function(sum, numsLeft, completionCallback){
    if (numsLeft > 0) {
        reader.question("Re-enter a number", function(answer){
            numsLeft = parseInt(answer);
            sum 
            
        })
    }
};


// .question(prompt, callback)


// What is wrong with the following code?

const response = rl.question('What do you think of JavaScript? ', function (answer) {
    // return answer;
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you really think of JavaScript? ', function (truth) {
        // return answer;
        console.log(`You said: ${truth}. Thank you for your honesty.`);

        rl.close();
    });
});

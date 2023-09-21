import readline from "readline-sync";
console.log('Hi! I am a dumb chat bot You can check all the things I can do by typing "help"')
let counter = 0;
let botName =' Bot99';
while (true){
    const answer = readline.question("Give me an answer: ");
    console.log(answer);
    if(answer === 'help'){
        console.log("Here's a list of commands that I can execute!\n\n" +
        "help: Opens this dialog.\n" +
        "hello: I will say hello to you\n" +
        "botInfo: I will introduce myself\n" +
        "botName: I will tell my name\n" +
        "botRename: You can rename me\n" +
        "forecast: I will forecast tomorrow's weather 100% accurately\n" +
        "quit: Quits the program.");
    };
   
    if(answer === 'hello'){
        let answerName = readline.question("What is your name?: ");
        console.log("Hello there", answerName);
    }
    if(answer === 'quit'){
        break;
    }

    if(answer === 'botInfo'){
        console.log('Counter', counter)
    }

    if(answer === 'botName'){
        console.log("My name is currently current name. If you want to change it, type botRename.", botName)
    }

    if(answer === 'botRename'){
        let answerRename = readline.question("RenameBotName: ");
        botName = answerRename;
    }
    counter = counter + 1;

}

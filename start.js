let rpcOptions = document.getElementsByClassName("option")

let botchoices = [
    botrock = {
        counter : rpcOptions.paper,
        beats : rpcOptions.scissors,
        ties : rpcOptions.rock,
    },
    botpaper = {
        counter : rpcOptions.scissors,
        beats : rpcOptions.rock,
        ties : rpcOptions.paper,
    },
    botscissors = {
        counter: rpcOptions.rock,
        beats: rpcOptions.paper,
        ties: rpcOptions.scissors,
    }
]

function randombotChoice(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let botchoice = randombotChoice(0, 2)

function matchoptions(option){
    if (option == botchoices[botchoice].counter){
        console.log("WIN")
    }
}

java.util.Properties = new Properties();
p.setProperty("johndoe.pin", "12345");
p.store(new FileWriter("myfile.properties"), "")

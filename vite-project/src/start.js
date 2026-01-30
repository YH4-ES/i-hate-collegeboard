import './style.css'


let rpcOptions = document.getElementsByClassName("option")

import { stagesetchoices } from './base'

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
print(stagesetchoices.cerbChoices[botchoice].counter)
function matchoptions(option){
    if (option == stagesetchoices.cerbChoices[botchoice].counter){
        console.log("WIN")
    }
}


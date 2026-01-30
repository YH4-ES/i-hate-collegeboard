import './style.css'

let rpcOptions = document.getElementsByClassName("option")
let stage = document.getElementById("location")



const stagesetchoices = {
    cerbChoices : [
        {
        counter : rpcOptions.paper,
        beats : rpcOptions.scissors,
        ties : rpcOptions.rock,
        },
        {
        counter : rpcOptions.scissors,
        beats : rpcOptions.rock,
        ties : rpcOptions.paper,
        },
        {
        counter: rpcOptions.rock,
        beats: rpcOptions.paper,
        ties: rpcOptions.scissors,
        },
  ],
  LuciferChoices : [

  ]

}
  



function randombotChoice(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function addSelection(options){
    for (let i = 0; i < rpcOptions.length; i++){
        rpcOptions[i].addEventListener("click", (el)=>{
            el.preventDefault()
            console.log("jim")
        })
    }
}

addSelection(rpcOptions)

function matchoptions(option){
    if (option == stagesetchoices.cerbChoices[botchoice].counter){
        console.log("WIN")
    }
}

console.log(stage.dataset.room)
if (stage.dataset.room == "cerb"){
    let botchoice = randombotChoice(0, 2)

}
 
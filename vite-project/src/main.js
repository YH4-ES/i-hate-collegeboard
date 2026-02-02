import './style.css'

let rpcOptions = document.getElementsByClassName("option")
let stage = document.getElementById("location")
let desc = document.querySelector(".desc")
let maincontent = document.getElementById("maincontent")
let location = document.getElementById("location")

const stagesetchoices = {
    cerbChoices : [
        {
        counter : rpcOptions.paper,
        beats : rpcOptions.scissors,
        ties : rpcOptions.rock,
        image : "/carb_rock.png"
        },
        {
        counter : rpcOptions.scissors,
        beats : rpcOptions.rock,
        ties : rpcOptions.paper,
        image: "/cerb_paper.png"
        },
        {
        counter: rpcOptions.rock,
        beats: rpcOptions.paper,
        ties: rpcOptions.scissors,
        image: "carb_scissor.png"
        },
  ],
  LuciferChoices_Norm : [
    {
    counter : rpcOptions.paper,
    beats : rpcOptions.scissors,
    ties : rpcOptions.rock,
    image: "luc_rock.png"
    },
    {
    counter : rpcOptions.scissors,
    beats : rpcOptions.rock,
    ties : rpcOptions.paper,
    image: "luc_pap.png"
    },
    {
    counter: rpcOptions.rock,
    beats: rpcOptions.paper,
    ties: rpcOptions.scissors,
    image: "luc_scissors.png"
    },
    {
        counter: null,
        beats: [rpcOptions.paper, rpcOptions.rock, rpcOptions.scissors],
        ties: null,
    }
  ],
  LuciferChoices_Exp : [
    {
    counter : rpcOptions.paper,
    beats : rpcOptions.scissors,
    ties : rpcOptions.rock,
    image: "luc_rock_exp.png"
    },
    {
    counter : rpcOptions.scissors,
    beats : rpcOptions.rock,
    ties : rpcOptions.paper,
    image: "luc_paper_exp.png"
    },
    {
    counter: rpcOptions.rock,
    beats: rpcOptions.paper,
    ties: rpcOptions.scissors,
    image: "luc_scissors_exp.png"
    },
    {
        counter: null,
        beats: [rpcOptions.paper, rpcOptions.rock, rpcOptions.scissors],
        ties: null,
        image: "luc_spellcast_exp.png"
    }
  ]

}

if (rpcOptions.cross) {stagesetchoices.LuciferChoices_Exp[3].counter = cross}


function randombotChoice(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function matchoptions(option, botset, botchoice, nextRoom, loseRoom, tieRoom){
    if (botset[botchoice].counter !== null){
    if (botset[botchoice].counter.length > 1){
        botset[botchoice].counter.forEach(counter => {
            if (option.target.id == counter.id) {
                
                if (!nextRoom){
                    return "win"
                }else{
                console.log("WIN")
                window.location.href = nextRoom;
                }
            }
        })
    } else if (option.originalTarget.id == botset[botchoice].counter.id){
        console.log("WIN")
        
        if (!nextRoom){
            return "win"
        }
        window.location.href = nextRoom;

    }
    }
    if (botset[botchoice].beats !== null){
    if (botset[botchoice].beats.length > 1){
        botset[botchoice].beats.forEach(beats => {
            if (option.target.id == beats.id) {
                console.log("LOSE")
                if (!loseRoom){
                    console.log("cancelled")
                    return "lose"
                }
                window.location.href = loseRoom;
            }
        })
    }else if (option.originalTarget.id == botset[botchoice].beats.id){
        console.log("LOSE")
        if (!loseRoom){
            console.log("cancelled")
            return "lose"
            
        }
        window.location.href = loseRoom;
    }
    }
    if (botset[botchoice].ties !== null){
    if (botset[botchoice].ties.length > 1){
        botset[botchoice].ties.forEach(tie => {
            if (option.target.id == tie.id) {
                console.log("TIE")
                if (!tieRoom){
                    return "tie"
                }
                window.location.href = tieRoom;
            }
        })
    }
    else if (option.originalTarget.id == botset[botchoice].ties.id){
        console.log("TIE")
        if (typeof tieRoom == undefined){
            return "tie"
        }
        window.location.href = tieRoom;
    }
    }
}

function addSelection(options, botset, botchoice, nextRoom, loseRoom, tieRoom){
    for (let i = 0; i < options.length; i++){
        rpcOptions[i].addEventListener("click", (el)=>{
            el.preventDefault()
            console.log(botset[botchoice].image, "jogn")
            return matchoptions(el, botset, botchoice, nextRoom, loseRoom, tieRoom)
        })
    }
}




function battleSetup(min, max, botset, nextRoom, loseRoom, tieRoom){
    let botchoice = randombotChoice(min,max)
    console.log(botset[botchoice].image)
    maincontent.src = botset[botchoice].image
    return addSelection(rpcOptions, botset, botchoice, nextRoom, loseRoom, tieRoom)
    
}

if (stage.dataset.room == "cerb"){
    battleSetup(0, 2, stagesetchoices.cerbChoices, "/start_win.html", "/start_lose.html", "/start_tie.html")
} 
else if (stage.dataset.room == "lucifer"){
    battleSetup(0, 2, stagesetchoices.LuciferChoices_Norm, "/Lucifer_Inter", "/lucifer_lose.html", "lucifer_tie.html")
}
else if (stage.dataset.room == "lucifer2"){
    maincontent.style.width = "62%"
    location.style.marginBottom = "0"
    battleSetup(0, 3,stagesetchoices.LuciferChoices_Exp, "/Lucifer_win", "/lucifer_lose.html", "lucifer_tie.html")
}




function changedesc(i, text, redirect){
    if (i < text.length){
        desc.textContent = text[i].text
        if (text[i].image) {
            maincontent.src = text[i].image
        }
    } else{
        window.location.href = redirect
    }
}

let luciferDialogue = [
    {text:"\"I see that you have made it, damnedest.\""},
    {text:"\"My name and title is Lucifer, the bearer of this land.\""},
    {text:"\"Your will is doomed, but, there is one way to repent\""},
    {text:"\"Face me, and escape your fate... through the noble game of じゃんけんシュート, 가위바위보, Forfices Saxorum et Chartarum or... ROCK. PAPER. SCISSORS.\""},
    {text:"\"ESCAPE from the sin of... gambling...?\""},
    {text:"Ok yeah you've definitely skipped a step."}
]

if (stage.dataset.room == "throne"){
    let i = 0
    
    document.querySelector('.option').addEventListener("click", (e)=>{
        e.preventDefault()
        changedesc(i, luciferDialogue, "/LuciferFight.html")
        i++
    })
}
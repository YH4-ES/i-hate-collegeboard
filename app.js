let maincontent = document.getElementById("maincontent")
let location = document.getElementById("location")

function optionEnable (){
    document.querySelector("option").href = "start\start01.html"
}

function changePage (src, location, background){
    maincontent.src = src
    if (location){
        location.textContent = location
    }
    if (background){
        document.html.style.background = background
    }
}

optionEnable()
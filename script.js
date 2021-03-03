//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let button1 = document.getElementById("button1")

//function button1.onclick()
let body = document.querySelector("body")
button1.onclick=()=>
{
     let colorIndex = Math.trunc(Math.random()*colors.length)

     body.style.backgroundColor=colors[colorIndex]
}



let hexColors=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
let button2 = document.getElementById("button2")
//let h1=document.querySelector("h1")
 

button2.onclick=()=>{
    let chooseColor=()=>{
    return Math.floor(Math.random()*hexColors.length)
}
console.log(chooseColor())
let color2 =
 
`${hexColors[chooseColor()]}${hexColors[chooseColor()]}${hexColors[chooseColor()]}${hexColors[chooseColor()]}${hexColors[chooseColor()]}${hexColors[chooseColor()]}`


body.style.backgroundColor="#"+ color2
document.querySelector("h1").innerHTML="#"+ color2
console.log(color2)
}


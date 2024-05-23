let becarres = document.getElementById("boite");
console.log(becarre);
becarres.childNodes.forEach(becarre => {
    assignPlayToPianoKey(becarre);
});
 
function play(tiles)
{
    var a = new Audio("sounds/" + note + ".wav");
    a.play();
}
 
function assignPlayToPianoKey(pianoKey)
{  
    pianoKey.addEventListener("click", function(event) {
        play(pianoKey.id);
    });
}
 
document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();
    if(key === "d")
    {
        play("do");
        document.getElementById("do").style.backgroundColor = "blue";
    }
    if(key === "f")
    {
        play("re");
        document.getElementById("re").style.backgroundColor = "blue";
    }
    if(key === "g")
    {
        play("mi");
        document.getElementById("mi").style.backgroundColor = "blue";
    }
    if(key === "h")
    {
        play("fa");
        document.getElementById("fa").style.backgroundColor = "blue";
    }
    if(key === "j")
    {
        play("sol");
        document.getElementById("sol").style.backgroundColor = "blue";
    }
    if(key === "k")
    {
        play("la");
        document.getElementById("la").style.backgroundColor = "blue";
    }
    if(key === "l")
    {
        play("si");
        document.getElementById("si").style.backgroundColor = "blue";
    }
    if(key === "e")
    {
        play("dos");
        document.getElementById("dos").style.backgroundColor = "blue";
    }
    if(key === "r")
    {
        play("res");
        document.getElementById("res").style.backgroundColor = "blue";
    }
    if(key === "u")
    {
        play("fas");
        document.getElementById("fas").style.backgroundColor = "blue";
    }
    if(key === "i")
    {
        play("sols");
        document.getElementById("sols").style.backgroundColor = "blue";
    }
    if(key === "o")
    {
        play("las");
        document.getElementById("las").style.backgroundColor = "blue";
    }
});
 
document.addEventListener("keyup", function(event){
    var key = event.key.toLowerCase();
 
    if(key === "d")
    {
        document.getElementById("do").style.backgroundColor = "white";
    }
    if(key === "f")
    {
        document.getElementById("re").style.backgroundColor = "white";
    }
    if(key === "g")
    {
        document.getElementById("mi").style.backgroundColor = "white";
    }
    if(key === "h")
    {
        document.getElementById("fa").style.backgroundColor = "white";
    }
    if(key === "j")
    {
        document.getElementById("sol").style.backgroundColor = "white";
    }
    if(key === "k")
    {
        document.getElementById("la").style.backgroundColor = "white";
    }
    if(key === "l")
    {
        document.getElementById("si").style.backgroundColor = "white";
    }
    if(key === "e")
    {
        document.getElementById("dos").style.backgroundColor = "black";
    }
    if(key === "r")
    {
        document.getElementById("res").style.backgroundColor = "black";
    }
    if(key === "u")
    {
        document.getElementById("fas").style.backgroundColor = "black";
    }
    if(key === "i")
    {
        document.getElementById("sols").style.backgroundColor = "black";
    }
    if(key === "o")
    {
        document.getElementById("las").style.backgroundColor = "black";
    }
});
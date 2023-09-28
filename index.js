var SetaEsquerda = window.document.getElementById("seta-esquerda")
var leonardo = window.document.getElementById("leonardo")
var samanth = window.document.getElementById("samanth")
var bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita(){
    leonardo.style ="display:none"
    bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex;margin-top:60px "

}

function RolarParaEsquerda() {
   leonardo.style = "display:flex"
   bruna.style = "display:none"
   SetaDireita.style =  "display:flex;margin-top:60px "
   SetaEsquerda.style = "display:none"


}
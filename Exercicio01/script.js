function carregar(){
var msg = window.document.querySelector('p#msg')
var img = window.document.querySelector('img#img')
var cor = document.body.style
var hora = (new Date).getHours()


msg.innerHTML = `Agora são ${hora} horas!`

if (hora >= 5 && hora < 12){
    img.src = 'img/manha.png'
    cor.background = '#fec369'
} else if (hora >=12 && hora < 18){
    img.src = 'img/tarde.png'
    cor.background = '#A9531A'
} else {
    img.src = 'img/noite.png'
    cor.background = '#182849'
}


}




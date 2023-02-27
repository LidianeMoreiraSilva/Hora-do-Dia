function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = 9
//var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora>= 5 && hora <12) {
    document.body.style.background = '#FFEB7B'
    img.src = 'manhã.png'
} else if (hora >= 12 && hora < 18 ) {
    document.body.style.background = '#f4b55d'
    img.src = 'tarde.png'
} else {
    document.body.style.background = '#294146'
    img.src = 'noite.png'
}
}
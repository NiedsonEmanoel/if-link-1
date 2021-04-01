let menu = document.getElementsByClassName('option')[0]
let close = document.getElementsByClassName("btn-close")[0]

menu.addEventListener('click', clicar)
close.addEventListener('click', fechar)

function clicar(){
    document.getElementsByTagName('nav')[0].style.display = 'block'
}

function fechar(){
    document.getElementsByTagName('nav')[0].style.display = 'none'
}
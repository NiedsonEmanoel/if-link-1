let menu = document.getElementsByClassName('option')[0]
let fechar = document.getElementsByClassName('jsbtn-close')[0]
let nav = document.getElementsByClassName('jsnav')[0]

menu.addEventListener('click', clicar)
fechar.addEventListener('click', close)

function clicar(){
    nav.style.display = 'block'
}

function close(){
    nav.style.display = 'none'
}

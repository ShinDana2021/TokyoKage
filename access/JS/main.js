var menu = document.querySelector('.icon-menu')
var nav = document.querySelector('.nav')
menu.onclick = function() {
    menu.style.display = 'none'
    nav.style.display = 'block'
    Close.style.display = 'block'
}
// Css cho close
var Close = document.querySelector('.icon-close')
Close.onclick = function() {
    nav.style.display = 'none'
    Close.style.display = 'none'
    menu.style.display = 'block'
}
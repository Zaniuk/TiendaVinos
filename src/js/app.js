

const menu = document.getElementById("menu")
const desplegable = document.getElementById("desplegable")


function desplegarMenu(x) {
    menu.classList.toggle("hide-menu");
    x.classList.toggle("hide");
}
menu.addEventListener("click",() => {
    desplegable.classList.toggle("active")
})

const button = document.querySelector('#button');
const tooltip11 = document.querySelector('#tooltip1');

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
Popper.createPopper(button, tooltip, {
  placement: 'top',
});

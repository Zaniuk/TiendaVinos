
NodeList.prototype.forEach = Array.prototype.forEach;
const menu = document.getElementById("menu")
const desplegable = document.getElementById("desplegable")


function desplegarMenu(x) {
    menu.classList.toggle("hide-menu");
    x.classList.toggle("hide");
}
menu.addEventListener("click",() => {
    desplegable.classList.toggle("active")
})

const button1 = document.querySelector('#button1');
const tooltip1 = document.querySelector('#tooltip1');

const buttons = document.querySelectorAll('.button-tooltip')
buttons.forEach((e) => {
  // e.addEventListener('mouseover', () => {
    let tooltip = e.children[1]
    let button = e
    button.addEventListener('mouseover' ,() => {
      tooltip.classList.toggle('hide-tooltip')
    } ) 
    button.addEventListener('mouseout' ,() => {
      tooltip.classList.toggle('hide-tooltip')
    } ) 
    console.log(e)
  // })
  
  Popper.createPopper(button, tooltip, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [-45, 5],
        },
      },
    ],
  });
  //console.log(e.children[1])
}

);


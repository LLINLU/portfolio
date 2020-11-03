const mouseCursor = () => {
  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove',cursor);
  function cursor(e){
    mouseCursor.style.top =e.pageY + 'px';
    mouseCursor.style.left =e.pageX + 'px';
  }
}

const hoverChange = () => {
  let navLinks = document.querySelectorAll('.nav-link li a');
  let mouseCursor = document.querySelector('.cursor');
  let learnMore = document.querySelector('#learn-more');
  // navLinks.forEach(link => {
  //   link.addEventListener('mouseleave',() => {
  //     mouseCursor.classList.remove('link-grow');
  //     link.classList.remove('hovered-link');

  //   });
  //   link.addEventListener('mouseover',() => {
  //     mouseCursor.classList.add('link-grow');
  //     link.classList.add('hovered-link');
  //   });
  // });

  learnMore.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('button-grow');
      // learnMore.classList.remove('hovered-button');

    });
   learnMore.addEventListener('mouseover',() => {
      mouseCursor.classList.add('button-grow');
      // learnMore.classList.add('hovered-button');

    });
}


const linkChange =() => {
  let navLinks = document.querySelectorAll('.nav-link li a');
  let mouseCursor = document.querySelector('.cursor');
  navLinks.forEach(link => {
    let a= link.getBoundingClientRect();
    console.log(a);
    link.addEventListener('mouseover',(e)=>{

      // mouseCursor.classList.toggle('link-grow');
      link.style.setProperty('--x',(e.clientX-a.top)+'px');
      link.style.setProperty('--y',(e.clientY-a.left)+'px');
    })
  });
}

const formChange = () => {
  let saboten = document.querySelector('#Vector_60');
  if(saboten){
    saboten.addEventListener('mouseleave',() => {
      saboten.classList.remove('translate');
    });
    saboten.addEventListener('mouseover',() => {
      saboten.classList.add('translate');
    });
  }
}




export { mouseCursor, hoverChange, formChange, linkChange }

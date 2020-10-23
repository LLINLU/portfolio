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
  console.log(navLinks);
   navLinks.forEach(link => {
    console.log(link);
    link.addEventListener('mouseleave',() => {
      mouseCursor.classList.remove('link-grow');
      link.classList.remove('hovered-link');
    });
    link.addEventListener('mouseover',() => {
      mouseCursor.classList.add('link-grow');
      link.classList.add('hovered-link');
    });
  });
}




export { mouseCursor, hoverChange }

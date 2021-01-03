const slideAppear = () => {
  const num = document.querySelector ('.simplicruit_num');
  console.log(num);
  let numPosition = num.getBoundingClientRect().left;
  console.log(numPosition);
  let screenPosition = window.innerWidth / 1.2;

    if (numPosition < screenPosition) {
      console.log('yes')
      num.classList.add('num-appear');
    }
    else if (numPosition >= screenPosition && true) {
      num.classList.remove('num-appear');
    }
  }

window.addEventListener('scroll',slideAppear)

export {slideAppear}

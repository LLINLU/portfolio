const scrollApear = () => {
  const introText = document.querySelector ('.text');
  console.log(introText);
  let introPosition = introText.getBoundingClientRect().top;
  console.log(introPosition);
  let screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
      console.log('yes')
      introText.classList.add('intro-appear');
    }
  }

window.addEventListener('scroll',scrollApear)

export {scrollApear}

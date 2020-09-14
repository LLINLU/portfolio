const preloader = () => {
  const preload = document.querySelector(".preload");
  if (preload) {
    window.addEventListener('load', () => {
      const preload = document.querySelector('.preload');
      preload.classList.add('preload-finish');
    });
  }
}

export { preloader };

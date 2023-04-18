window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  const navbarOffSet = navbar.offsetTop;

  if(window.pageYOffset > navbarOffSet) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }  
});
const nav = document.querySelector('#nav');
const banner = document.querySelector('#map-banner');

function scroll() {
  if(scrollY+80 > banner.offsetHeight) {
    nav.classList.add('fixed');
    // document.body.style.paddingTop = nav.offsetHeight+'px';
  }else {
    nav.classList.remove('fixed');
    // document.body.style.paddingTop = 0;
  }
}
scroll();
window.addEventListener('scroll', scroll)
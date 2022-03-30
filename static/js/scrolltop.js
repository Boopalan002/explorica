const scrollTop = document.getElementById('scrolltop')
window.onscroll = () => {
  if (window.scrollY > 30) {
    scrollTop.style.visibility = "visible";
    scrollTop.style.opacity = 1;
  } else {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
  }
};
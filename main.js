const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando de scroll */


function changeHeaderWhenScroll() {
  const header = document.querySelector("header")
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}



/* Testimonials Carrossel slider Swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true
})

/* scrollReveal: Mostrar elementos quando dê scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, 
  { interval: 100 })

  /* botão voltar para o topo */
  const backToTopButton = document.querySelector('.back-to-top')

  function backToTop() {
    if(window.scrollY >= 560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
  }

  /* When Scroll */
  window.addEventListener("scroll", function() {
    changeHeaderWhenScroll()
    backToTop()
  })
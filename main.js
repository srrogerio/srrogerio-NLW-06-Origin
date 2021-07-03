// DOM Document Object Model

/*Opens and closes the menu when clicking on the icon: hamburger and x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* When clicking on a menu item, hide the menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Change header page when scrolling */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll greater than header height
    header.classList.add('scroll')
  } else {
    // scroll less than header height
    header.classList.remove('scroll')
  }
})
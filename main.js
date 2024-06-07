const anchors = document.querySelectorAll('a[href*="#"]')


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    let elem = document.getElementById(blockID);
    elem.classList.add('scroll-target')
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}



// delete accessory backet page
(() => {
   let burger = document.querySelector('.js_header_flex_burger');
   let menuBurger = document.querySelector('.js_mobile_menu')
   let closeBurger = document.querySelector('.js_mobile_menu_close')

   burger.addEventListener('click', function(){
    menuBurger.classList.add('active');
   })
   closeBurger.addEventListener('click', function(){
    menuBurger.classList.remove('active');
   })

})();
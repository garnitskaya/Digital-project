window.addEventListener('DOMContentLoaded', () => {
  //anim on scroll
  const animItems = document.querySelectorAll('.animate');

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  function animOnScroll() {
    animItems.forEach((animItem) => {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('active')
      } else {
        if (!(animItem.classList.contains(`animate-hide`))) {
          animItem.classList.remove('active');
        }
      }

    })
  }
  animOnScroll();

  window.addEventListener('scroll', animOnScroll);

  //burger
  const burger = () => {
    const menu = document.querySelector('.nav__menu'),
      menuItem = document.querySelectorAll('.nav__link'),
      hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('nav__menu_active');
    });

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__menu_active');
      });
    });
  };

  burger();
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'Horizontal',
    loop: true,
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
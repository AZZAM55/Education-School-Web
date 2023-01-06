//change navbar style on scroll

// window.addEventListener('scroll',()=>{
//     document.querySelector('nav').classList.toggle
//     ('window-scroll',window.scrollY > 0);
// })

window.addEventListener('scroll',myFunction);

function myFunction() {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100);
}



//******************show/hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open');

        //change icon
      const icon = faq.querySelector('.faq_icon i');
      if (icon.className === "uil uil-plus") {
          icon.className = "uil uil-minus";
      }
      else {
          icon.className = "uil uil-plus";
      }
    })
})


//************ Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
//    when window width is >= 600px
    breakpoints:{
        600: {
            slidesPerView: 2
        }
    }
});


//************** show/hide nav menu

const menu = document.querySelector('.nav_menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})

const closeNav = () => {
    menu.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click',closeNav);
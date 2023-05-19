const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
  
    pagination: {
          el: '.swiper-pagination',
        },
  });

  const more = document.querySelectorAll('.more')
  const items = document.querySelectorAll('.about_services-item_toggle')
  const details = document.querySelector('.about_services-details')

  for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function () {
        let openMenu = this.parentNode.parentNode.querySelector('.about_services-item_toggle');
        // items.forEach(el => { 
        //     el.classList.remove('droptoggle'); 
        // });
        if (openMenu.classList.contains('droptoggle')) {
            openMenu.classList.remove('droptoggle')
            return;
        }

        for (let k = 0; k < items.length; k++) {
            items[k].classList.remove('droptoggle')
        }
        openMenu.classList.toggle('droptoggle')
    })
  }

  const picturesList = document.querySelectorAll('.event_box-gallery_item')
  const modal = document.querySelector('.modal-hoc ')
  

  for (let i = 0; i < picturesList.length; i++) {
    picturesList[i].addEventListener('click', function () {
        modal.classList.add('classname')
  })
}

const close = document.querySelector('.close')
// const crossstyles = window.getComputedStyle(cross,':after')
// const content = crossstyles['content'];

close.addEventListener('mouseup', () => {
    modal.classList.remove('classname')
})

document.addEventListener('mouseup', e => {
    if(!modal.contains(e.target)) {
        modal.classList.remove('classname')
    }
})

const gallery = document.querySelectorAll('.event_box-gallery_item')
const subtitle = document.querySelector('.modal .modal-img h4');    

for (let i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', function() {
        const title = this.querySelector('.event_box-gallery_item h5').textContent
        subtitle.textContent = title
    })
}


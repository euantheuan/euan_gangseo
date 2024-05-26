$(function() {

     $('div.left > button').click(function() {
          $(this).addClass('on');
          $(this).siblings().removeClass('on');
     })

     var grid = document.querySelector('.grid');
     var iso = new Isotope(grid, {
          itemSelector: '.grid-item',
          filter: '*',
          hiddenStyle: {
               opacity: 0,
               transform: 'scale(0.5)'
          },
          visibleStyle: {
               opacity: 1,
               transform: 'scale(1)'
          }
     });
     
     let filterButtons = document.querySelectorAll('div.left > button');
     console.log(filterButtons)
     filterButtons.forEach(function(button) {
          button.addEventListener('click', function() {
               var filterValue = button.getAttribute('data-filter');
               iso.arrange({ filter: filterValue });
          });
     });

})
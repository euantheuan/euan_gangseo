$(function() {
     const $gnb_dep01 = $('ul.gnb > li');
     const $gnb_dep02 = $('ul.gnb_sub > li');
     const $gnb_sub = $('ul.gnb_sub');
     const $gnb = $('ul.gnb');

     for (let i=0; i < 8; i++) {
          
          $gnb_dep01.eq(i).on('mouseenter', function() {
               $gnb_dep02.eq(i).stop().slideDown();
               $('div.bg').fadeIn();
               let pHeight = $gnb_dep02.eq(i).find('div.contents').outerHeight();
               $gnb_dep02.eq(i).children('p.title').css({
                    height: pHeight
               })
          }); 

          $gnb_dep01.on('mouseleave', function(e) {
               if (! $(e.relatedTarget).closest('ul').length == $gnb_sub.length) {
                    $gnb_dep02.stop().slideUp();
                    $('div.bg').fadeOut();
               } else {
                    return
               }
          });

          $gnb_dep02.eq(i).on('mouseleave', function() {
               $gnb_dep02.eq(i).stop().slideUp();
               $('div.bg').fadeOut();
          })
     }
})
$(function() {
     const $gnb_dep01 = $('ul.gnb > li');
     const $gnb_dep02 = $('ul.gnb_sub > li');
     const $gnb_sub = $('ul.gnb_sub');

     $gnb_dep01.on('mouseover', function() {
          let idx = $(this).index();
          let $this_dep02 = $gnb_dep02.eq(idx)

          $('div.bg').stop().fadeIn();
          $this_dep02.stop().slideDown();
          let pHeight = $this_dep02.find('div.contents').outerHeight();
          $this_dep02.children('p.title').css({
               height: pHeight
          })
     })
     $gnb_dep01.on('mouseleave', function(event) {
          let idx = $(this).index();
          let $this_dep02 = $gnb_dep02.eq(idx)
          
          if (event.relatedTarget.closest('ul.gnb_sub')) {
               $this_dep02.stop();
          } else {
               $this_dep02.stop().slideUp();
               $('div.bg').stop().fadeOut();
          } 
     })
     $gnb_dep02.mouseleave(function() {
          $(this).stop().slideUp();
          $('div.bg').stop().fadeOut();
     })

     $('div.ico > a.menu').click(function() {
          $('div.bg_btn').fadeIn();
     })
     $('div.bg_btn li.logo > i').click(function() {
          $('div.bg_btn').fadeOut();
     })

     $('div.left > div > p').mouseover(function() {
          $(this).siblings('ul').stop().fadeIn();
          $(this).siblings('ul').mouseover(function() {
               $(this).stop()
          })
     }).mouseleave(function() {
          $(this).siblings('ul').stop().fadeOut();
          $(this).siblings('ul').mouseleave(function() {
               $(this).fadeOut()
          })
     });

})

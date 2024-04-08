$(function() {
    const $gnb_dep01 = $('ul.gnb > li');
    const $gnb_dep02 = $('ul.gnb_sub > li');

    // gnb_dep01에 대한 이벤트 핸들러 추가
    $gnb_dep01.on('mouseenter', function(e) {
        const index = $gnb_dep01.index($(this));

        // 현재 요소와 그에 해당하는 gnb_dep02를 보여줌
        $gnb_dep02.stop().slideUp().eq(index).slideDown();
        $('div.bg').fadeIn();

        // 현재 gnb_dep02에 맞게 높이 조절
        let pHeight = $gnb_dep02.eq(index).find('div.contents').outerHeight();
        $gnb_dep02.eq(index).children('p.title').css({
            height: pHeight
        });
    });

    // gnb_dep02에 대한 이벤트 핸들러 추가
    $gnb_dep02.on('mouseleave', function(e) {
        $(this).stop().slideUp();
        $('div.bg').fadeOut();
    });

    // gnb_dep01에 대한 mouseleave 이벤트 핸들러 추가
    $gnb_dep01.on('mouseleave', function(e) {
        // 현재 마우스 위치를 가져옴
        const $relatedTarget = $(e.relatedTarget);
        const $parent = $(this).closest('ul');

        // 만약 마우스가 부모 요소(ul)로 이동했을 때는 그대로 유지
        if ($relatedTarget.closest('ul').is($parent)) {
            return;
        }       
});
})

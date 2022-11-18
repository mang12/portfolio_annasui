$(document).ready(function(){
    //menu
    $(".menu").click(function(){
        $(".menu_wrap").animate({"right":"0"},"fast");
    });

    $(".close").click(function(){
        $(".menu_wrap").animate({"right":"-100%"},"fast");
    });

    //submenu
    $(".m_gnb > li").click(function(){
        //모든메뉴색 초기화
        $(".m_gnb > li").css("color","");
        //클릭 메뉴 색만 변경
        $(this).css("color","#8f79b7");
        $(this).children("ul").slideToggle();
    });


    //totop (첫번째 화면이 지나가면 위로올라가기 버튼생김)
    $(window).scroll(function(){
        //화면높이
        let w_height = $(this).height();
        //스크롤높이
        let sc_num = $(this).scrollTop();

        if(sc_num > w_height){
            $(".totop").fadeIn(400);
        }else{
            $(".totop").fadeOut(400);
        }
    });



});
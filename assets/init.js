/* 
most jquery js documents start
with the $(document).ready function.
This ensures the document is
ready for the code inside of the
function to be executed 
*/

$(document).ready(function() {
    
    /* 
    jquery follows its own syntax. it uses
    the $ symbol to look for an element. 
    followed by () which is the element to find
    inside of the parentheses. followed a
    . and an event. this event then triggers the
    following function, executing the code
    inside the curly brackets.
    */

    // background-color change

    $('p .work-workers').mouseover(function(){
        $('body').css('background', '#3CFFFF');
        $('.grad-left-black').css('opacity', '0');
        $('.grad-left-white').css('opacity', '100');
        $('.grad-right-black').css('opacity', '0');
        $('.grad-right-white').css('opacity', '100'); 
        $('.workers').css('left','500px');
         // 시안, 일꾼들
    })

    $('p .work-workers').mouseout(function(){
        $('body').css('background', '#FFFFFF');
        $('.grad-left-black').css('opacity', '100');
        $('.grad-left-white').css('opacity', '0');
        $('.grad-right-black').css('opacity', '100');
        $('.grad-right-white').css('opacity', '0');
        $('.workers').css('left','-999px');
    })

    $('p .work-microworld').mouseover(function(){
        $('body').css('background', '#FB25FF');
        $('.grad-left-black').css('opacity', '0');
        $('.grad-left-white').css('opacity', '100');
        $('.grad-right-black').css('opacity', '0');
        $('.grad-right-white').css('opacity', '100'); // 마젠타, 미시세계체
    })

    $('p .work-microworld').mouseout(function(){
        $('body').css('background', '#FFFFFF');
        $('.grad-left-black').css('opacity', '100');
        $('.grad-left-white').css('opacity', '0');
        $('.grad-right-black').css('opacity', '100');
        $('.grad-right-white').css('opacity', '0');
    })

    $('p .work-sheti').mouseover(function(){
        $('body').css('background', '#FF5F5F');
        $('.grad-left-black').css('opacity', '0');
        $('.grad-left-white').css('opacity', '100');
        $('.grad-right-black').css('opacity', '0');
        $('.grad-right-white').css('opacity', '100');
        $('.sheti').css('left','700px'); // 다홍, sheti
    })
    $('p .work-sheti').mouseout(function(){
        $('body').css('background', '#FFFFFF');
        $('.grad-left-black').css('opacity', '100');
        $('.grad-left-white').css('opacity', '0');
        $('.grad-right-black').css('opacity', '100');
        $('.grad-right-white').css('opacity', '0');
        $('.sheti').css('left','-999px');
    })

    $('p .work-elephant').mouseover(function(){
        $('body').css('background', '#3CFF8A');
        $('.grad-left-black').css('opacity', '0');
        $('.grad-left-white').css('opacity', '100');
        $('.grad-right-black').css('opacity', '0');
        $('.grad-right-white').css('opacity', '100');
        $('.elephant').css('top','-50px'); // 그린, 코끼리
    })
    $('p .work-elephant').mouseout(function(){
        $('body').css('background', '#FFFFFF');
        $('.grad-left-black').css('opacity', '100');
        $('.grad-left-white').css('opacity', '0');
        $('.grad-right-black').css('opacity', '100');
        $('.grad-right-white').css('opacity', '0');
        $('.elephant').css('top','-999px');
    })

    $('p .work-weekly').mouseover(function(){
        $('body').css('background', '#FBFF3C');
        $('.grad-left-black').css('opacity', '0');
        $('.grad-left-white').css('opacity', '100');
        $('.grad-right-black').css('opacity', '0');
        $('.grad-right-white').css('opacity', '100'); // 노랑, 주간생각
    })
    $('p .work-weekly').mouseout(function(){
        $('body').css('background', '#FFFFFF');
        $('.grad-left-black').css('opacity', '100');
        $('.grad-left-white').css('opacity', '0');
        $('.grad-right-black').css('opacity', '100');
        $('.grad-right-white').css('opacity', '0');
    })

    // language toggle

    $('.kor').click(function(){
        $('.eng-intro').css('display', 'none');
        $('.kor-intro').css('display', 'block');
    })

    $('.eng').click(function(){
        $('.kor-intro').css('display', 'none');
        $('.eng-intro').css('display', 'block');
    })


});
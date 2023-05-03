$(function(){
       $('.outline-parent').on('mouseenter', function(){
        $(this).find('.outline-svg').addClass('bg-white flex items-center justify-center p-2 rounded-full')
    })
    $('.outline-parent').on('mouseleave', function(){
        $(this).find('.outline-svg').removeClass('bg-white flex items-center justify-center p-2 rounded-full')
    })
})
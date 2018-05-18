require(['jquery', 'swiper', 'handlebars', 'scroll'], function ($, swiper, handlebars, scroll) {
    var myScroll = new scroll('.content', {
        scrollX:true,
        scrollbar:true
    })

    var mySwiper = new swiper('.cont', {
        loop:true,
        autoplay:true,

    })


    $.ajax({
        url:'/login',
        success:function (data) {
            init(data)
        }
    })

    // function init(data) {
    //     var source = $('#tpem').html();
        
    //     var tpone =handlebars.compile(source);
                
    //     var html = tpone(data);

    //     $('.wrapper').append(html)
    // }
    
})
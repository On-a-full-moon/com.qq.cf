// 官方轮播图
let index = 0
$('#slideshow-name li').eq(0).addClass('pale-red')
$('#slideshow-name li').on('mouseenter', function () {
    var $this = $(this).index()
    $(this).addClass('pale-red').siblings().removeClass('pale-red')
    $('.rotate-list li').eq($this).stop().fadeIn().siblings().stop().fadeOut()
})
// 右边箭头
$('.arrow-left').on('click', function () {
    index++;
    if (index == $('.rotate-list li').length) {
        index = 0
    }
    $('.rotate-list li').eq(index).fadeIn(500).siblings().fadeOut(500)
    $('#slideshow-name li').eq(index).addClass('pale-red').siblings().removeClass('pale-red')
})

// 左边箭头
$('.arrow-right').on('click', function () {
    index--;
    if (index < 0) {
        index = $('.rotate-list li').length - 1
    }
    $('.rotate-list li').eq(index).fadeIn(500).siblings().fadeOut(500)
    $('#slideshow-name li').eq(index).addClass('pale-red').siblings().removeClass('pale-red')
})

// 自动走
var timer = setInterval(function () {
    $('.arrow-right').click();
}, 5000)

$('.rotate')
    .on('mouseenter', function () {
        // 移除定时器
        clearInterval(timer)
    })
    .on('mouseleave', function () {
        timer = setInterval(function () {
            $('.arrow-right').click()
        }, 5000)
    })

// 合作轮播图
$

// tab切换
$('.switch li').eq(0).addClass('pale-red')
$('.switch li').on('click', function () {
    $(this).addClass('pale-red').siblings().removeClass('pale-red')
    $('.official').toggle()
})


// 新闻切换

/* 

$('.featuredItem').hover(function () {
    var imageLink = $(this).find('img').attr('src').replace('.svg', '') + 'blue.svg'
    $(this).find('img').attr('src', imageLink)
}, function () {
    //после
})
*/

$('.faqItem').click(function () {

    if ($(this).hasClass('faqOpened')) {
        $(this).find('.faqItemVisible').removeClass('faqVisibleBorder')
        $(this).attr('style', 'height: ' + 70 + 'px')
        $(this).removeClass('faqOpened')
    } else {
        var textH = $(this).find('.faqItemHidden').height();
        var finalH = textH + 70 + 45;
        $(this).find('.faqItemVisible').addClass('faqVisibleBorder')
        $(this).attr('style', 'height: ' + finalH + 'px')
        $(this).addClass('faqOpened')
    }
})

$('.bookingItemsButton').click(function () {
    $(this).toggleClass('bookingItemsButtonActive')
})

$('#agreementCheckbox').click(function () {
    if ($(this).is(':checked')) {
        $('.bookingButton').prop('disabled', false);
    } else {
        $('.bookingButton').prop('disabled', true);
    }
})

$('.navbarMenuTrigger').click(function () {
    $('.navbarMobileMenu').toggleClass('navbarMobileMenuActive')
})
$('.section__open').click(function(){
    let parentSection = $(this, '.section__open').parent().parent();
    if (parentSection.hasClass('expand')){
        parentSection.removeClass('expand');
    } else {
        $('.section').removeClass('expand');
        parentSection.addClass('expand');
    }
});
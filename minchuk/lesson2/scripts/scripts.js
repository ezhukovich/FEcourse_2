'use strict';
let element = $(".in-trends-item");
let mainPlayer = $('.background-video');
let mainAudioPlayer = $('.audio-player');

mainPlayer.get(0).volume = 0;

$(element).on('click', function() {
    let description = $(this).data('description');
    let title = $(this).data('title');
    let source = $(this).data('source');
    $('.description').html(description);
    $('.movie-title').html(title);
    $('.action-with-valume').addClass('show');
    mainPlayer.attr('src', source);
    mainPlayer.get(0).play();
})

$('.action-with-valume').on('click', function() {
    $('.action-with-valume').toggleClass('up');
    if(mainPlayer.get(0).volume === 1) {
        mainPlayer.get(0).volume = 0;
    } else {
        mainPlayer.get(0).volume = 1;
    }
})    
$(document).ready(function() {
    // var elems = $('section').nextAll(),
    //     count = elems.length,
    //     animations = ['#slideInRight'],
    //     loaded = false;

    // elems.each(function(i) {
    //     for (var i = animations.length - 1; i >= 0; i--) {
    //         $(this).find(animations[i]).css({ 'display': 'none' });
    //     }

    //     $(this).waypoint({
    //         handler: function() {
    //             $(function() {
    //                 for (var i = animations.length - 1; i >= 0; i--) {
    //                     if (!loaded) {
    //                         console.log('re')
    //                         $(this)
    //                             .find(animations[i])
    //                             .removeClass('animated slideInRight')
    //                             .css({ 'display': 'block', 'opacity': '0 ' })
    //                             .animate({ 'opacity': '1' }, 300)
    //                             .addClass('animated slideInRight')
    //                             .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //                                 $(this).removeClass('animated slideInRight');
    //                             });
    //                     }
    //                 }
    //             });

    //             // console.log(direction)
    //         }
    //     });
    //     if (!--count) loaded = true;
    // });


    $('#home #letters').css('display', 'none');
    $('#home #line').css('display', 'none');
    $('#home #right').css('display', 'none');
    var homeDone = false,
        home = $('#home').waypoint({
            handler: function(direction) {
                if (!homeDone) {
                    $('#home #line')
                        .removeClass('animated slideInDown')
                        .css({ 'display': 'block', 'opacity': '0 ' })
                        .animate({ 'opacity': '1' }, 300)
                        .addClass('animated slideInDown')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated slideInDown');
                        });

                    $('#home #letters').each(function(i) {
                        $(this)
                            .removeClass('animated slideInLeft')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInLeft')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInRight');
                            });

                    });

                    setTimeout(function() {
                        $('#home #right').each(function(i) {
                            $(this)
                                .removeClass('animated slideInRight')
                                .css({ 'display': 'block', 'opacity': '0 ' })
                                .animate({ 'opacity': '1' }, 300)
                                .addClass('animated slideInRight')
                                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                    $(this).removeClass('animated slideInRight');
                                });

                        });
                        homeDone = true;

                    }, 700);
                }
            }
        });

    $('#bio #text').css('display', 'none');
    var bioDone = false,
        bio = $('#bio').waypoint({
            handler: function(direction) {
                if (!bioDone) {
                    $('#bio #text')
                        .removeClass('animated slideInDown')
                        .css({ 'display': 'block', 'opacity': '0 ' })
                        .animate({ 'opacity': '1' }, 300)
                        .addClass('animated slideInDown')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated slideInDown');
                        });
                    bioDone = true;
                }
            },
            offset: '20%'
        });

    $('#player #letters').css('display', 'none');
    $('#player #line').css('display', 'none');
    $('#player #right').css('display', 'none');
    var playerDone = false,
        player = $('#player').waypoint({
            handler: function(direction) {
                // if (direction == 'up') {
                //     $('#player #line')
                //         .removeClass('animated slideOutLeft')
                //         .addClass('animated slideOutLeft')
                //         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                //             $(this).removeClass('animated slideOutLeft');
                //         })
                //         .css({ 'display': 'block', 'opacity': '1' })
                //         .animate({ 'opacity': '0' }, 300);

                //     $('#player #letters').each(function(i) {
                //         $(this)
                //             .removeClass('animated slideOutLeft')
                //             .addClass('animated slideOutLeft')
                //             .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                //                 $(this).removeClass();
                //             })
                //             .css({ 'display': 'block', 'opacity': '1' })
                //             .animate({ 'opacity': '0' }, 300);
                //     });
                // } else {
                if (!playerDone) {
                    $('#player #line')
                        .removeClass('animated slideInLeft')
                        .css({ 'display': 'block', 'opacity': '0 ' })
                        .animate({ 'opacity': '1' }, 300)
                        .addClass('animated slideInLeft')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated slideInLeft');
                        });

                    $('#player #letters').each(function(i) {
                        $(this)
                            .removeClass('animated slideInLeft')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInLeft')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass();
                            });

                    });

                    $('#player #right').each(function(i) {
                        $(this)
                            .removeClass('animated slideInRight')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInRight')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInRight');
                            });

                    });
                    playerDone = true;
                }
            },
            offset: '10%'
        });
    // $('#letters').waypoint(function() {}, { offset: '20%' });
    var videoDone = false;

    $('#video #letters').css('display', 'none');
    $('#video #line').css('display', 'none');
    $('#video #right').css('display', 'none');

    var video = $('#video').waypoint({
        handler: function(direction) {
            if (!videoDone) {
                $('#video #line')
                    .removeClass('animated slideInDown')
                    .css({ 'display': 'block', 'opacity': '0 ' })
                    .animate({ 'opacity': '1' }, 300)
                    .addClass('animated slideInDown')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated slideInDown');
                    });


                setTimeout(function() {
                    $('#video #letters').each(function(i) {
                        $(this)
                            .removeClass('animated slideInLeft')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInLeft')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass();
                            });
                    });

                    setTimeout(function() {
                        $('#video #right')
                            .removeClass('animated slideInRight')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInRight')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInRight');
                            });

                        videoDone = true;
                    }, 900);
                }, 500);
            }
        },
        offset: '35%'
    });


    $('#contact #letters').css('display', 'none');

    var contactDone = false,
        contact = $('#contact').waypoint({
            handler: function(direction) {
                if (!contactDone) {
                    $('#contact #letters')
                        .removeClass('animated slideInLeft')
                        .css({ 'display': 'block', 'opacity': '0 ' })
                        .animate({ 'opacity': '1' }, 300)
                        .addClass('animated slideInLeft')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated slideInLeft');
                        });
                    contactDone = true;
                }
            },
            offset: '35%'
        });
});
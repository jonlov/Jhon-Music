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
    $.ajax({
        type: "GET",
        url: "api/instagram",
        // data: $("#postcontent").serialize(),
        dataType: 'json',
        success: function(res) {
            console.log(res);
            // display_src
            // thumbnail_src
            // likes
            // date
            // is_video
            // caption
          
            var html = '';
            for (var i = 0; i < 9; i++) {

                if (i == 0)
                    html += '<div class="row background-browser-size pos-rlt h-full w-full">';

                html += '<a href="https://www.instagram.com/p/'+res[i].code+'/" target="_BLANK" class="opacity-full"><div class="col-xs-6 col-xs-offset-2 col-sm-4 col-md-2 ';

                if (i == 0 || i == 3 || i == 6)
                    html += 'col-sm-offset-2 col-md-offset-2 ';
                else
                    html += 'col-sm-offset-0 col-md-offset-0 ';

                if (i != 2 && i != 5 && i != 8)
                    html += 'm-r-sm ';

                html += 'm-b-sm" ';
                html += 'style="background-image: url(' + res[i].display_src + '); height: 100%; min-height:293px;min-width:293px;background-size: cover;background-repeat: no-repeat;background-position: 50% 50%;">';
                html += '</div></a>';

                if (i == 9)
                    html += '</div>';
            }

            $("#pictures").html(html);
        },
        error: function(res) {
            // console.log(res);
        }
    });

    $('nav .pos-rlt a').each(function(index, el) {
        $(this).click(function(e) {
            var go = '#' + $(this).attr('go').toString();
            $('html, body').animate({
                scrollTop: $(go).offset().top
            }, 1000);
        });
    });

    var navDone = false,
        nav = $('#bio').waypoint({
            handler: function(direction) {

                if (direction == 'down') {
                    if (!navDone) {
                        $('nav')
                            .removeClass('animated slideOutUp')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInDown')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInDown');
                            });
                        navDone = true;
                    }
                } else {
                    if (navDone) {
                        // $('nav')
                        //     .removeClass('animated slideOutUp')
                        //     .css({ 'display': 'block', 'opacity': '1' })
                        //     .animate({ 'opacity': '0' }, 300)
                        //     .addClass('animated slideOutUp')
                        //     .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        //         $(this).removeClass('animated slideOutUp');
                        //     });

                        $('nav')
                            .removeClass('animated slideInDown')
                            .addClass('animated slideOutUp')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideOutUp');
                            })
                            .css({ 'display': 'block', 'opacity': '1' })
                            .animate({ 'opacity': '0' }, 300);

                        setTimeout(function() {
                            $('nav').css({ 'display': 'none' });
                        }, 300)
                        navDone = false;

                    }

                }
            },
            offset: '60%'
        });

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
            offset: '50%'
        });

    $('#music #letters').css('display', 'none');
    $('#music #line').css('display', 'none');
    $('#music #right').css('display', 'none');
    var musicDone = false,
        music = $('#music').waypoint({
            handler: function(direction) {
                // if (direction == 'up') {
                //     $('#music #line')
                //         .removeClass('animated slideOutLeft')
                //         .addClass('animated slideOutLeft')
                //         .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                //             $(this).removeClass('animated slideOutLeft');
                //         })
                //         .css({ 'display': 'block', 'opacity': '1' })
                //         .animate({ 'opacity': '0' }, 300);

                //     $('#music #letters').each(function(i) {
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
                if (!musicDone) {
                    $('#music #line')
                        .removeClass('animated slideInLeft')
                        .css({ 'display': 'block', 'opacity': '0 ' })
                        .animate({ 'opacity': '1' }, 300)
                        .addClass('animated slideInLeft')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                            $(this).removeClass('animated slideInLeft');
                        });

                    $('#music #letters').each(function(i) {
                        $(this)
                            .removeClass('animated slideInLeft')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInLeft')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass();
                            });

                    });

                    $('#music #right').each(function(i) {
                        $(this)
                            .removeClass('animated slideInRight')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInRight')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInRight');
                            });

                    });
                    musicDone = true;
                }
            },
            offset: '50%'
        });
    // $('#letters').waypoint(function() {}, { offset: '20%' });
    var videosDone = false;

    $('#videos #letters').css('display', 'none');
    $('#videos #line').css('display', 'none');
    $('#videos #right').css('display', 'none');

    var videos = $('#videos').waypoint({
        handler: function(direction) {
            if (!videosDone) {
                $('#videos #line')
                    .removeClass('animated slideInDown')
                    .css({ 'display': 'block', 'opacity': '0 ' })
                    .animate({ 'opacity': '1' }, 300)
                    .addClass('animated slideInDown')
                    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $(this).removeClass('animated slideInDown');
                    });


                setTimeout(function() {
                    $('#videos #letters').each(function(i) {
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
                        $('#videos #right')
                            .removeClass('animated slideInRight')
                            .css({ 'display': 'block', 'opacity': '0 ' })
                            .animate({ 'opacity': '1' }, 300)
                            .addClass('animated slideInRight')
                            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                                $(this).removeClass('animated slideInRight');
                            });

                        videosDone = true;
                    }, 900);
                }, 500);
            }
        },
        offset: '50%'
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
            offset: '50%'
        });
});
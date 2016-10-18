$(document).ready(function() {

    var bioDone = false,
    bio = $('#bio #text').waypoint({
        handler: function(direction) {
            // if (!bioDone) {
                // $(function() {

                    // showText(
                    //     '#bio  #text',
                    //     'CANTANTE Y COMPOSITOR VENEZOLANO, CARAQUEÑO. NACIDO EN EL AÑO 1996 BAJO EL NOMBRE JUAN ESTEVES(JHON). SU FAMILIA HA ESTADO CONFORMADA POR MUSICOS LO QUE LO HA AYUDADO A CRECER ENAMORADO DE LA MUSICA, CON EL APOYO DE SUS PADRES FORMO PARTE DE LA ORQUESTA SINFONICA INFANTIL DE VENEZUELA POR VARIOS ANOS LUEGO DE ESTO JHON ES IDENTIFICADO POR TOCAR VARIOS INSTRUMENTOS COMO LA GUITARRA, EL VIOLIN, EL TECLADO, BATERIA, EL BAJO ENTRE OTROS. AL TRANSCURRIR LOS ANOS CONTINUA SU SUENO AL FORMAR PARTE DE LA SEGUNDA TEMPORADA DE "GENERACION S" POR VENEVISION EN EL ANO 2014 CON UN DUO LLAMADO KEN Y JHON. A COMIENZOS DEL 2016 JHON DECIDE CONTINUAR SU CAMINO COMO SOLISTA PARA SEGUIR ESCALANDO Y VENCIENDO BARRERAS PARA LOGRAR UNA POR UNA CADA UNA DE SUS METAS',
                    //     0,
                    //     60
                    // );
                // });
                bioDone = true;
            // }
        }
    });

    var playerDone = false;
    $('#player #letters').css('display', 'none');
    $('#player #line').css('display', 'none');

    var player = $('#player').waypoint({
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
                playerDone = true;
            }
        }
    });
    // $('#letters').waypoint(function() {}, { offset: '50%' });
    var videoDone = false;

    $('#video #letters').css('display', 'none');
    $('#video #line').css('display', 'none');

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

                    videoDone = true;
                }, 700);
            }
        }
    });

});
/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

var temporalFolder = 'docs';

module.exports.temporalFolder = temporalFolder;

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFiles = {
    inject: [],
    concat: [
        'bower_components/**/dist/**/*.min.css',
        'bower_components/**/*.min.css',
        '!bower_components/**/dist/**/*.min.css',
        'css/**/*.css',
        // 'assets/css/*.css'
    ]
};

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFiles = {
    inject: [
        'js/jquery.min.js', //  --------------- > > > renewMe.js NEEDS JQUERY
        'js/renewMe.js'
    ],
    concat: [
        // 'js/jquery.min.js', //  --------------- > > > renewMe.js HAVE JQUERY

        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'js/parallax.min.js',
        'js/waypoints.min.js',
        'js/snd.js',
        'js/renewGo.js',
        'js/app.js',
        'js/form.js'
        // 'bower_components/**/dist/**/*.min.js',
        // '!bower_components/**/dist/**/**.min.js',
    ]
};


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
    'assets/*.html',
    'assets/views/**/*.html'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)

//
// CSS FILES
//
module.exports.cssFilesToInject = cssFiles.inject.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.cssFilesToConcat = cssFiles.concat.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.cssFilesToConcatProd = cssFiles.concat.map(function(path) {
    return 'assets/' + path;
});


//
// JS FILES
//
module.exports.jsFilesToInject = jsFiles.inject.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.jsFilesToConcat = jsFiles.concat.map(function(path) {
    return temporalFolder + '/' + path;
});

module.exports.jsFilesToConcatProd = jsFiles.concat.map(function(path) {
    return 'assets/' + path;
});

//
// COPY FILES
//
var assetsFilesToCopy = ['**/*.!(coffee|less)', '**/.*'];
jsFiles.concat.map(function(path) {
    assetsFilesToCopy.push('!' + path);
});
cssFiles.concat.map(function(path) {
    assetsFilesToCopy.push('!' + path);
});
assetsFilesToCopy.push('!bower_components/**/*');

module.exports.assetsFilesToCopy = assetsFilesToCopy;

module.exports.stripBanners = true;
var renewDomain = 'https://jonlov.github.io';
module.exports.renewDomain = renewDomain;

module.exports.banner = '/*! PLEASE DO NOT TOUCH THIS FILE YOU CAN PERMANTLY DAMAGE YOUR APPLICATION, CONTACT THE RENEW TEAM TO MODIFY\n' +
    ' * <%= grunt.template.today("yyyy") %> - Jonathan Lovera (' + renewDomain + ')\n' +
    ' * <%= pkg.name %> v<%= pkg.version %> */';

//
// TEMPLATE FILES
//
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
    return 'assets/' + path;
});

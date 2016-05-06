// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/lodash/dist/lodash.compat.js',
      'client/bower_components/angular-cookie/angular-cookie.js',
      'client/bower_components/ng-file-upload/ng-file-upload.js',
      'client/bower_components/cryptojslib/components/aes-min.js',
      'client/bower_components/cryptojslib/components/aes.js',
      'client/bower_components/cryptojslib/components/cipher-core-min.js',
      'client/bower_components/cryptojslib/components/cipher-core.js',
      'client/bower_components/cryptojslib/components/core-min.js',
      'client/bower_components/cryptojslib/components/core.js',
      'client/bower_components/cryptojslib/components/enc-base64-min.js',
      'client/bower_components/cryptojslib/components/enc-base64.js',
      'client/bower_components/cryptojslib/components/enc-utf16-min.js',
      'client/bower_components/cryptojslib/components/enc-utf16.js',
      'client/bower_components/cryptojslib/components/evpkdf-min.js',
      'client/bower_components/cryptojslib/components/evpkdf.js',
      'client/bower_components/cryptojslib/components/format-hex-min.js',
      'client/bower_components/cryptojslib/components/format-hex.js',
      'client/bower_components/cryptojslib/components/hmac-min.js',
      'client/bower_components/cryptojslib/components/hmac.js',
      'client/bower_components/cryptojslib/components/lib-typedarrays-min.js',
      'client/bower_components/cryptojslib/components/lib-typedarrays.js',
      'client/bower_components/cryptojslib/components/md5-min.js',
      'client/bower_components/cryptojslib/components/md5.js',
      'client/bower_components/cryptojslib/components/mode-cfb-min.js',
      'client/bower_components/cryptojslib/components/mode-cfb.js',
      'client/bower_components/cryptojslib/components/mode-ctr-gladman-min.js',
      'client/bower_components/cryptojslib/components/mode-ctr-gladman.js',
      'client/bower_components/cryptojslib/components/mode-ctr-min.js',
      'client/bower_components/cryptojslib/components/mode-ctr.js',
      'client/bower_components/cryptojslib/components/mode-ecb-min.js',
      'client/bower_components/cryptojslib/components/mode-ecb.js',
      'client/bower_components/cryptojslib/components/mode-ofb-min.js',
      'client/bower_components/cryptojslib/components/mode-ofb.js',
      'client/bower_components/cryptojslib/components/pad-ansix923-min.js',
      'client/bower_components/cryptojslib/components/pad-ansix923.js',
      'client/bower_components/cryptojslib/components/pad-iso10126-min.js',
      'client/bower_components/cryptojslib/components/pad-iso10126.js',
      'client/bower_components/cryptojslib/components/pad-iso97971-min.js',
      'client/bower_components/cryptojslib/components/pad-iso97971.js',
      'client/bower_components/cryptojslib/components/pad-nopadding-min.js',
      'client/bower_components/cryptojslib/components/pad-nopadding.js',
      'client/bower_components/cryptojslib/components/pad-zeropadding-min.js',
      'client/bower_components/cryptojslib/components/pad-zeropadding.js',
      'client/bower_components/cryptojslib/components/pbkdf2-min.js',
      'client/bower_components/cryptojslib/components/pbkdf2.js',
      'client/bower_components/cryptojslib/components/rabbit-legacy-min.js',
      'client/bower_components/cryptojslib/components/rabbit-legacy.js',
      'client/bower_components/cryptojslib/components/rabbit-min.js',
      'client/bower_components/cryptojslib/components/rabbit.js',
      'client/bower_components/cryptojslib/components/rc4-min.js',
      'client/bower_components/cryptojslib/components/rc4.js',
      'client/bower_components/cryptojslib/components/ripemd160-min.js',
      'client/bower_components/cryptojslib/components/ripemd160.js',
      'client/bower_components/cryptojslib/components/sha1-min.js',
      'client/bower_components/cryptojslib/components/sha1.js',
      'client/bower_components/cryptojslib/components/sha224-min.js',
      'client/bower_components/cryptojslib/components/sha224.js',
      'client/bower_components/cryptojslib/components/sha256-min.js',
      'client/bower_components/cryptojslib/components/sha256.js',
      'client/bower_components/cryptojslib/components/sha3-min.js',
      'client/bower_components/cryptojslib/components/sha3.js',
      'client/bower_components/cryptojslib/components/sha384-min.js',
      'client/bower_components/cryptojslib/components/sha384.js',
      'client/bower_components/cryptojslib/components/sha512-min.js',
      'client/bower_components/cryptojslib/components/sha512.js',
      'client/bower_components/cryptojslib/components/tripledes-min.js',
      'client/bower_components/cryptojslib/components/tripledes.js',
      'client/bower_components/cryptojslib/components/x64-core-min.js',
      'client/bower_components/cryptojslib/components/x64-core.js',
      'client/bower_components/cryptojslib/rollups/aes.js',
      'client/bower_components/cryptojslib/rollups/hmac-md5.js',
      'client/bower_components/cryptojslib/rollups/hmac-ripemd160.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha1.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha224.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha256.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha3.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha384.js',
      'client/bower_components/cryptojslib/rollups/hmac-sha512.js',
      'client/bower_components/cryptojslib/rollups/md5.js',
      'client/bower_components/cryptojslib/rollups/pbkdf2.js',
      'client/bower_components/cryptojslib/rollups/rabbit-legacy.js',
      'client/bower_components/cryptojslib/rollups/rabbit.js',
      'client/bower_components/cryptojslib/rollups/rc4.js',
      'client/bower_components/cryptojslib/rollups/ripemd160.js',
      'client/bower_components/cryptojslib/rollups/sha1.js',
      'client/bower_components/cryptojslib/rollups/sha224.js',
      'client/bower_components/cryptojslib/rollups/sha256.js',
      'client/bower_components/cryptojslib/rollups/sha3.js',
      'client/bower_components/cryptojslib/rollups/sha384.js',
      'client/bower_components/cryptojslib/rollups/sha512.js',
      'client/bower_components/cryptojslib/rollups/tripledes.js',
      'client/bower_components/angular-cryptography/mdo-angular-cryptography.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      '.tmp/app/app.js',
      '.tmp/{app,components}/**/*.module.js',
      '.tmp/{app,components}/**/*.js',
      '.tmp/test/**/*.js',
      'client/{app,components}/**/*.html'
    ],

    preprocessors: {
      '**/*.html': 'ng-html2js',
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    karma: {
        testScripts: {
            options: {
                singleRun: true,
                configFile: 'karma.conf.js',
                basePath: 'src/',
                coverageReporter: {
                    type: 'html',
                    // path is relative to basePath
                    // adjust to the best location for your project
                    // and backend
                    dir: '../build-reports/'
                }
            },
            reporters: ['progress', 'coverage']
        }
    }
  });


  grunt.registerTask('default', []);

};

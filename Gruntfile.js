'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                //  ['progress', 'coverage'] <--- If you want a coverage report
                reporters: ['progress', 'coverage']
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);

};

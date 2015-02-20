module.exports = function(grunt){
  "use strict";

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    jshint: {
      options: {
        reporter: require("jshint-stylish"),
        ignores: [
          'js/*.min.js'
        ]
      },
      default: [
        'Gruntfile.js',
        'memory-stats-element.js'
      ]
    },
    uglify: {
      options: {
        report: 'min',
        sourceMap: true
      },
      default: {
        files: {
          'memory-stats-element.min.js': [
            'memory-stats-element.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};

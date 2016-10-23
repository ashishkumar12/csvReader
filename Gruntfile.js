module.exports = function(grunt){
  /*
  *  for compiling .scss files to .css
  */
  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './public/styles',
          src: ['*.scss'],
          dest: './build/css',
          ext: '.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};

var gulp = require( "gulp" );
var babel = require( "gulp-babel" );
var gutil = require( "gulp-util" );

function onError ( err ) {
  var displayErr = gutil.colors.red( err );
  gutil.log( displayErr );
  gutil.beep();
  this.emit( "end" );
}

function logWatchEvent( event ) {
  console.log( "File " + event.path + " was " + event.type + ", running tasks..." );
}

var GLOB_SCRIPTS =  "./src/**/*.js";
var GLOB_CONFIGS =  "./src/**/*.json";

gulp.task( "build:scripts", function() {
  return gulp.src( GLOB_SCRIPTS )
             .pipe( babel() )
             .on( "error", onError )
             .pipe( gulp.dest( "build" ) );
});

gulp.task( "build", ["build:scripts"] );

gulp.task( "watch:build", function ( ) {
  gulp.watch( GLOB_SCRIPTS, ["build:scripts"] )
      .on( "change", logWatchEvent );
});

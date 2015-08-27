import exec from "./exec";
import commitMessage from "./commit-message";

var VERSION_PRIO = [ "version", "patch", "minor", "major" ];

export default {
  getLastVersionTag() {
    return exec( "git describe --tags --abbrev=0 --match v*" );
  },

  bumpVersion( type ) {
    return exec( `npm version ${type} --force -m "VERSION: %s"` );
  },

  getBiggestVersionType( messages ) {
    var biggest = 0;

    messages.forEach( function ( message ) {
      message = message.trim();
      if( commitMessage.hasType( message, "BREAK" ) )
        biggest = Math.max( biggest, 3 );
      else if ( commitMessage.hasType( message, "FEAT" ) )
        biggest = Math.max( biggest, 2 );
      else if ( commitMessage.hasType( message, "VERSION" ) )
        biggest = Math.max( biggest, 0 );
      else
        biggest = Math.max( biggest, 1 );
    } );

    return VERSION_PRIO[biggest];
  }
};

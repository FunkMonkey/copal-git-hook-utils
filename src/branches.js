import exec from "./exec";

export default {
  getCurrentBranch() {
    return exec( "git rev-parse --abbrev-ref HEAD" );
  },

  exitIfCurrentBranchIsNot( listOfBranches, exitCode ) {
    var currBranch = this.getCurrentBranch;

    if( listOfBranches.indexOf( currBranch ) === -1 )
      process.exit( exitCode );
  }
};

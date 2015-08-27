import exec from "./exec";

export default {
  getCommitsSince( ref, format ) {
    var output = exec ( `git log ${ref}..HEAD --oneline --pretty=format:"${format}"` );
    if( output === "" )
      return [];
    else
      return output.split( "\n" );
  },

  getCommitSubjectsSince( ref ) {
    return this.getCommitsSince( ref, "%s" );
  }
};

import fs from "fs";
import exec from "./exec";
import commitMessage from "./commit-message";

export default {

  appendToChangelog( fileName, messages, version ) {

    messages = messages.filter( msg => !commitMessage.messageHasType( msg, "VERSION" ) );

    if( messages.length === 0 )
      return;

    var changelog = "vXXX - DATE\n=============\n"

    messages.forEach( msg => {
      changelog += "- " + msg + "\n";
    });

    changelog += "\n";

    fs.appendFileSync( fileName, changelog );
    exec( `git add "${fileName}"` );
  }
};

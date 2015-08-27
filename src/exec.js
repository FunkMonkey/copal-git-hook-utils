import child_process from "child_process";

export default function ( command ) {
  return child_process.execSync( command, { encoding: "utf8" } ).trim();
}


export default {
  hasType( msg, type ) {
    return msg.trim().indexOf( type ) === 0;
  }
}

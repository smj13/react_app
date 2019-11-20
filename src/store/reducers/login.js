export default function getUser(state='',action){
  switch(action.type){
    case "LOGIN":
      return action.user;
    case "LOGINOUT":
      return '';
  }
  return state;
}
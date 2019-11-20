import http from './http';
export default function putMessage(info){
  return function(dispatch){
    return http.post('/lecturer/addcomment',info).then(res=>{
      if(res.data.code !=='0'){
        alert(res.data.msg);
      } 
      return true;
    })
  }
}
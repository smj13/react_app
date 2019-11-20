import http from './http';
export default function loginOut(data){
  return function(dispatch){
    return http.post('/user/logout').then(res=>{
      if(res.data.code === 0){
        dispatch({
          type:'LOGINOUT',
        })
      }
    })
  }
}
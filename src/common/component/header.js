import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import {useBack} from '../hooks/index';
import isLogin from '../../store/action/isLogin';
import loginOut from '../../store/action/loginOut';

function Header(props){
  const back = useBack(props.history);
  const path = props.location.pathname;
  const {user,changeShow} = props;
  const [isLoginShow,setLoginShow] = useState(false);
  useEffect(()=>{
    props.dispatch(isLogin());
  },[])
  function getUser() {
    if(path === '/login'){
      return ''
    }
    if(user) {
      return (
        <span className="header-btn-right">
          <span 
            className='header-user'
            onClick={()=>{
              setLoginShow(!isLoginShow);
            }}
          >{user}</span>
          <span 
            className="header-logout-btn"
            style = {{
              display:isLoginShow?'block':'none'
            }}
            onClick={()=>{
              props.dispatch(loginOut());
            }}
          >退出</span>
        </span>
      );
    }
    return <Link className="user" to='/login'/>;
  }
  return (
    <header id='header'>
      <nav className="menu">
        {path === '/login'?
         <a 
          className='header-btn-left iconfont icon-back'
          onClick={()=>{
            back();
          }}
         ></a>: 
         <a 
          className='header-btn-left iconfont icon-hycaidan'
          onClick={()=>{
            changeShow();
          }}
         ></a>}
      </nav>
      <h1 className="logo">miaov.com</h1>
      {getUser()}
    </header>
  );
}

export default connect(state=>{
  return {user:state.getUser};
}) (withRouter(Header));
import React,{useState,useEffect,useRef} from 'react';
import {useInnerHeight} from '../hooks/index';
import BScroll from 'better-scroll';
import Header from './header';
import Menu from './menu';
import '../css/reset.css';
import '../css/common.css'
export default function Frame(props){
  const [showMenu,setShowMenu] = useState(false);
  const innerH = useInnerHeight();
  const wrap = useRef(null);
  let {pullUp,getData,bounce,messageHide} = props;
  function changeShow(){
    setShowMenu(!showMenu);
  }
  function menuHide() {
    setShowMenu(false);
  }
  useEffect(()=>{
    window.pageScroll = new BScroll(wrap.current,{
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: pullUp?{threshold: 150}:false
    });
    window.pageScroll.on('pullingUp',()=>{
      getData().then(res=>{
        if(res){
          window.pageScroll.finishPullUp();
          window.pageScroll.refresh();
        } else {
          window.pageScroll.closePullUp();
        }
        
      });
    })
    return ()=>{
      window.pageScroll = null;
    }
  },[])
  return (
    <div
      onTouchEnd = {messageHide}
    >
      <Header 
        changeShow={changeShow}
      />
      <Menu 
        menuHide = {menuHide}
      />
      <div 
        id='main'
        style={{
          transform: `translateX(${showMenu?'4.5':'0'}rem)`,
          height: innerH
        }}
        onTouchStart={menuHide}
      >
        <div 
          className='pageWrap'
          ref={wrap}
        >
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
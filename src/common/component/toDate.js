import React from 'react';

export default function ToDate(props) {
  let {time} = props;
  let nowTime = Date.now();
  let newTime = new Date(time).getTime();
  let disTime = nowTime - newTime;
  if(disTime < 60000){
    return '刚刚';
  } else if(disTime < 3600000){
    return parseInt(disTime/60000) + '分钟之前';
  } else if(disTime < 86400000){
    return parseInt(disTime/3600000) + '小时之前';
  } else if(disTime < 604800000){
    return parseInt(disTime/86400000) + '天之前';
  } 
  return time;
}
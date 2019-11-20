import React from 'react';
import {connect} from 'react-redux';
import ToDate from '../../common/component/toDate';

function MessageView(props) {
  let {messageList,loadEnd,loading} = props;
  return (
    <div>
      <ul className="comment_list">
        {
          messageList.map((item,index)=>(
            <li key={index}>
              <div className="user_comment clearfix">
                <span>{item.username}</span>
              </div>
              <div className="comment_txt">
                {item.content}
              </div>
              <div className="comment_footer">
                <time>
                  <ToDate time = {item.create_time}/>
                </time>
              </div>
            </li>
          ))
        }
      </ul>
      <a className="comment_list_more">{loadEnd?'我是有底线的':(loading?'拼命加载中':'上划加载更多')}</a>
    </div>
  )
}

function MessageList(props) {
  let {messageList} = props;
  return (
    <div className='comment_list_wrap'>
      {messageList.length <= 0?<p className='comment_list_info'>来抢沙发吧~</p>:<MessageView {...props}/>}
      
    </div>
  )
}

export default connect(state=>state.messageList)(MessageList)
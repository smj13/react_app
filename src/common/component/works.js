import React from 'react';
import {Link} from 'react-router-dom';

export default function Works(props) {
  let {data,loadEnd,loading} = props;
  return (
    <div className="works">
      <ul className="works_list clearfix">
        {
          data.map(item=>(
            <li key={item.id}>
              <Link to={'/work/'+item.id}>
                <img src={item.icon} className='work_a'/>
                <span className="work_txt clearfix work_a">
                  <strong className='work_a'>{item.title}</strong>
                  <span className='work_a'>
                    <em className='work_a'>{item.message}</em>
                    <em className='work_a'>{item.good}</em>
                  </span>
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
      <a className="more">{loadEnd?'我是有底线的':(loading?'拼命加载中':'上划加载更多')}</a>
    </div>
  )
}
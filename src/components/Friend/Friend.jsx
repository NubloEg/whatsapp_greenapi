import React from 'react'

import style from './Friend.module.css'

/* ${style.active} */

export default function Friend({name,date,setFriend,photo,chatId,messages}) {
 
  return (
    <div onClick={e=>setFriend({name,photo,chatId,messages})} className={`${style.friend}`}>
              <img alt={'friend'} src={photo} className={style.img_logo}/>
              <div className={style.text_friend}>
                <div className={style.text_header}>
                  <div className={style.friend_name}>{name}</div>
                  <div className={style.friend_day}>{date}</div>
                </div>
                <div className={style.friend_last_message}>
                  
                </div>

              </div>
              
            </div>
  )
}

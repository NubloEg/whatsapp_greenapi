import React from 'react'
import style from './Dialog.module.css'

import {postMessage,getMessages} from '../../api/api'

export default function Dialog({setFriend,user,idInstLogin,ApiTokenLogin}) {
  const [message,setMessage]=React.useState('')

React.useEffect(()=>{
  setInterval(()=>{
    getMessages(idInstLogin,ApiTokenLogin).then(resp=>{
      console.log(resp.data)
    })
  },5000)
},[])

  const sendMessage=()=>{
    if (message) {
      
     postMessage(user.chatId,message,idInstLogin,ApiTokenLogin)
     .then(resp=>{
      setFriend({
        ...user,
        messages:[
          ...user.messages,{message,isMe:true}
        ]
      })
      
      setMessage('')
     })
     .catch(err=>{

     })
    }
  }
  
  return (
    <div className={style.dialog}>
        <header className={style.dialog_header}>
        <img alt='user' src={user.photo} className={style.dialog_user_logo}/>
            <div className={style.dialog_name}>{user.name}</div>
        </header>
        <main className={style.dialog_main} >
          {user.messages && user.messages.map(el=> <div className={el.isMe?style.dialog_messageMe:style.dialog_messageFriend}>{el.message}</div>
          )}
        </main>
        <footer className={style.dialog_footer} >
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder='Введите сообщение' className={style.dialog_textarea}></textarea>
          <button onClick={sendMessage}>Отправить</button>
        </footer>
    </div>
  )
}

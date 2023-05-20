import React from 'react'
import Friend from '../Friend/Friend'

import style from './Navigatioin.module.css'
import search_Icon from '../../assets/icons/search_icon.svg'
import Input from '../UI/Input'

import {getInfoUser} from '../../api/api'

export default function Navigation({user_name,setFriend,photo,ApiTokenLogin,idInstLogin}) {
  const [friends,setFriends]=React.useState([])
  const [searchValue,setSearchValue]=React.useState('')

   const correctDate=(data)=>{
    if (data<10) {
      return `0${data}`
    }
    return data
   }

  const addFriend=()=>{
    
  if(searchValue){
    
    const date=new Date()
    const dateNow=`${correctDate(date.getDate())}.${correctDate(date.getMonth())}.${date.getFullYear()}`
    getInfoUser(searchValue,idInstLogin,ApiTokenLogin)
    .then(resp=>{
      console.log(resp.data)
      setFriends([...friends,{...resp.data,date:dateNow,messages:[]}])
      setSearchValue('')
    })
    .catch(function(err){
        alert('Пользователь не найден')
    })
  }else{
    
    alert('Введите номер')
  }
    
  
  }
  
  
 
  return (
    <nav className={style.navigation}>
          <header className={style.navigation_header}>
            <img alt='user' src={photo} className={style.navigation_user_logo}/>
            <div className={style.user_name}>{user_name}</div>
          </header>
          <div className={style.navigation_footer}>
          <div className={style.search}>
            <img alt='search_icon' src={search_Icon} className={style.icon_search}/>
            <Input value={searchValue} onChange={e=>setSearchValue(e.target.value)} placeholder={'Поиск или новый чат'}/>
            <button onClick={addFriend} >Создать чат</button>
          </div>
          <div className={style.friends}>
            
            {
              friends && friends.map(el=><Friend messages={el.messages} chatId={el.chatId} photo={el.avatar} key={el.chatId} setFriend={setFriend} name={el.name} date={el.date} />)
            }
            
          </div>
          </div>
        </nav>
  )
}

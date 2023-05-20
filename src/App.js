
import React from 'react';
import './App.css';


import Navigation from './components/Navigation/Navigation';
import Dialog from './components/Dialog/Dialog';
import Input from './components/UI/Input';
import {auth} from './api/api'

function App() {
  const [online,setOnline]=React.useState(false)
  const [idInstLogin,setIdInstLogin]=React.useState('1101822149')
  const [ApiTokenLogin,setApiTokenLogin]=React.useState('d1b6f9e83ebf4a80a360b8fe13931ba8447ffc19b09d428181')
  const [user,setUser]=React.useState({})
  

const connection=()=>{
  auth(idInstLogin,ApiTokenLogin,setUser,setOnline)
 
}

  const [friend,setFriend]=React.useState('')
  
 
  return (
    <div className="App">
     <div className='backgound_green'></div>
     
        {
          
          online?<main className='main'><Navigation idInstLogin={idInstLogin} ApiTokenLogin={ApiTokenLogin} setFriend={setFriend} photo={user.avatar} user_name={user.name} />
          <div className='content'>
            {
              
              friend!==''?<Dialog setFriend={setFriend} idInstLogin={idInstLogin} ApiTokenLogin={ApiTokenLogin} user={friend} />:<></>
            }
          </div></main>:<div className='form'>
            <h1>Авторизация</h1>
          <Input value={idInstLogin} onChange={e=>setIdInstLogin(e.target.value)}  isLogin={true} placeholder={'Введите idInstance'}/>
          <Input value={ApiTokenLogin} onChange={e=>setApiTokenLogin(e.target.value)} isLogin={true} placeholder={'Введите apiTokenInstance'}/>
          <button onClick={connection}>Вход</button>
          </div>
        }
        
     
    </div>
  );
}

export default App;

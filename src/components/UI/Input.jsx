import React from 'react'
import style from './Input.module.css'
export default function Input({isLogin,placeholder,value,onChange}) {
  return (
    <input value={value} onChange={onChange} className={isLogin?`${style.input_search} ${style.input_login}`:style.input_search} type='text' placeholder={placeholder}/>
  )
}

import React from 'react'
import './button.css'

const Button = ({onClick, type, text}) => {
  return (
    <button className='ui_button' onClick={onClick} type={type}>{text}</button>
  )
}

export default Button

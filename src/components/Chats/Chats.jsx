import React from 'react'
import PropTypes from 'prop-types'
import s from './Chats.module.css'
import OneChat from 'components/OneChat/OneChat'

function Chats({chat, addBotUser}) {
 
  const changeUser = (event) => {
    addBotUser(Number(event.currentTarget.dataset.id))
  };

  return (
    <div>
      <h1>Chats</h1>
      <ul>
        {chat.map(({id, name, img, isOnline, content}) => (
          <li className={s.item} key={id} onClick={changeUser} data-id={id} >
            <OneChat name={name} img={img} isOnline={isOnline} content={content} />
          </li>
        ))}
      </ul>
    </div>
  )
}

Chats.propTypes = {
  chat: PropTypes.array.isRequired,
  addBotUser: PropTypes.func.isRequired,
}

export default Chats

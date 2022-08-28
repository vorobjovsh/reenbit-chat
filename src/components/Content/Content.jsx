import React from 'react';
import PropTypes from 'prop-types'
import s from './Content.module.css'

function Content({user}) {

  const arrMessage = user[0].content;

  return (
    <div className={s.content}>
      {arrMessage.map(({ userText, dateText, botText, dateBot, isVisible }) => (
        <div className={s.contentItem} key={dateText} >
          <div className={s.currentUserMessage}>
            <p className={s.messageCurrentUser}>{userText}</p>
            <p className={s.date}>{dateText}</p>
          </div>
          {isVisible &&
            <div className={s.userMessage}>
              <img className={s.avatar} src={user[0].img} alt="" />
              <div className={s.userText}>
                <p className={s.message}>{botText}</p>
                <p className={s.date}>{dateBot}</p>
              </div>
            </div>
          }
        </div>
      ))}
    </div>

  )
}

Content.propTypes = {
  user: PropTypes.array.isRequired,
}

export default Content

import React from 'react'
import PropTypes from 'prop-types'
import s from './OneChat.module.css'
import {ONLINE_TRUE, ONLINE_FALSE} from '../../constants/constants';

function OneChat({name, img, isOnline, content}) {

  return (
    <div className={s.onechat}>
      <div className={s.imgblock}>
        <img className={s.avatar} src={img} alt="" />
        {isOnline ? (<img className={s.online} src={ONLINE_TRUE} alt="" />) :
        (<img className={s.online} src={ONLINE_FALSE} alt="" />)}
      </div>
      <div className={s.textblock}>
        <p className={s.title}>{name}</p>
        <p className={s.text}>{content[content.length - 1].userText}</p>
      </div>
      <p className={s.dateblock}>{content[content.length - 1].dateText}</p>
    </div>
  )
}

OneChat.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  content: PropTypes.array.isRequired,
}

export default OneChat

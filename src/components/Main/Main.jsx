import React from 'react'
import PropTypes from 'prop-types'
//import s from './Main.module.css'
import Header from 'components/Header/Header'
import Content from 'components/Content/Content';
import InputMessage from 'components/InputMessage/InputMessage';

function Main({user, activeUser, changeContent}) {
  const userMain = user.filter(item => item.id === activeUser[0].id);
  const imgHeaderMain = userMain[0].img;

  return (
    <div>
      <Header img={imgHeaderMain} isOnline={userMain[0].isOnline} name={userMain[0].name}/>
      <Content user={userMain} />
      <InputMessage changeContent={changeContent}/>
    </div>
  )
}

Main.propTypes = {
  user: PropTypes.array.isRequired,
  activeUser: PropTypes.array.isRequired,
  changeContent: PropTypes.func.isRequired,
}

export default Main

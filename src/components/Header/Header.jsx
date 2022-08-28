import React from 'react'
import PropTypes from 'prop-types'
import s from './Header.module.css'
import {ONLINE_TRUE, ONLINE_FALSE} from '../../constants/constants';

const defaultImage = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg';

function Header({img, isOnline, name, children}) {

  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.blockImg}>
          <img className={s.avatar} src={img} alt="" />
          {
            isOnline ? (<img className={s.checkOnline} src={ONLINE_TRUE} alt="" />) :
                      (<img className={s.checkOnline} src={ONLINE_FALSE} alt="" />)
          }
        </div>
        <p className={s.name}>{name}</p>
      </div>
     {children}
    </div>
    
  )
}

Header.defaultProps = {
  img: defaultImage,
};

Header.propTypes = {
  img: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string,
  children: PropTypes.any,
}

export default Header

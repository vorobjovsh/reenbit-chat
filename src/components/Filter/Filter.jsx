import React from 'react'
import PropTypes from 'prop-types'
import s from './Filter.module.css'

const Filter = ({ value, onChange }) => (
  <div className={s.label}>
    <input className={s.inputFilter} type="text" placeholder='Search chat' value={value} onChange={onChange} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter

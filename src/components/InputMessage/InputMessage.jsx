import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import s from './InputMessage.module.css'
import send from '../../icons/send.png'

function InputMessage({changeContent}) {
  const [content, setContent] = useState([]);
  const [userText, setUserText] = useState('');
  const [dateText, setDateText] = useState('');
  const [botText, setBotText] = useState('');
  //const [dateBot, setDateBot] = useState('');

  const onTextAreaChange = ({target: {value}}) => {
    setUserText(value);
  };

  useEffect(() => {
    const apiUrl = `https://api.chucknorris.io/jokes/random`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then(data => {
          setBotText(data.value);
          setDateText(new Date().getTime());
      });
  }, [content]);

  const onButtonClick = () => {

    if (userText.trim()) {
      setContent([...content, {userText: userText, dateText: new Date(dateText).toLocaleString(), botText: botText, dateBot: new Date((dateText + 10000)).toLocaleString(), isVisible: false}]);

      changeContent({userText: userText, dateText: new Date(dateText).toLocaleString(), botText: botText, dateBot: new Date((dateText + 10000)).toLocaleString(), isVisible: false});

      setUserText('');
    }
};

  return (
    <div className={s.inputBlock}>
        <input className={s.inputTextarea} onChange={onTextAreaChange} value={userText}/>
        <button type='button' className={s.inputButton} onClick={onButtonClick}><img src={send} width="24" height="24" alt="" /></button>
    </div>
  )
}

InputMessage.propTypes = {
  changeContent: PropTypes.func.isRequired,
}

export default InputMessage

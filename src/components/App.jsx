import React, { useEffect, useState } from 'react';
import Header from "./Header/Header";
import Chats from './Chats/Chats';
import Main from './Main/Main';
import Filter from './Filter/Filter';

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [userHeader, setUserHeader] = useState([
    {name: 'User', img: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-14.jpg', isOnline: true}
  ]);
  const [userChat, setUserChat] = useState([
    {id: 1, name: 'Josefina', img: 'https://randomuser.me/api/portraits/med/women/3.jpg', isOnline: true, content: [
      {userText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', dateText: `Jun 11, 2017 `, botText: 'You are the kind 1', dateBot: `Jun 11, 2017 `, isVisible: true},
      {userText: 'Text message 2', dateText: `Jun 12, 2017 `, botText: 'You are the kind 2', dateBot: `Jun 12, 2017 `, isVisible: true}
    ]},

    {id: 2, name: 'Alice Freeman', img: 'https://randomuser.me/api/portraits/med/women/14.jpg', isOnline: true, content: [{userText: 'Text message 2', dateText: `Jun 13, 2017 `, botText: 'You are the kind', dateBot: `Jun 12, 2017 `, isVisible: true}]},

    {id: 3, name: 'Velazquez', img: 'https://randomuser.me/api/portraits/med/men/9.jpg', isOnline: true, content: [{userText: 'Text message 3', dateText: `Jun 14, 2017 `, botText: 'You are the kind', dateBot: `Jun 12, 2017 `, isVisible: true}]},

    {id: 4, name: 'Barrera', img: 'https://randomuser.me/api/portraits/med/women/19.jpg', isOnline: true, content: [{userText: 'Text message 4', dateText: `Jun 15, 2017 `, botText: 'You are the kind', dateBot: `Jun 12, 2017 `, isVisible: true}]}
  ]);

  const [activeUser, setActiveUser] = useState([
    {
      id: 0,
      isActive: false,
      index: null
    }
  ]);

  const [filter, setFilter] = useState('');

  function addBotUser (idNumber) {
    let addBot = Object.assign([], activeUser);
    addBot[0].id = idNumber;

    // eslint-disable-next-line array-callback-return
    const indexUser = userChat.findIndex((element, index) => {
      if (element.id === idNumber) {
      return true
      }
      })
    addBot[0].index = indexUser;

    setActiveUser(addBot);
  }

  function changeContent (contents) {
    let addMess = Object.assign([], userChat);
    addMess[activeUser[0].index].content.push(contents);

    setUserChat(addMess);

    setTimeout(() => {
      let afterMess = Object.assign([], addMess);
      const indexTimer = afterMess[activeUser[0].index].content.length - 1;
      afterMess[activeUser[0].index].content[indexTimer].isVisible = true;

      const fromIndex = activeUser[0].index;
      console.log(fromIndex)
      const item = afterMess.splice(fromIndex, 1)[0]; 
      afterMess.splice(0, 0, item); 
     
      setUserChat(afterMess);
      
      localStorage.setItem('chatsData', JSON.stringify(afterMess));
    }, 10000);

  };

  useEffect(() => {
    const chatsData = localStorage.getItem('chatsData');
    const parsedChatsData = JSON.parse(chatsData);

    if (parsedChatsData) {
      setUserChat(parsedChatsData);
    }
  },[]);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return userChat.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div className="container">
      <section className="aside">
        <Header img={userHeader[0].img} isOnline={userHeader[0].isOnline} >
          <Filter value={filter} onChange={changeFilter} />
        </Header>
        <Chats chat={getVisibleContacts()} addBotUser={addBotUser}/>
      </section>
      <section className="main">
        {activeUser[0].id > 0 &&
          <Main user={userChat} activeUser={activeUser} changeContent={changeContent} />
        }
      </section>
    </div>
  );
};

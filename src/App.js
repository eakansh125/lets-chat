
/* import { Button, InputLabel, Input } from '@material-ui/core'; */
import { Input } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import React, { useEffect, useState } from 'react';
import './App.css';
import Msg from './Msg';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import logo from "./logo.png";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); //{username: 'Eric', text: 'Wadup, man?'}
  const [username, setUsername] = useState('');

  //useEffect gets executed based on a condition in REACT

  useEffect(() => {
    //run code here
    //if its blank inside [], it runs just once when the app component loads
    setUsername(prompt('Please enter your name'));
  }, [])//condition *Every time the condition changes[<condition>], the code runs


  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])
  /* console.log(input); */
  /* console.log(messages); */


  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    /* setMessages([...messages, {username: username, text: input}]); */ //...a,b is spread operator, it appends the value of b to a
    setInput('');
  }

  return (
    <div className="App">
      <img alt="logo" src={logo} width='150px' height='150px'/>
        <h1>Welcome {username} 🙋‍♂️</h1>
        <h1>Talk is overrated, lets just vibe!! 📣</h1>
      
      
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message</InputLabel> */}
          <Input className="app__input" placeholder="Enter a message" value={input} onChange={event => setInput(event.target.value)}/>

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>

         {/*  <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send</Button> */}
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
                <Msg key={id} username={username} txt={message} />
            
          ))
        }
      </FlipMove>
      
      
      
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react'
import { Button, FormControl,InputLabel, Input } from '@material-ui/core'
import "./App.css"
import Message from "./Message"
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput]=useState('')
  const [messages, setMessages]=useState([])
  const [username, setUsername]= useState('')

  useEffect(()=>{
    db.collection('message')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id, message:doc.data()})))
    })

  },[])

  useEffect(()=> {
    setUsername(prompt("Please enter your name"))

  },[])
  const sendMessage=(event)=>
  {
    event.preventDefault()
    db.collection('message').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }
  return (
    <div className="App">
      <img src="data:image/jpeg;base64,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" />
     
      <form className="form">
      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event=> setInput(event.target.value)}  />
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon/>
          </IconButton> 
        
  
      </FormControl>
      
      
      </form>
      <FlipMove>
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        
        ))
      }
      </FlipMove>
     
    </div>
  )
}

export default App


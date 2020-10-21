import React, {useState, useEffect} from 'react';
import socketio from 'socket.io-client';
import TextField from '@material-ui/core/TextField';
import './chatbox.css'
const server = 'http://localhost:5000/'

const io = socketio(server);
    io.on('connection', () => {
      console.log('we are connected with the backend')
    })  

const ChatBoxTest = () => {
const [state, setState] = useState({message: '', name: ''})
const [chat, setChat] = useState([])

useEffect(() => {
    io.on('message', ({name, message}) => {
        setChat([...chat, {name, message}])
    })
})
const renderChat = () => {
    return chat.map(({name, message}, index) => (
        <div key={index}>
            <h3>{name}: <span>{message}</span></h3>
        </div>
    ))
}

const onTextChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
}

const onMessageSubmit = (e) => {
    e.preventDefault();
    const {name, message} = state
    io.emit('message', {name, message})
    setState({message: '', name})
    

}
    
    return (
        <div className='card'>
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div className='name-field'>
                    <TextField 
                    name='name' 
                    onChange = {e => onTextChange(e)} 
                    value={state.name} 
                    label='name'/>
                 </div>
                 <div className='text-field'>
                    <TextField 
                    name='message'
                    onChange = {e => onTextChange(e)}
                    value={state.message}
                    label='message'/>
                </div>             
                <button>send message</button>
            </form>

            <div className='render-chat'>
                <h1>chat log</h1>
                {renderChat()}
            </div>
        </div>

    
    );
  }

export default ChatBoxTest;
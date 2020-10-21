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
//defining state
const [state, setState] = useState({name: '', message: ''})
const [chat, setChat] = useState([])


// socket listening for our message action, setchat is pulling all previous chat and making sure it is displayed
useEffect(() => {
    io.on('message', ({name, message, timestamp}) => {
        setChat([...chat, {name, message, timestamp}])
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
    console.log(state)
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
                    {/* <input type='text' 
                    onChange = {e => onTextChange(e)}
                    value={state.name}
                    placeholder='name'
                    ></input> */}
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


// socket listening for our message action, setchat is pulling all previous chat and making sure it is displayed
{/* <div className='name-field'>
<input type='text' 
onChange = {e => onTextChange(e)}
value={state.name}
placeholder='name'
></input>
</div>
<div className='text-field'>              
<input type='text' 
onChange = {e => onTextChange(e)}
value={state.message}
placeholder='message'
></input>
</div>   */}
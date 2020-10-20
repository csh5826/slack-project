import React, {useState, useEffect} from 'react';
import socketio from 'socket.io-client';
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
        <div>
            <form onSubmit={onMessageSubmit}>
                <h1>Messenger</h1>
                <div className='name-field'>
                    <div name='name' onChange = {e => onTextChange(e)} value={state.name} label='name'></div>
                    <div name='message' onChange = {e => onTextChange(e)} value={state.message} label='message'></div>
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
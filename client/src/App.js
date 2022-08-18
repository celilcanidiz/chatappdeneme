import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {ChatProvider} from './context/ChatContext';
import Container from './components/Container';

function App() {
  
  return (
    <ChatProvider> 
    <Container/>
    </ChatProvider>
    // <Palette />
  );
}

export default App;

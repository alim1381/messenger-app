import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
// Components
import Login from './components/Login';
import Chat from './components/Chat';

// Context
import AuthContextProvider from './contexts/User.Context.Provider';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

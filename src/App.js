import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route}from "react-router-dom" ;
import { useStateValue } from './StateProvider';

function App() {
  const[{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    <Router>
      {!user ?(
        <Login />
      ):(
     <>
     <Header />
    <div className ="app_body">
      <Sidebar />
      <Routes> 
      <Route path="/room/:roomId" element={ <Chat /> }>
      </Route>
      <Route path="/" element={<h1>Welcome</h1>}>
        
      </Route>
    </Routes>
          {/* React-router ->Chat screen*/}
    </div>
    </>
       )}
    </Router>
    </div>
  );
}

export default App;

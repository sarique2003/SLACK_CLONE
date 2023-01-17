import React from 'react'
import "./Message.css"

function Message({message, timestamp , user, userimage}) {
  return  <div className='message'>
      <img src ={userimage} alt =""/>
       <div className='message_info'>
         <h4>
            {user} 
              <span className='message_timestamp'>
                    {new Date().toLocaleString()}
              </span>
          </h4>
         <p className="purpose">{message}</p>
       </div>
    </div>;
}

export default Message
import React,{useEffect,useState} from 'react';
const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://localhost:55455/', 'echo-protocol');

export default function Poly(){
     client.onmessage = function (event) {
  
        if (event.data == 'on') {
            console.log('on massage on');
        } else if (event.data == 'off') {
            console.log('on massage off');
        }
      };
        client.onclose = function() {
            console.log('echo-protocol Client Closed');
        };
        
    useEffect(()=>{
 client.onerror = function() {
            console.log('Connection Error');
        };
       
        client.onmessage = function(e) {
            if (typeof e.data === 'string') {
                console.log("Received: '" + e.data + "'");
            } 
        }
    },[])


return(
    
<div> 
<p>misael</p>
</div>
    
)
}
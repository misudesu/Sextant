import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useParams,useLocation} from 'react-router-dom'
import Poly from './Poly';

export default function Home(props){
    const {idss}=useLocation().state;
    const {ips}=useParams(); 
    const [Ip,setIp]=useState(null);
    const [checkip,setCheckip]=useState(null)
  //"2001:db8:3333:4444:5555:6666:7777:8888"
  //checkIfValidIP(ips); // true
  // checkIfValidIP("192.168.1.1"); // false   

useEffect(()=>{
   
    if(checkIfValidIP(ips)===true){
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6gKfJkuMqSnvSvRgY5YdDSf5heOHi&ipAddress=${ips}`,{
        method:'GET',
        headers:{},
    }
        ).then(res=>{
           // console.log(res);
            return res.text()
        }).then(location=>{
            console.log(location);
            setIp(location);
        })   
    }else{
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_6gKfJkuMqSnvSvRgY5YdDSf5heOHi&ipAddress=${idss}`,{
            method:'GET',
            headers:{},
        }
            ).then(res=>{
               // console.log(res);
                return res.text()
            }).then(location=>{
                console.log(location);
                setIp(location);
            }) 
    }
     
},[ips])

function checkIfValidIP(str) {
    // Regular expression to check if string is a IPv6 address
    const regexExp = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/gi;
   /// setCheckip(regexExp.test(str));       
    return regexExp.test(str);
  }
if(Ip){
  return(  <div>
    
    <p> your ip iS  iPv6 </p>
    {Ip} 
    </div>  
  );
}
 return(
<div>
<p>your ip iS  iPv4. </p>
<hr/>
{Ip}
</div>
 )  ; 

}

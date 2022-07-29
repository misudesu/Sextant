import '../App.css';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
function Exhibit(){
    const ips="2001:db8:3333:4444:5555:6666:7777:8888";
    const ipss="192.168.10.100";
    return(
        <div>
<header id="App-header">
<Link  to={`/${ips}`} state={{ 
  ids:ips,
}} >iPv6</Link>
<p> <Link    to={`/${ipss}`} state={{ 
  idss:ipss,
}}>iPv4</Link>
    </p>
    <hr/>
    <p> <Link to="poly" >Poly</Link>
    </p>
    <hr/>
</header>

        </div>
    );
}
export default Exhibit;
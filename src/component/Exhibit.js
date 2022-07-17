import '../App.css';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
function Exhibit(){
    return(
        <div>
<header id="App-header">
<Link  to="/" >Home</Link>
<p> <Link  to="/About" >About</Link>
    </p>
    <hr/>
</header>

        </div>
    );
}
export default Exhibit;
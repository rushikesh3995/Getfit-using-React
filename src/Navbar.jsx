import './App.css';
import { Link,Outlet } from "react-router"


function Navbar(){
    return(
        <>
        <div className="header" >
                <Link><img src='https://i.pinimg.com/originals/13/35/95/133595fdc12447efbefb8a6a4b1eff7f.jpg' alt="" style={{width:"80px" , display:"flex"}} /></Link>
                

                <div>
            <ul>
                  <li><Link to="/"></Link></li>
                    
                <li><Link to={"/Fitness"}>Fitness</Link></li>
                <li><Link to={"/Store"}>Store</Link></li>
                <ul className='list'>
                    <li><Link to={"/New"}>Location</Link></li>
                  
                <li><Link to={"/Profile"}>Profile</Link></li>
              

               
                <li><Link to={"/Getapp"}>GetApp</Link></li>
                </ul>
                
            </ul>
        </div>

        
        </div>
         <Outlet></Outlet>
        </>
       
        
    )
    
}
export default Navbar;

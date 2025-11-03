import { Link,Outlet } from "react-router";


function Fitness(){
    return (
    <>
    <ul className="secondli">
        <li><Link to={"GetFitPassElite"} >GetFitPass Elite</Link></li>
         <li><Link to={"GetFitpassPRO"}>GetFitpass PRO</Link></li>
        <li><Link to={"GetFitpass Home"}>GetFitpass Home</Link></li>
        <li><Link to={"Transform Plus"}>Transform Plus</Link></li>

    </ul>
    <Outlet></Outlet>


    <div className="pass" style={{border:"1px solid black"}}>
        <ul>
           
           
           <h2 className="Elite">ELITE</h2>
            <h2>₹13,570/-month</h2>
            <li>ELITE Gyms & Group Classes: Unlimited</li>
        <li>PRO Gyms: Unlimited</li>
        <li>Smart Workout Plan: Unlimited</li>
        <li>At-home Workouts: Unlimited</li>
        <button className="Button">Pay Now</button>
      
        
        </ul>
         <ul>
            <h2 className="Pro">PRO</h2>
            <h2>₹7000/-month</h2>
        <li>ELITE Gyms & Group Classes: 2 Sessions/month</li>
        <li>PRO Gyms: Unlimited</li>
        <li>Smart Workout Plan: Unlimited</li>
        <li>At-home Workouts: Unlimited</li>
        <button className="Button">Pay Now</button>
      </ul>
             <ul>
                <h2 className="home"> HOME</h2>
                <h2>₹1160/-month</h2>
        <li>ELITE Gyms & Group Classes: Not included</li>
        <li>PRO Gyms: Not included</li>
        <li>Smart Workout Plan: Unlimited</li>
        <li>At-home Workouts: Unlimited</li>
        <button className="Button">Pay Now</button>
      </ul>

    </div>

   
    </>

    );
    
}
export default Fitness;

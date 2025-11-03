import { Routes,Route,Link } from "react-router"

import Navbar from "./Navbar"
import Store from "./Store"
import Fitness from "./Fitness"
import New from "./New"
import Profile from "./Profile"
import Shop from "./Shop"
import Getapp from "./Getapp"
import Getfitelite from "./Getfitelite"
import Getfitpro from "./Getfitpro"
import Getfithome from "./Getfithome"
import Transform from "./Transform"
import Getfit from "./Getfit"
import Calculate from "./Calculate"


function App(){
    return (
        <>
        <Navbar />
            
            <Routes>
                <Route path="/" element={<Getfit/>}/>
                     <Route path="/Calculate" element={<Calculate/>}/>
                
               
                <Route path="/Fitness" element={<Fitness />}>
                    
                    <Route path="GetFitPassElite" element={<Getfitelite/>}/>
                    <Route path="GetFitpassPRO" element={<Getfitpro/>}/>
                    <Route path="GetFitpass Home" element={<Getfithome/>}/>
                    <Route path="Transform Plus" element={<Transform/>}/>
               </Route>

                <Route path="/Store"   element={<Store />}/>
                <Route path="/Fitness" element={<Fitness />}/>
                <Route path="/New" element={<New />}/>
                <Route path="/Profile" element={<Profile />}/>
                <Route path="/Shop" element={<Shop/>}/>
                <Route path="/Getapp" element={<Getapp/>}/>
            </Routes>
        

        </>

      
    )
}
export default App;

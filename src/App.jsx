import { Routes,Route,Link } from "react-router"

import Navbar from "./Navbar"
// import Store from "./Store"
import Fitness from "./Fitness"
// import New from "./New"
// import Profile from "./Profile"
// import Shop from "./Shop"
import Getapp from "./Getapp"
import Getfitelite from "./Getfitelite"
import Getfitpro from "./Getfitpro"
import Getfithome from "./Getfithome"
import Transform from "./Transform"
import Getfit from "./Getfit"
import Calculate from "./Calculate"
import Register from "./Register"
import Login from "./Login"
import TrainerRegister from "./TrainerRegister"
import Gym from "./Gym"
import Onedaytry from "./Onedaytry"
import PricingTable from "./PricingTable"
import FAQ from "./FAQ"
import GymDetails from "./GymDetails"
import About from "./About"
import Supplements from "./Supplements"
import Clothing from "./Clothing"
import Accessories from "./Accessories"
import Refer from "./Refer"
import AdminDashboard from "./pages/AdminDashboard"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "./components/ProtectedRoute"
import Elite from "./Elite"
import MyPlan from "./pages/MyPlan"
// import HowItWorks from "./HowItWorks"

function App(){
    return (
        <>
        <Navbar />
            
            <Routes>
                <Route path="/" element={<Getfit/>}/>
                     <Route path="/Calculate" element={<Calculate/>}/>
                
               
                 {/* <Route path="/fitness" element={<Fitness />}>
                    
                    <Route path="GetFitPassElite" element={<Getfitelite/>}/>
                    <Route path="GetFitpassPRO" element={<Getfitpro/>}/>
                    <Route path="GetFitpass Home" element={<Getfithome/>}/>
                    <Route path="Transform Plus" element={<Transform/>}/>
               </Route>  */}


{/* 


<Route path="/fitness" element={<Fitness />}>
  <Route path="Getfitelite" element={<Getfitelite />} />
  <Route path="Getfitpasspro" element={<Getfitpro />} />
  <Route path="Getfitpass Home" element={<Getfithome />} />
  <Route path="Transform Plus" element={<Transform />} />
</Route> */}

  

<Route path="/fitness" element={<Fitness/>}>
<Route path="elite" element={<Elite/>}/>
</Route>

        {/* <Route path="/fitness" element={<Fitness />}>

          <Route
            path="./GetFitPassElite"
            element={<Getfitelite/>}
          />

          <Route
            path="./GetFitpassPRO"
            element={<Getfitpro />}
          />

          <Route
            path="./GetFitpassHome"
            element={<Getfithome />}
          />

          <Route
            path="./TransformPlus"
            element={<Transform />}
          /> /</Route> */}

                {/* <Route path="/Store"   element={<Store />}/> */}
                <Route path="/Fitness" element={<Fitness />}/>
                {/* <Route path="/New" element={<New />}/> */}
                {/* <Route path="/Profile" element={<Profile />}/>
                <Route path="/Shop" element={<Shop/>}/> */}
                <Route path="/Getapp" element={<Getapp/>}/>
                {/* <Route path="/Login" element={<Login/>}/> */}
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/trainer-register" element={<TrainerRegister/>}/>
                <Route path="/gym" element={<Gym/>}/>
                {/* <Route Path="/Onedaytry" element={<Onedaytry/>}/> */}
                <Route path="/onedaytry" element={<Onedaytry/>}/>
                <Route path="/pricingtable" element={<PricingTable/>}/>
                <Route path="faq" element={<FAQ/>}/>
                <Route path="/howitworks" element={<howitworks/>}/>
                {/* <Route path="gym-details" element={<GymDetails/>}/> */}
                <Route path="/gym/:id" element={<GymDetails />} />
                <Route path="/About" element={<About/>}/>
                <Route path="/Supplements" element={<Supplements/>}/>
                <Route path="/Clothing" element={<Clothing/>}/>
                <Route path="/accessories" element={<Accessories/>}/>
                <Route path="/Refer" element={<Refer/>}/>
               
                <Route path="/admin" element={<AdminDashboard/>}/>
                {/* <Route path="/admin" element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/> */}
                <Route path="/adminlogin" element={<AdminLogin/>}/>
                <Route path="/my-plan" element={<MyPlan/>}/>


            </Routes>
        

        </>

      
    )
}
export default App;

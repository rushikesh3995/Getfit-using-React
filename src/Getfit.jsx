import { Link, Route, Routes } from "react-router";


function Getfit(){
    return(
        <>
        <div className="content-box">
        
       <h3>"Now you can check your BMI for free."</h3>
       

   

<div className="btn btn-primary btn-lg">


             

      <div className="btn btn-primary">
            <Link to="Calculate" style={{color:"white", textDecoration:"none", fontWeight:"bolder"}}>Calculate</Link> 
      </div>
         

           </div>

        <h3 style={{margin:"60px"}}>💪 Benefits of Joining GetFit Gy</h3>
        <ul className="page1">
           <h4 style={{margin:"60px"}}>
        
                
  <li>✅ Personalized workout plans</li>
  <li>✅ Expert trainers & guidance</li>
  <li>✅ Modern equipment & clean space</li>
  <li>✅ Flexible timings</li>
  <li>✅ BMI tracking & progress tools</li>
  <li>✅ Yoga, Zumba & wellness programs</li>
  <li>✅ Supportive fitness community</li>
  <li>✅ Mobile app for easy access</li>


            
           </h4>
           
        </ul>


<section>
  <h2>🎉 Why You Should Join GetFit Gym</h2>
  <p>
    Joining <strong>GetFit Gym</strong> is more than just signing up for workouts — it’s stepping into a lifestyle that champions <strong>health, confidence, and transformation</strong> 💪.
    Whether you're just starting out or already on your fitness journey, GetFit offers <strong>personalized workout plans</strong> 📝 tailored to your goals, guided by <strong>certified trainers</strong> 🧑‍🏫 who know how to push you safely and effectively.
  </p>
  <p>
    Our gym is equipped with <strong>modern machines</strong> 🏋️‍♀️, spacious zones, and a <strong>clean, hygienic environment</strong> 🧼 that makes every session enjoyable.
    You’ll benefit from <strong>flexible timings</strong> ⏰ that fit your schedule, plus access to <strong>holistic wellness programs</strong> like yoga 🧘, Zumba 💃, and meditation 🧠 to balance your body and mind.
  </p>
  <p>
    With <strong>BMI tracking tools</strong> 📊 and regular health assessments, you’ll stay informed and motivated.
    The <strong>GetFit mobile app</strong> 📱 keeps everything at your fingertips — from booking sessions to tracking progress.
  </p>
  <p>
    But what truly sets GetFit apart is the <strong>supportive community</strong> 🤝.
    You’ll be surrounded by people who inspire, encourage, and celebrate your wins — big or small.
    So if you're ready to take control of your health, boost your energy, and feel more confident every day, <strong>GetFit Gym is your perfect partner in transformation</strong> ✨🔥.
  </p>
</section>


</div>
        
        <div class="row g-0 bg-body-secondary position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">

    <img src="https://static.vecteezy.com/system/resources/previews/031/691/772/non_2x/within-gym-with-modern-fitness-equipment-for-fitness-events-and-more-modern-of-gym-interior-with-equipment-sports-equipment-in-the-gym-created-with-generative-ai-photo.jpg" alt="" style={{width:"800px"}} />
  </div>
 <Link to="/Getfit">
 
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we’re using it here to give the component a bit of body and size.</p>
    {/* <a href="" class="stretched-link">Go somewhere</a> */}
  </div>
  </Link>
</div>


        
           
        </>
    );
}
export default Getfit;
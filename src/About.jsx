import React from "react";
import "./about.css";

const features = [
  {
    title: "Members App",
    desc: "Personalized fitness plans integrated with body dynamics (BCA, BMI).",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ef88f3159367579.63b45b3a61a12.png",
    points: [
      "Workout Tracking",
      "Nutrition Guidance",
      "Personal Training",
      "Gym Booking",
      "Progress Tracking",
      "Health Monitoring"
    ]
  },
  {
    title: "Trainers App",
    desc: "Empowers trainers with data-driven insights and real-time updates.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/3f/dc/d2/3fdcd231-5888-51ad-427c-5376250822b5/c24009b1-2250-40c9-9132-7bee076b27ed_Iphone-8-Plus-3_U00281_U0029.png/750x750bb.jpeg",
    points: [
      "Workout Assignments",
      "Performance Tracking",
      "Session Scheduling",
      "Client Feedback",
      "Progress Insights",
      "Diet Planning"
    ]
  },
  {
    title: "Gym OS Dashboard",
    desc: "Complete operational control for seamless gym management.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/b2/4d/dd/b24ddd84-b4bd-24c5-326b-a821e4f7959f/1f203cd6-c16d-44c6-85b1-681748410af8_iPhone_8_Plus_-_5.png/750x750bb.jpeg",
    points: [
      "Member Management",
      "Attendance Tracking",
      "Payment Processing",
      "Analytics Dashboard",
      "Inventory Management",
      "Health Monitoring"
    ]
  },
  {
    title: "Television App",
    desc: "Maximizes brand visibility with promotions and smart displays.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/f9/dc/13/f9dc1347-b964-4956-7ab9-7aa8fa0670ba/c7c97107-49ae-41af-ab1d-781f483d8da8_iPhone_8_Plus_-_3.png/750x750bb.jpeg",
   
    points: [
      "Workout Streaming",
      "Performance Metrics",
      "Class Schedules",
      "Brand Promotions",
      "Equipment Tutorials",
      "Member Motivation"
    ]
  },
  {
    title: "Admin Panel",
    desc: "Centralized control system for managing the gym ecosystem.",
    img: "https://s3.envato.com/files/638957842/screenshot/6.png",
    points: [
      "User Management",
      "Reports & Analytics",
      "Role Management",
      "System Monitoring",
      "Notifications",
      "Security Controls"
    ]
  }
];

const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <h1>About GETFIT</h1>
        <p>
          We are building a smarter fitness ecosystem to help you stay healthy,
          active, and motivated every day.
        </p>
      </section>

      {/* TOP SECTION */}
      <section className="about-top">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            We connect people with the best gyms, trainers, and wellness solutions.
          </p>

          <h2>Our Mission</h2>
          <p>
            To empower individuals with tools and guidance to achieve fitness goals.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Access to top gyms</li>
            <li>✔ Flexible plans</li>
            <li>✔ Expert trainers</li>
            <li>✔ Modern facilities</li>
          </ul>
        </div>

        <div className="about-right">
          <img src="https://as2.ftcdn.net/jpg/09/42/84/97/1000_F_942849755_HHDqm8XGDWLa0OYG9prvDaIaFjC1VMOd.jpg" />
          <img src="https://www.alqudra.sa/cdn/shop/articles/DALL_E_2024-12-17_15.04.52_-_An_energetic_gym_scene_showcasing_modern_cardio_machines_such_as_treadmills_elliptical_trainers_and_rowing_machines_in_a_sleek_well-lit_fitness_cen_1be3de_1792x.webp?v=1738128308" />
          <img src="https://miro.medium.com/v2/resize:fit:1024/1*-bvJqaVx1QJSbfJMzDJf1g.jpeg" />
          <img src="https://www.topline.uk.net/wp-content/uploads/2022/01/Sauna-Horwood-House.jpg" />
          
        </div>
      </section>

      {/* FEATURES */}
      <section className="about-features">
        {features.map((item, index) => (
          <div
            key={index}
            className={`about-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="about-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <ul>
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="about-img">
              <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </section>

          
          <section className="wts-section">

  {/* TOP PART */}
  <div className="wts-top">

    <div className="wts-image">
      <img src="https://img.freepik.com/premium-photo/group-athletic-men-women-stand-together-background-gym_132358-45468.jpg" alt="team" />
    </div>

    <div className="wts-content">
      <p>
        Transforming neighbourhood gyms into high-efficiency, tech-enabled fitness hubs
        with standardized operations and premium member experiences.
      </p>

      <div className="wts-stats">
        <div>
          <h2>21<span>+</span></h2>
          <p>AI Driven Gyms</p>
        </div>

        <div>
          <h2>95<span>+</span></h2>
          <p>Certified Trainers</p>
        </div>
      </div>
    </div>

  </div>

  {/* DARK CARD */}
  <div className="wts-card">

    <div className="wts-left">
      <button>Join  GETFIT Revolution</button>
      <h2>What Sets GETFIT Apart?</h2>
    </div>

    <div className="wts-right">

      <div className="feature">
        <div className="icon">⚙️</div>
        <h3>Transformation Of Local Gyms</h3>
        <p>Transforms local gyms into high-performing tech fitness centers.</p>
      </div>

      <div className="feature">
        <div className="icon">👥</div>
        <h3>Exceptional Customer Experiences</h3>
        <p>Delivers exceptional customer experiences and retention.</p>
      </div>

      <div className="feature">
        <div className="icon">💰</div>
        <h3>Tailored Budget Solutions</h3>
        <p>Affordable solutions for all gym segments.</p>
      </div>

      <div className="feature">
        <div className="icon">📊</div>
        <h3>Fragmented Fitness Solution</h3>
        <p>Integrated gym, nutrition and wellness ecosystem.</p>
      </div>

    </div>

  </div>

</section>














    </div>
  );
};

export default About;
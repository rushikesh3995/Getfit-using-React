




















import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import "./Gym.css";
import GymDetails from "./GymDetails";

const Gym = () => {

  
  const navigate = useNavigate();
  const areas = ["Wakad", "Hadapsar", "Viman Nagar", "Hinjewadi", "Baner", "Kharadi"];
  const categories = ["Digi", "Base", "Ultra"];

  const gymImages = [
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  ];

  let index = 0;
  const gymData = [];

  areas.forEach(area => {
    categories.forEach(cat => {
      for (let i = 0; i < 2; i++) { // 👈 makes 30+ gyms
        gymData.push({
          title: `GETFIT ${cat} ${area}`,
          area,
          category: cat,
          img: gymImages[index % gymImages.length],
          address: `${area}, Pune`,
          rating: (4 + Math.random()).toFixed(1),
          distance: `${(Math.random() * 5).toFixed(1)} km away`,
          amenities: ["Shower", "CCTV", "Sanitizer", "Washroom"]
        });
        index++;
      }
    });
  });

  // 🔥 STATES
  const [selectedArea, setSelectedArea] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const uniqueAreas = ["All", ...new Set(gymData.map(g => g.area))];

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const filteredGyms = gymData.filter(gym => {
    const areaMatch = selectedArea === "All" || gym.area === selectedArea;
    const categoryMatch = selectedCategory === "All" || gym.category === selectedCategory;
    const amenitiesMatch =
      selectedAmenities.length === 0 ||
      selectedAmenities.every(a => gym.amenities.includes(a));

    return areaMatch && categoryMatch && amenitiesMatch;
  });

  return (
    <>
    <div className="gf-container">
      <div className="gf-layout">

        {/* SIDEBAR */}
        <aside className="gf-sidebar">
          <h3>Filters & Map</h3>
          <p className="gf-sub-text">Find your perfect gym</p>

          <div className="gf-map-box">
            <iframe
              src="https://www.google.com/maps?q=Pune&output=embed"
              title="map"
            ></iframe>
          </div>

          {/* LOCATION */}
          <div className="gf-filter-section">
            <h4>Locations</h4>
            <div className="gf-area-grid">
              {uniqueAreas.map(area => (
                <button
                  key={area}
                  className={selectedArea === area ? "gf-active" : ""}
                  onClick={() => setSelectedArea(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY */}
          <div className="gf-filter-section">
            <h4>Gym Category</h4>
            {["All", "Digi", "Base", "Ultra"].map(cat => (
              <label key={cat}>
                <input
                  type="radio"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* AMENITIES */}
          <div className="gf-filter-section">
            <h4>Amenities</h4>
            {["Shower", "Sanitizer", "CCTV", "Washroom"].map(a => (
              <label key={a}>
                <input
                  type="checkbox"
                  onChange={() => handleAmenityChange(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </aside>

        {/* MAIN */}
        <main className="gf-main">
          <h2>Recommended For You</h2>

          {filteredGyms.map((gym, i) => (
            <div className="gf-card" key={i}>

              <div className="gf-image">
                <img src={gym.img} alt="gym" />
              </div>

              <div className="gf-info">

                <span className={`gf-badge ${gym.category.toLowerCase()}`}>
                  {gym.category}
                </span>

                <div className="gf-top">
                  <h3>{gym.title}</h3>
                  <span className="gf-distance">{gym.distance}</span>
                </div>

                <p className="gf-address">{gym.address}</p>

                <div className="gf-rating">⭐ {gym.rating} • Very Good</div>

                <div className="gf-btn-group">
                  {/* <button className="gf-btn-outline">View Details</button> */}
                       <button 
  className="gf-btn-outline"
  onClick={() => navigate(`/gym/${i}`, { state: gym })}
>
  View Details
</button>

                  <button className="gf-btn-primary">Buy Day Pass ₹1</button>
                </div>

              </div>
            </div>
          ))}

        </main>

      </div>
    </div>



<footer className="footer">
  <div className="footer-container">

    {/* BRAND */}
    <div className="footer-section">
      <h3>GETFIT</h3>
      <p>Your ultimate fitness partner 💪</p>
      <p className="footer-about">
        Track workouts, join programs, and transform your lifestyle with GETFIT.
      </p>

      <div className="store-buttons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
      </div>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-section">
      <h4>Quick Links</h4>
      <a href="/">Home</a>
      <a href="/gym">Gyms</a>
      <a href="/fitness">Programs</a>
      <a href="/store">Store</a>
      <a href="/blog">Blog</a>
    </div>

    {/* SUPPORT */}
    <div className="footer-section">
      <h4>Support</h4>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/help">Help Center</a>
      <a href="/faq">FAQs</a>
    </div>

    {/* COMPANY */}
    <div className="footer-section">
      <h4>Company</h4>
      <a href="/about">About Us</a>
      <a href="/careers">Careers</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms & Conditions</a>
    </div>

    {/* CONTACT */}
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@getfit.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Pune, India</p>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 GETFIT. All rights reserved.</p>
    <p className="footer-credit">Made with ❤️ for fitness lovers</p>
  </div>
</footer>



</>





  );
};

export default Gym;
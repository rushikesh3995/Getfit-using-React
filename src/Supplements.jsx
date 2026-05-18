import "./Products.css";

function Supplements() {
const products = [
  {
    name: "MB Whey Protein",
    price: "₹2499",
    rating: "4.8 ⭐",
    desc: "Premium whey protein for muscle growth, strength, and faster recovery after workouts.",
    img: "https://5.imimg.com/data5/SD/ZA/WL/SELLER-82419902/muscleblaze-whey-gold-500x500.jpg",
    // link: "https://www.muscleblaze.com"
    link: "https://www.muscleblaze.com/sv/muscleblaze-biozyme-iso-zero/SP-45405?navKey=VRNT-89955"
  },

  {
    name: "MB Creatine Monohydrate",
    price: "₹899",
    rating: "4.7 ⭐",
    desc: "Boost workout performance, power output, and muscle endurance during heavy training.",
    img: "https://5.imimg.com/data5/SELLER/Default/2021/2/IT/WP/QC/61612663/muscleblaze-mb-creatine-monohydrate-powder.jpg",
    link: "https://www.muscleblaze.com/sv/muscleblaze-creatine-monohydrate-creamp/SP-33852?navKey=VRNT-74477"
  },

  {
    name: "MB Mass Gainer XXL",
    price: "₹1999",
    rating: "4.6 ⭐",
    desc: "High-calorie formula designed for healthy weight gain and lean muscle building.",
    img: "https://app.nutsby.com/common_assets/admin/products/A0RRWCZC/muscleblaze-mass-gainer-xxl-powder-chocolate-3-kg-d.webp",
    link: "https://www.muscleblaze.com/sv/muscleblaze-super-gainer-xxl-weight-gainer/SP-42633?navKey=VRNT-91389"
  },

  {
    name: "MB Pre Workout",
    price: "₹1499",
    rating: "4.5 ⭐",
    desc: "Advanced pre-workout blend for explosive energy, focus, and gym intensity.",
    img: "https://th.bing.com/th/id/R.e320569b34c3fb5ce8503975b6d07800?rik=RzdcCSiiFujgeA&riu=http%3a%2f%2fmbnutrition.com%2fcdn%2fshop%2ffiles%2fm4-1.png%3fv%3d1748160792&ehk=FQ%2bldeY%2bwvPmAuev3Tj4XJbfrpbQfkTlhhch84622hM%3d&risl=&pid=ImgRaw&r=0",
    link: "https://www.muscleblaze.com/sv/muscleblaze-pre-workout-wrathx/SP-99770?navKey=VRNT-185748"
  },

  {
    name: "MB BCAA",
    price: "₹1299",
    rating: "4.7 ⭐",
    desc: "Supports recovery, hydration, and reduced muscle soreness after intense exercise.",
    img: "https://assets.hyugalife.com/catalog/product/n/u/nut5901-02_1.jpg",
        link: "https://www.muscleblaze.com/sv/muscleblaze-omega-3-fish-oil-1000-mg-with-180mg-epa-and-120mg-dha/SP-36756?navKey=VRNT-90655"
    // link: "https://www.muscleblaze.com/sv/muscleblaze-bcaa-gold-8:1:1-amino-acids-supplements/SP-59969?navKey=VRNT-130301"
  },

  {
    name: "MB Fish Oil",
    price: "₹699",
    rating: "4.6 ⭐",
    desc: "Omega-3 rich fish oil capsules that support heart, joints, and overall wellness.",
    img: "https://tse4.mm.bing.net/th/id/OIP.nL_YUtu6fMuV-dstdv4asAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    // link: "https://www.muscleblaze.com/sv/muscleblaze-omega-3-fish-oil-1000-mg-with-180mg-epa-and-120mg-dha/SP-36756?navKey=VRNT-90655"
    link: "https://www.muscleblaze.com/sv/muscleblaze-bcaa-gold-8:1:1-amino-acids-supplements/SP-59969?navKey=VRNT-130301"
  },
];
  return (
    <>
    
    <div className="product-page">
      <div className="page-hero">
        <h1>Supplements</h1>
        <p>Fuel your body with premium nutrition</p>
      </div>

      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
  <button>Buy Now</button>
</a>
          </div>
        ))}
      </div>
    </div>






    {/* INFO SECTION */}

<div className="info-section">
  <h2>Why Use Supplements?</h2>

  <p>
    Fitness supplements help improve muscle recovery, strength,
    endurance, and overall workout performance. Whether your goal is
    muscle gain, fat loss, or improving stamina, the right supplements
    can support your fitness journey effectively.
  </p>

  <p>
    Our premium-quality supplements are tested for purity and designed
    for athletes, beginners, and fitness enthusiasts. From whey protein
    to creatine and pre-workout formulas, GETFIT provides everything
    needed for better training results.
  </p>

  <div className="benefits">
    <div className="benefit-card">
      <h3>💪 Muscle Growth</h3>
      <p>Supports lean muscle development and faster recovery.</p>
    </div>

    <div className="benefit-card">
      <h3>⚡ Energy Boost</h3>
      <p>Improve workout performance and endurance naturally.</p>
    </div>

    <div className="benefit-card">
      <h3>🔥 Fat Loss</h3>
      <p>Helps maintain metabolism and improve body composition.</p>
    </div>
  </div>
</div>

{/* REVIEW SECTION */}

<div className="review-section">
  <h2>What Our Members Say</h2>

  <div className="reviews">
    <div className="review-card">
      <h3>Rahul Sharma</h3>
      <p>
        “Best protein quality I have used. Recovery improved a lot.”
      </p>
    </div>

    <div className="review-card">
      <h3>Priya Mehta</h3>
      <p>
        “Amazing products and very fast delivery. Highly recommended.”
      </p>
    </div>

    <div className="review-card">
      <h3>Aman Verma</h3>
      <p>
        “The creatine and pre-workout combo really boosted my strength.”
      </p>
    </div>
  </div>
</div>





{/* TRANSFORMATION SECTION */}

<div className="transformation-section">
  <div className="transform-text">
    <h2>Your Transformation Starts Today</h2>

    <p>
      Every champion starts somewhere. Consistency, proper nutrition,
      and hard work create real transformations. GETFIT helps you stay
      on track with high-quality supplements trusted by athletes.
    </p>

    <button>Start Your Journey</button>
  </div>

  <div className="transform-image">
    <img
      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400"
      alt=""
    />
  </div>
</div>

{/* REVIEWS */}

<div className="review-section">
  <h2>Success Stories</h2>

  <div className="reviews">

    <div className="review-card">
      <h3>Rahul Mehta</h3>
      <p>
        “The whey protein quality is excellent. I gained noticeable
        muscle within 2 months.”
      </p>
    </div>

    <div className="review-card">
      <h3>Aditya Sharma</h3>
      <p>
        “GETFIT creatine improved my workout performance and recovery.”
      </p>
    </div>

    <div className="review-card">
      <h3>Priya Verma</h3>
      <p>
        “Amazing products, premium packaging, and fast delivery service.”
      </p>
    </div>

  </div>
</div>
{/* FAQ SECTION */}

<div className="faq-section">
  <h2>Need Help? We've Got Answers</h2>

  <div className="faq-box">
    <span>01</span>

    <div>
      <h3>Which supplement is best for beginners?</h3>

      <p>
        Beginners usually start with whey protein because it helps meet
        daily protein needs and supports muscle recovery after workouts.
      </p>
    </div>
  </div>

  <div className="faq-box">
    <span>02</span>

    <div>
      <h3>When should I take pre-workout?</h3>

      <p>
        Pre-workout supplements are generally consumed 20–30 minutes
        before training for better energy and focus.
      </p>
    </div>
  </div>

  <div className="faq-box">
    <span>03</span>

    <div>
      <h3>Do I need supplements if I already eat healthy?</h3>

      <p>
        Supplements are designed to support nutrition goals and fill
        gaps that may be difficult to achieve through food alone.
      </p>
    </div>
  </div>

  <div className="faq-box">
    <span>04</span>

    <div>
      <h3>Can supplements help improve workout recovery?</h3>

      <p>
        Yes, protein, BCAA, and recovery formulas help muscles recover
        faster after intense exercise sessions.
      </p>
    </div>
  </div>

  <div className="faq-box">
    <span>05</span>

    <div>
      <h3>Why choose GETFIT supplements?</h3>

      <p>
        GETFIT products are made using premium-quality ingredients,
        tested formulas, and athlete-focused nutrition standards.
      </p>
    </div>
  </div>
</div>



<div className="tips-section">
  <h2>Fitness Tips</h2>

  <ul>
    <li>✔ Drink at least 3-4 liters of water daily.</li>
    <li>✔ Eat enough protein for muscle recovery.</li>
    <li>✔ Maintain proper sleep for better performance.</li>
    <li>✔ Stay consistent with workouts and nutrition.</li>
    <li>✔ Warm up before every training session.</li>
  </ul>
</div>

</>









  );
}

export default Supplements;
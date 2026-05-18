import "./Products.css";

function Accessories() {

const items = [
 {
  name: "Gym Gloves",
  price: "₹499",
  img: "https://i5.walmartimages.com/seo/DXM-SPORTS-Weightlifting-Workout-Gym-Gloves-for-Men-2X-Large-Blue_585ac8b8-a40c-43d4-bd78-71fb87513a94.c9d2612cf9aec8703559800812760aff.jpeg",
  link: "https://www.amazon.in/s?k=gym+gloves"
},

{
  name: "Shaker Bottle",
  price: "₹299",
  img: "https://m.media-amazon.com/images/I/61eYTyjmzbL._AC_SL1500_.jpg",
  link: "https://www.amazon.in/s?k=protein+shaker+bottle"
},

{
  name: "Resistance Bands",
  price: "₹799",
  img: "https://powersystems.com/cdn/shop/files/6_band_2_v1_36310c7d-3df5-407f-9cc1-b36ee1b8ba71.jpg?v=1765986307",
  link: "https://www.amazon.in/s?k=resistance+bands"
},

{
  name: "Yoga Mat",
  price: "₹999",
  img: "https://cdn.shopify.com/s/files/1/1728/2157/products/05-64061_6MM-GAIAM-ESSENTIALS-YOGA-MAT-TEAL_E.jpg?v=1668557105",
  link: "https://www.amazon.in/s?k=yoga+mat"
},

{
  name: "Gym Belt",
  price: "₹1299",
  img: "https://static-01.daraz.com.bd/p/c00f7a5206cff729e26f559fbaa14c56.jpg",
  link: "https://www.amazon.in/s?k=gym+lifting+belt"
},

{
  name: "Foam Roller",
  price: "₹899",
  img: "https://pixel.nymag.com/imgs/daily/strategist/2017/06/05/foam-rollers/triggerpoint.w710.h473.2x.jpg",
  link: "https://www.amazon.in/s?k=foam+roller"
},

{
  name: "Skipping Rope",
  price: "₹399",
  img: "https://images.bauerhosting.com/legacy/media/621e/1d6e/7ce5/9d50/de03/e0f3/best-weighted-skipping-rope-for-beginners.png?auto=format&w=1440&q=80",
  link: "https://www.amazon.in/s?k=skipping+rope"
}
];


  return (
    <>
    <div className="product-page">
      <div className="page-hero">
        <h1>Accessories</h1>
        <p>Everything you need for your workout</p>
      </div>

      <div className="products-grid">
        {items.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Buy Accessories</button>
</a>
          </div>
        ))}
      </div>
    </div>
    {/* INFO SECTION */}

<div className="info-section">
  <h2>Essential Gym Accessories</h2>

  <p>
    Gym accessories improve workout efficiency, safety, and overall
    training experience. From gloves and gym bags to resistance bands,
    the right accessories help maximize performance.
  </p>

  <p>
    GETFIT accessories are built using durable materials with modern
    designs. Whether you are a beginner or advanced athlete, our
    collection supports every fitness goal.
  </p>

  <div className="benefits">
    <div className="benefit-card">
      <h3>🎒 Easy Carry</h3>
      <p>Premium gym bags and bottles for daily workouts.</p>
    </div>

    <div className="benefit-card">
      <h3>🛡 Better Protection</h3>
      <p>Gym gloves and belts improve safety while lifting.</p>
    </div>

    <div className="benefit-card">
      <h3>🏃 Improved Training</h3>
      <p>Accessories help improve strength and flexibility.</p>
    </div>
  </div>
</div>

{/* REVIEWS */}

<div className="review-section">
  <h2>What Users Say</h2>

  <div className="reviews">
    <div className="review-card">
      <h3>Karan Joshi</h3>
      <p>
        “The gym bag quality is excellent and very spacious.”
      </p>
    </div>

    <div className="review-card">
      <h3>Pooja Shah</h3>
      <p>
        “Resistance bands are durable and perfect for home workouts.”
      </p>
    </div>

    <div className="review-card">
      <h3>Vikas More</h3>
      <p>
        “The gloves provide great grip during heavy lifting.”
      </p>
    </div>
  </div>
</div>

{/* FITNESS ACCESSORY TIPS */}

<div className="tips-section">
  <h2>Accessory Tips</h2>

  <ul>
    <li>✔ Always use gloves during heavy lifting.</li>
    <li>✔ Carry enough water during workouts.</li>
    <li>✔ Clean gym accessories regularly.</li>
    <li>✔ Use resistance bands for warm-up sessions.</li>
    <li>✔ Choose durable gym bags for daily use.</li>
  </ul>
</div>
    </>
  );
}

export default Accessories;
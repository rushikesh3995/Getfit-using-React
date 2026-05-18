import "./Products.css";

function Clothing() {
  const clothes = [
  {
    name: "Fuaark Oversized T-Shirt",
    price: "₹1499",
    rating: "4.8 ⭐",
    desc: "Premium oversized gym T-shirt with modern streetwear style.",
    img: "https://tse4.mm.bing.net/th/id/OIP.sjYqsux2kwQsoZE1qJ08UQAAAA?pid=ImgDet&w=184&h=276&c=7&dpr=1.3&o=7&rm=3",
    link: "https://fuaark.com/"
  },

  {
    name: "Fuaark Stride Joggers",
    price: "₹2199",
    rating: "4.7 ⭐",
    desc: "Comfortable slim-fit joggers designed for workouts and casual wear.",
    img: "https://fuaark.com/cdn/shop/files/FuaarkStrideJoggersLightGrey_6.jpg?v=1709985401&width=320",
    link: "https://fuaark.com/"
  },

  {
    name: "Fuaark Brookline Hoodie",
    price: "₹2899",
    rating: "4.9 ⭐",
    desc: "Premium heavyweight hoodie with stylish athletic fitting.",
    img: "https://th.bing.com/th/id/R.75b7cdab04d3b69938599413ffd698dd?rik=RVIqzKRwsUsKyA&riu=http%3a%2f%2ffuaark.com%2fcdn%2fshop%2ffiles%2fBrookline-Hoodie-_13.jpg%3fcrop%3dcenter%26height%3d1557%26v%3d1761920278%26width%3d1038&ehk=dD0kHjmD0%2fOmYw7attBIP8KG0tPNCV%2bYpXpervdNTkI%3d&risl=&pid=ImgRaw&r=0",
    link: "https://fuaark.com/"
  },

  {
    name: "Compression Full Sleeve",
    price: "₹1699",
    rating: "4.6 ⭐",
    desc: "Breathable compression wear for performance training and recovery.",
    img: "https://fuaark.com/cdn/shop/files/FuaarkHighNeckCompressionFullSleevesT-shirtBlack.jpg?crop=center&height=1529&v=1714027231&width=1038",
    link: "https://fuaark.com/"
  },

  {
    name: "Urban Deep Arm Tank",
    price: "₹999",
    rating: "4.5 ⭐",
    desc: "Lightweight gym tank for maximum airflow during workouts.",
    img: "https://th.bing.com/th/id/R.b19ac700cc25d22aa13c53c844d52dc1?rik=fIO0BCdKoHGY6g&riu=http%3a%2f%2ffuaark.com%2fcdn%2fshop%2ffiles%2fUrbanDeepArmNAVY_5.jpg%3fcrop%3dcenter%26height%3d1557%26v%3d1750399355%26width%3d1038&ehk=jh8pw%2b37wJsDkhH4rxPd4azd3DZMy7VF6QMOc2zsH4c%3d&risl=&pid=ImgRaw&r=0",
    link: "https://fuaark.com/"
  },

  {
    name: "Melange Dark Joggers",
    price: "₹2399",
    rating: "4.8 ⭐",
    desc: "Stylish dark grey joggers with premium stretchable fabric.",
    img: "https://th.bing.com/th/id/R.0ceb0f0063be8ce0b50f636c3934c2cf?rik=ad9lYAKQ5JgwTw&riu=http%3a%2f%2fwww.fuaark.nz%2fcdn%2fshop%2ffiles%2fFuaark-Melange-Joggers-Dark-Grey-1.jpg%3fcrop%3dcenter%26height%3d1557%26v%3d1757248231%26width%3d1038&ehk=9d5evWM1WNRfBUVag3MoGkPQcgJI%2b79WHKGdk%2b1v0qQ%3d&risl=&pid=ImgRaw&r=0",
    link: "https://fuaark.com/"
  },

  {
    name: "Fuaark Gym Tee",
    price: "₹1299",
    rating: "4.7 ⭐",
    desc: "Everyday training T-shirt made for comfort and performance.",
    img: "https://th.bing.com/th/id/OIP.uUN2-nQKxR8TMOK_-1P8-QHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://fuaark.com/"
  }
];
  return (
    <>
    <div className="product-page">
      <div className="page-hero">
        <h1>Gym Clothing</h1>
        <p>Train hard. Look better.</p>
      </div>

      <div className="products-grid">
        {clothes.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <a
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Buy Now</button>
</a>
          </div>
        ))}
      </div>
    </div>



    {/* BRAND STORY */}

<div className="info-section">
  <h2>Performance Meets Fashion</h2>

  <p>
    Modern fitness clothing is more than just gym wear. It represents
    confidence, discipline, and lifestyle. The right outfit can improve
    flexibility, reduce discomfort, and keep you focused throughout
    every workout session.
  </p>

  <p>
    GETFIT clothing is designed for athletes who want both comfort and
    style. Every product is created using lightweight materials and
    premium stitching for long-lasting durability.
  </p>
</div>

{/* FEATURE BOXES */}

<div className="benefits">
  <div className="benefit-card">
    <h3>🏃 Flexible Movement</h3>
    <p>
      Stretchable materials allow smooth movement during exercise.
    </p>
  </div>

  <div className="benefit-card">
    <h3>🌬 Breathable Fabric</h3>
    <p>
      Airflow technology keeps your body cool during workouts.
    </p>
  </div>

  <div className="benefit-card">
    <h3>✨ Premium Look</h3>
    <p>
      Stylish designs made for gym and casual streetwear.
    </p>
  </div>

  <div className="benefit-card">
    <h3>🧵 Durable Quality</h3>
    <p>
      Strong stitching and premium fabric for long-term use.
    </p>
  </div>
</div>

{/* COLLECTION SECTION */}

<div className="review-section">
  <h2>Popular Collections</h2>

  <div className="reviews">
    <div className="review-card">
      <h3>Training Collection</h3>
      <p>
        Designed for intense gym sessions with lightweight materials and
        sweat-resistant technology.
      </p>
    </div>

    <div className="review-card">
      <h3>Streetwear Collection</h3>
      <p>
        Trendy hoodies, oversized tees, and joggers inspired by modern
        fitness fashion.
      </p>
    </div>

    <div className="review-card">
      <h3>Running Collection</h3>
      <p>
        Ultra-comfortable clothing designed for speed, movement, and
        flexibility.
      </p>
    </div>
  </div>
</div>

{/* EXTRA CONTENT */}

<div className="tips-section">
  <h2>Why Athletes Choose GETFIT</h2>

  <ul>
    <li>✔ Premium imported fabric quality</li>
    <li>✔ Modern gym fashion designs</li>
    <li>✔ Comfortable fitting for all body types</li>
    <li>✔ Perfect for workout and daily use</li>
    <li>✔ Trusted by fitness enthusiasts</li>
  </ul>
</div>







    </>
  );
}

export default Clothing;
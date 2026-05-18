import "./transform.css";

function Transform() {
  return (
    <div className="tf-page">

      {/* HERO */}
      <section className="tf-hero">
        <h1>TRANSFORMATION STORIES</h1>
        <p>Real People. Real Results.</p>
      </section>

      {/* SECTION 1 */}
      <section className="tf-section">
        <div className="tf-img">
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/before-after-body-building-fitness-transformation-51-591571ea19812__700.jpg" alt="" />
        </div>

        <div className="tf-text">
          <h2>8 Month Transformation</h2>
          <p>
            A powerful journey from lean to muscular. This transformation shows
            what consistency, proper training, and nutrition can achieve.
          </p>
          <p>
            While visuals can be influenced by lighting and angles, the real
            change comes from discipline, routine, and mindset.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="tf-section reverse">
        <div className="tf-text">
          <h2>Workout Plan</h2>
          <ul>
            <li>4–6 days/week training</li>
            <li>75–90 min sessions</li>
            <li>Push / Pull / Legs split</li>
            <li>Resistance training focus</li>
            <li>12-week transformation cycle</li>
          </ul>
        </div>

        <div className="tf-img">
          <img src="https://fitnessprogramer.com/wp-content/uploads/2022/12/Bodyweight-workout-plan-day1-848x1200.png" alt="" />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="tf-section">
        <div className="tf-img">
          <img src="https://i.pinimg.com/originals/da/1f/97/da1f978fcad962a1a6faae3d8d173cb1.jpg" alt="" />
        </div>

        <div className="tf-text">
          <h2>12 Week Progress</h2>
          <p>
            From inconsistency to discipline. This client transformed not just
            physically but mentally — showing up every day and building habits.
          </p>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="tf-video">
        <h2>8 Month Transformation Journey</h2>

        {/* <iframe
          src="https://www.youtube.com/embed/Tco3-60_XxY"
          title="Transformation"
          allowFullScreen
        ></iframe> */}
        <iframe width="1017" height="572" src="https://www.youtube.com/embed/GsPvopOOyBs" title="Fitness Cinematic video | Gym commercial | Cinematic fitness film | Fitness commercial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

    </div>
  );
}

export default Transform;
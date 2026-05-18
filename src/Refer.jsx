
import "./Refer.css";

function Refer() {

  const handleInvite = async () => {

    const inviteText =
      "💪 Join me on GETFIT and start your transformation journey together!";

    if (navigator.share) {

      try {

        await navigator.share({
          title: "GETFIT Buddy Pass",
          text: inviteText,
          url: window.location.href,
        });

      } catch (err) {
        console.log(err);
      }

    } else {

      navigator.clipboard.writeText(inviteText);

      alert("Invite text copied successfully 🚀");

    }

  };

  return (

    <div className="refer-page">

      {/* HERO SECTION */}
      <section className="buddy-hero">

        <div className="buddy-overlay">

          <div className="hero-content">

            <span className="hero-badge">
              🔥 Buddy Pass Program
            </span>

            <h1>
              Train Together <br />
              Win Together 💪
            </h1>

            <p>
              Invite your workout partner and unlock exclusive gym rewards,
              free passes, supplements, and premium fitness perks.
            </p>

            <button
              className="invite-btn"
              onClick={handleInvite}
            >
              Invite Your Buddy
            </button>

          </div>

        </div>

      </section>

      {/* REWARD SECTION */}
      <section className="reward-section">

        <div className="section-heading">

          <h2>Rewards You Unlock</h2>

          <p>
            Every friend you invite gets you closer to amazing fitness rewards.
          </p>

        </div>

        <div className="reward-grid">

          <div className="reward-card">

            <div className="reward-icon">
              🥤
            </div>

            <h3>Invite 1 Friend</h3>

            <p>
              Get a free protein shake at partner gyms.
            </p>

          </div>

          <div className="reward-card">

            <div className="reward-icon">
              🔥
            </div>

            <h3>Invite 3 Friends</h3>

            <p>
              Unlock a 7-Day Elite Gym Pass.
            </p>

          </div>

          <div className="reward-card">

            <div className="reward-icon">
              🏆
            </div>

            <h3>Invite 5 Friends</h3>

            <p>
              Receive exclusive GETFIT merchandise.
            </p>

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="benefit-section">

        <div className="section-heading">

          <h2>Your Friend Also Wins</h2>

          <p>
            Your invited friends receive premium starter benefits instantly.
          </p>

        </div>

        <div className="benefit-grid">

          <div className="benefit-box">
            <h3>20% OFF</h3>
            <p>On first premium membership.</p>
          </div>

          <div className="benefit-box">
            <h3>Free Trial</h3>
            <p>Access top gyms for free.</p>
          </div>

          <div className="benefit-box">
            <h3>Diet Consultation</h3>
            <p>Get personalized fitness guidance.</p>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="cta-section">

        <div className="cta-box">

          <h2>
            Fitness Is Better Together 🚀
          </h2>

          <p>
            Start your fitness journey with your gym partner today.
          </p>

          <button
            className="invite-btn"
            onClick={handleInvite}
          >
            Share Buddy Pass
          </button>

        </div>

      </section>

    </div>

  );

}

export default Refer;




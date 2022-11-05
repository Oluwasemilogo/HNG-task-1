import React, { useEffect, useState } from "react";
import "../App.css";
import ProfileImg from "../Assets/profilePicture.jpg";
import share from "../Assets/share.png";
import shareMobile from "../Assets/shareMobile.png";
import slackImg from "../Assets/slack.png";
import Github from "../Assets/Icon.png";
import links from "../database";
import Links from "../components/Links";
import Footer from "../components/Footer";
import camera from "../Assets/camera.png";

function Home() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showCamera, setShowCamera] = useState(false);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="home">
      <section className="profile-section">
        <div className="share-icon">
          <img
            src={windowSize.innerWidth > 985 ? share : shareMobile}
            alt="share"
            className="share-icon-img"
          />
        </div>
        <div className="image-container">
          <img
            src={ProfileImg}
            alt="profile"
            className="profile-image"
            onMouseLeave={() => setShowCamera(false)}
            onMouseEnter={() => setShowCamera(true)}
          />
          <div
            className={`camera-container ${showCamera ? "show" : "hide"}`}
            onMouseEnter={() => setShowCamera(true)}
            onMouseLeave={() => setShowCamera(false)}
          >
            <img src={camera} alt="camera" className="camera" />
          </div>
          <h3 className="twitter-name">_logoh</h3>
          <h3 className="slack">Oluwasemilogo</h3>
        </div>
      </section>
      <div className="hero-section">
        {links.map((link) => (
          <Links key={link.id} name={link.name} link={link.link} id={link?.id} redirect={link?.redirect} />
        ))}
        <div className="social-icons">
          <img src={slackImg} alt="slack-logo" className="slack-logo" />
          <a href="https://github.com/Oluwasemilogo" className="github-img">
            <img src={Github} alt="Github-logo" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

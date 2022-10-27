import "./App.css";
import ProfileImg from "./Assets/profilePicture.jpg";
import share from "./Assets/share.png";
import shareMobile from "./Assets/shareMobile.png";
import links from "./database";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <section className="profile-section">
        <div className="image-container">
          <img src={ProfileImg} alt="profile Image" className="profile-image" />
          <h3 className="twitter">_logoh</h3>
          <h3 className="slack">Oluwasemilogo</h3>
        </div>
      </section>
      <main>
        {links.map((link) => (
          <Link key={link.id} name={link.name} link={link.link} id={link?.id} />
        ))}
      </main>
    </div>
  );
}

export default App;

import profilePic from './Resource/Profilepic.jpg';
import parallax1 from './Resource/code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Nav-Header">
        <button className="btn-header">Contact Me</button>
        <button className="btn-header">Experience</button>
        <button className="btn-header">Skill</button>
        <button className="btn-header">About</button>
      </div>
      <div className="ProfilePic">
        <img className="img-responsive" src={profilePic}/>
        <div className="ProfileContent">
        <div className="name-banner">Berno Raj A</div>
        <div className="sub-banner">Full Stack Engineer</div>
        <pre className="quote-banner">
            {
            `do {
            succeed=try();
            } while(!succeed);`
            }
          </pre>
        </div>
      
       
      </div>
      <div className="ParallaxSection">
        <img src={parallax1}></img>
      </div>
    
    </div>
  );
}

export default App;

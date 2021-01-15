import profilePic from './Resource/Profilepic.jpg';
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
        <div>
        <div className="name-banner">Berno Raj</div>
        <div className="sub-banner">Full Stack Engineer</div>
        </div>
      
       
      </div>
    
    </div>
  );
}

export default App;

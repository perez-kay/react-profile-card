import React from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faReact,
  faLinux,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function App() {
  return <ProfileCard />;
}

function ProfileCard() {
  return (
    <div className="card">
      <Profile
        name="Kayla Perez"
        bio="An aspiring Full-Stack Developer working on cool projects. I have a
          strong background in Python as it's my favorite language to program
          with. However, learning React and refreshing my JavaScript skills has
          been quite fun! When I'm not coding, I love to draw, pet my cat, and
          drink coffee."
      />
    </div>
  );
}

function Profile(props) {
  return (
    <>
      <img src="/profile-picture.jpeg" alt="profile" />
      <div className="profile">
        <h1>{props.name}</h1>
        <hr />
        <p>{props.bio}</p>
        <h2>Skills</h2>
        <hr />
        <Skill name="HTML" color="#fab170" icon={faHtml5} />
        <Skill name="CSS" color="#70bfff" icon={faCss3Alt} />
        <Skill name="JavaScript" color="#fae570" icon={faJs} />
        <Skill name="Python" color="#98b8eb" icon={faPython} />
        <Skill name="React" color="#9ffcf3" icon={faReact} />
        <Skill name="SQL" color="#fc9fba" icon={faDatabase} />
        <Skill name="Linux" color="#d1b3fc" icon={faLinux} />
      </div>
    </>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <FontAwesomeIcon icon={props.icon} size="lg" />
      <span> {props.name}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

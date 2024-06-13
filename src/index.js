import React from 'react';
import ReactDOM from 'react-dom/client';
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
        <Skill name="HTML/CSS" color="#fab170" />
        <Skill name="Python" color="#70b7fa" />
        <Skill name="JavaScript" color="#fae570" />
        <Skill name="React" color="#9ffcf3" />
        <Skill name="SQL" color="#fc9fba" />
        <Skill name="Linux" color="#d1b3fc" />
      </div>
    </>
  );
}

function Skill(props) {
  return (
    <p className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

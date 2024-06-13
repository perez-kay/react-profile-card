import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="card">
      <img src="/profile-picture.jpeg" alt="profile" />
      <div className="profile">
        <Profile />
        <SkillsList />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <>
      <h1>Kayla Perez</h1>
      <p>
        Just an aspiring Web Developer working on cool projects. BS in Computer
        Science, June 2022. When I'm not coding, I love to draw, pet my cat, and
        drink coffee!
      </p>
    </>
  );
}

function SkillsList() {
  return (
    <>
      <Skill name="HTML/CSS" />
      <Skill name="Python" />
      <Skill name="JavaScript" />
      <Skill name="React" />
      <Skill name="SQL" />
      <Skill name="Linux" />
    </>
  );
}

function Skill(props) {
  return <p style={{ color: props.color }}>{props.name}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

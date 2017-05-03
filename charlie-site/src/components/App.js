import React, { Component } from 'react';
import profilePicture from '../assets/charlie-headshot-crop.jpg';
import { skillSections } from '../data/skills';
import SkillLogo from './skillLogo';
import Waypoint from 'react-waypoint';

class App extends Component {
  getSkillsSection(){
    return skillSections.map((c, i)=>{
      const skills = c.skills.map((skill, i)=>{
        return <SkillLogo skill={skill} />
      })
      return (
        <div className="list" key={i}>
          <h4>{c.sectionName}</h4>
          <div className="skills-list">
            {skills}
          </div>
        </div>
      )
    });
  }

  render() {
    const removeHidden = (selector) => {
      document.querySelector(selector).classList.remove("hidden");
    }

    return (
      <div className="App">
        <div className="app__header">
          <div className="app__hi">
            <div className="h">h</div>
            <div className="i">i</div>
            <div className="p">.</div>
          </div>
        </div>
        <Waypoint onEnter={()=>removeHidden(".profile-section")} bottomOffset="150px">
          <section className="app__section profile-section hidden">
            <div className="profile-image">
              <img src={profilePicture} className="profile-image__img" alt="charlie"/>
            </div>
            <div className="para">
              <p>My name is <strong>Charlie Chapman</strong> and I write software for a living.</p>
            </div>
          </section>
        </Waypoint>
        <Waypoint onEnter={()=>removeHidden(".skills-section")} bottomOffset="150px">
          <section className="app__section app__section--lists skills-section hidden">
            <h1 className="section-header">I have a some <span className="bold">skills</span></h1>
            {this.getSkillsSection()}
          </section>
        </Waypoint>
      </div>
    );
  }
}

export default App;

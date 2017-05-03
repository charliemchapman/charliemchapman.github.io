import React, { Component } from 'react';
import profilePicture from '../assets/charlie-headshot-crop.jpg';
import { skillSections } from '../data/skills';
import SkillLogo from './skillLogo';

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
    return (
      <div className="App">
        <div className="app__header">
          <div className="app__hi">
            <div className="h">h</div>
            <div className="i">i</div>
            <div className="p">.</div>
          </div>
        </div>
        <section className="app__section">
          <div className="profile-image">
            <img src={profilePicture} className="profile-image__img" alt="charlie"/>
          </div>
          <div className="para">
            <p>My name is <strong>Charlie Chapman</strong> and I write software for a living.</p>
          </div>
        </section>
        <h1 className="section-header">I have a some <span className="bold">skills</span></h1>
        <secion className="app__section app__section--lists">
          {this.getSkillsSection()}
        </secion>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import profilePicture from '../assets/charlie-headshot-crop.jpg';
import { skillSections } from '../data/skills';
import SkillLogo from './skillLogo';
import Waypoint from 'react-waypoint';

class Resume extends Component {
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
      <div className="resume">
        <div className="resume__header">
          <div className="resume__hi">
            <div className="h">h</div>
            <div className="i">i</div>
            <div className="p">.</div>
          </div>
        </div>
        <div className="resume__devider"/>
        <Waypoint onEnter={()=>removeHidden(".profile-section")} bottomOffset="150px">
          <section className="resume__section profile-section hidden">
            <div className="profile-image">
              <img src={profilePicture} className="profile-image__img" alt="charlie"/>
            </div>
            <div className="para">
              <p>My name is <strong>Charlie Chapman</strong> and I write software for a living.</p>
            </div>
          </section>
        </Waypoint>
        <Waypoint onEnter={()=>removeHidden(".external-links")} bottomOffset="150px">
          <section className="resume__section resume__section--lists external-links hidden">
            <div className="para">Quick Links</div>
            <div className="external-buttons">
              <a href="https://drive.google.com/open?id=0B3RH7R64TJImaXJIdmE0LU1DdVk">Resume (pdf)</a>
              <a href="http://charliemchapman.myportfolio.com">Video Portfolio</a>
            </div>
          </section>
        </Waypoint>
        <Waypoint onEnter={()=>removeHidden(".skills-section")} bottomOffset="150px">
          <section className="resume__section resume__section--lists skills-section hidden">
            <h1 className="section-header">I have some <span className="bold">skills</span></h1>
            {this.getSkillsSection()}
          </section>
        </Waypoint>
      </div>
    );
  }
}

export default Resume;

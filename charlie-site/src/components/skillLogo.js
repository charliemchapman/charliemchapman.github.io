import React, { Component } from 'react';

class SkillLogo extends Component {
  render() {
    const { skill } = this.props;

    return (
      <div className="skill-logo">
        <div className="skill-logo__circle">
          <img src={skill.logo} className="skill-logo__img" alt={this.props.skill.text} height="100%" width="auto"/>
        </div>
        <div className="skill-logo__label">
          {skill.text}
        </div>
      </div>
    );
  }
}

export default SkillLogo;

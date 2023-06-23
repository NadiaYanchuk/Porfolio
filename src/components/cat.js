import React, { Component } from "react";

export class Cat extends Component {
  state = {
    type: this.props.line.type,
    value: this.props.line.value
  };

  style = {
    align: "middle"
  };

  information = {
    about:
      "Motivated Junior Front-End Developer with a strong desire to expand my knowledge in different technologies. As a student with 4 years of specialized college training, I'm committed to staying in the field of information technology. Also, I have experience in design and back-end development. I'm excited to contribute my creativity, technical expertise, and a passion for front-end development to your team. ",
    education:
      "Specialised Secondary Education, Centru de Excelenta in Informatica si Tehnologii Informationale, Chisinau (Sep, 2019 - Jun, 2023)",
    projects: [
      {
        projectName: "1. Website about Chickens",
        liveDemo: "https://nadiayanchuk.github.io/Chicken/",
        linkToGithub: "https://github.com/NadiaYanchuk/Chicken"
      },
      {
        projectName: "2. Working with Figma",
        linkToGithub: "https://github.com/NadiaYanchuk/Fraud"
      },
      {
        projectName: "3. Website with personal design",
        liveDemo: "https://nadiayanchuk.github.io/Golf/",
        linkToGithub: "https://github.com/NadiaYanchuk/Golf"
      }
    ],
    skills: [
      "HTML, CSS/SCSS/SASS",
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "Styled Components",
      "Ant design",
      "PHP",
      "Laravel",
      "MySQL",
      "Git",
      "Swagger",
      "UI/UX design",
      " ",
      "Russian: Native",
      "Ukrainian: Native",
      "English: Pre-Intermediate"
    ],
    socials: [
      {
        platform: "Github",
        link: "https://github.com/NadiaYanchuk"
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/in/nadia-yanchuk/"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <p className="prompt">{this.props.line.value}</p>
        {this.handelCd()}
      </React.Fragment>
    );
  }

  handelCd = () => {
    const navigation = this.state.value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      if (lower === "about") {
        return <p className="result">{this.information.about}</p>;
      } else if (lower === "education") {
        return <p className="result">{this.information.education}</p>;
      } else if (lower === "projects" || lower === "project") {
        return (
          <React.Fragment>
            {this.information.projects.map((everyProject) => {
              return (
                <p className="result">
                  {everyProject.projectName}
                  {everyProject.liveDemo && (
                    <a href={everyProject.liveDemo} target="_blank">
                      Live Link
                    </a>
                  )}
                  <a href={everyProject.linkToGithub} target="_blank">
                    GitHub Code
                  </a>
                </p>
              );
            })}
          </React.Fragment>
        );
      } else if (lower === "skills") {
        return (
          <React.Fragment>
            <p className="result">
                {this.information.skills.map((skill, index) => (
                <p key={index}>{skill}</p>
                ))}
            </p>
          </React.Fragment>
        );
      } else if (lower === "socials") {
        return (
          <React.Fragment>
            {this.information.socials.map((social) => (
              <p className="result" key={social.platform}>
                <a href={social.link} target="_blank">
                  {social.platform}
                </a>
              </p>
            ))}
          </React.Fragment>
        );
      } else {
        return <p className="result">Oops wrong input</p>;
      }
    } else {
      return <p className="result">Oops wrong input</p>;
    }
  };
}

export default Cat;
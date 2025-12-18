import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "DevOps QR Code",
    desc: "The goal is to get hands-on with DevOps practices like containerization, CI/CD and monitoring.",
    url: "https://github.com/lucifer47C/DevOps-Practice",
  },
  {
    id: 2,
    title: "TrackNClassify",
    desc: "A multilayered authentication system reducing unauthorized access by 80%, with QR code and RFID integration. Deployed on the cloud with 99% uptime and IoT components.",
    url: "https://github.com/lucifer47C/TrackNClassify-Major",
  },
  {
    id: 3,
    title: "FitZee",
    desc: "An Android app for BMI calculation and meal calorie estimation through image recognition. Features a user interface created with Java and XML.",
    url: "https://github.com/lucifer47C/FitZee-Minor",
  },
  {
    id: 4,
    title: "Cloud Resume Challenge",
    desc: "The main goal is to get hands-on with some cloud technologies like Lambda, IAM etc.",
    url: "https://github.com/lucifer47C/The-Cloud-Resume-Challenge",
  },
];

export default Projects;

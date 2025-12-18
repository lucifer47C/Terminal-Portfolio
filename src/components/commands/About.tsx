import { useContext } from "react";
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";
import { termContext } from "../Terminal";

const About: React.FC = () => {
  const { setCommand } = useContext(termContext);

  const handleLinkClick = (link: string) => {
    setCommand?.(link);
  };

  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Steve Yadav</HighlightSpan>!
      </p>
      <p>
        I’m a <HighlightSpan>Cloud and DevOps Engineer</HighlightSpan> with hands-on experience in AWS and Azure, 
        specializing in building scalable, secure, and reliable application deployments.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;

import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "M.Tech in Computer Engineering (Cyber Security) ",
    desc: "National Institute of Technology, Kurukshetra | 2025 ~ Present",
  },
  {
    title: "B.Tech (Hons) in Computer Science and Engineering",
    desc: "UPES | 2021 - 2025",
  },
];

export default Education;

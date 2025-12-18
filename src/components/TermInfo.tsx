import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.steveyadav.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;

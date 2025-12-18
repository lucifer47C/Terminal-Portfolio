import { useContext } from "react";
import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands, termContext } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  const { setCommand } = useContext(termContext);

  const handleCmdClick = (cmd: string) => {
    setCommand?.(cmd);
  };

  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd} onClick={() => handleCmdClick(cmd)}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>Tab or Ctrl + i&nbsp; =&gt; autocompletes the command</div>
        <div>Up Arrow {generateTabs(5)} =&gt; go back to previous command</div>
        <div>Ctrl + l {generateTabs(5)} =&gt; clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;

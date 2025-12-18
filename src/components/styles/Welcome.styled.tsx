import styled, { DefaultTheme } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;      
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;

  @media (max-width: 932px) {
    flex-wrap: wrap;     
    gap: 1rem;
  }

  .info-section {
    flex: 1;              
    min-width: 250px;    
  }

  .illu-section {
    flex: 1;             
    min-width: 200px;
    display: flex;
    justify-content: center; 
    @media (max-width: 932px) {
      justify-content: center; 
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
`;

const asciiText = `
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  white-space: pre;
  line-height: 1.1;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.primary};
  text-shadow: 0 0 5px rgba(0, 255, 200, 0.5);
`;

export const PreName = styled.pre`
  ${asciiText}
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  ${asciiText}
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  white-space: pre;
  line-height: 1.1;
  font-size: 0.55rem;
  text-align: center;      /* align text to right */
  color: ${({ theme }) => theme.colors?.text || "#00ffcc"};
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 0.45rem;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary || "#0ff"};
  font-weight: bold;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary || "#00ffff"};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary || "#00ffff"};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom-style: solid;
    color: ${({ theme }) => theme.colors?.primary || "#0ff"};
  }
`;
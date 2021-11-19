import styled from "styled-components";

interface Props {
  workingmuda: boolean;
}
interface PropsReset {
  reset: boolean;
}

export const Container = styled.div<Props>`
  margin: 0 auto;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  align-items: center;
  background-color: ${(props) => (props.workingmuda ? "#13e664" : "#e24a4a")};

  color: #000000;
`;
export const Esconder = styled.div<PropsReset>`
  display: ${(PropsReset) => (PropsReset.reset ? "flex" : "none !important")};
`;

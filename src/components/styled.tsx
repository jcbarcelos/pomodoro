import styled from "styled-components";

interface Props {
  workingButton: boolean;
}

export const Pomodoro = styled.div<Props>`
  text-align: center;
  background-color: #fff;
  color: #000000;
  flex: 1;
  width: 80%;
  border-radius: 5px;
  margin: 0 auto;
  font-family: Roboto sans-serif;

  h2 {
    font-size: 20px;
    margin-bottom: 2px;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 20px;

    button {
      width: 100px;
      border-radius: 8px;
      border: 0px solid;
      height: 35px;
      color: #fff;
      background-color: ${(props) =>
        props.workingButton ? "#055222" : "#e24a4a"};
      cursor: pointer;

      &:hover {
        background-color: ${(props) =>
          props.workingButton ? "#055222" : "#e24a4a"};
      }
    }
  }
`;

export const Time = styled.div`
  font-size: 70px;
  color: #000000;
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 20px;
`;
export const Details = styled.div`
  width: 80%;
  justify-content: flex-start;
  display: inline;
  margin-left: -10%;
  ul {
    list-style: none;
    li {
      padding-top: 2px;
    }
  }
`;
export const WorkingButton = styled.button``;

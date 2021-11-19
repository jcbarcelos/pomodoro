import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

function Button(props: Props): JSX.Element {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
}
export default React.memo(Button);

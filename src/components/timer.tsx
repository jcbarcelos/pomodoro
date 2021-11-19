import React from "react";
import { secondsToMinutes } from "../utils/seconds-to-minutes";

import { Time } from "./styled";

interface Props {
  mainTime: number;
}

function Timer(props: Props): JSX.Element {
  return <Time>{secondsToMinutes(props.mainTime)}</Time>;
}
export default React.memo(Timer);

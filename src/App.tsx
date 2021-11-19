import React from "react";
import PomodoroTime from "./components/pomodoro-time";

function App(): JSX.Element {
  return (
    <PomodoroTime
      pomodoroTime={10}
      shortRestTime={300}
      longRestTime={900}
      cycles={4}
    />
  );
}
export default App;

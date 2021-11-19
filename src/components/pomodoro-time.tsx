import React from "react";
import { useInterval } from "../hooks/use-interval";
import { Pomodoro, Details } from "./styled";
import Button from "./button";
import Timer from "./timer";
import { Container, Esconder } from "../styles/styled";
import inicioAudio from "../sound/1.mp3";
import fimAudio from "../sound/2.mp3";
import { secondsToTime } from "../utils/seconds-to-time";

const audioStartWorking = new Audio(inicioAudio);
const audioStopWorking = new Audio(fimAudio);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
function PomodoroTime(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeConfig, setTimeConfig] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = React.useState(
    new Array(props.cycles - 1).fill(true)
  );
  const [completedCycles, setCompletedCycles] = React.useState(0);
  const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = React.useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeConfig ? 1000 : null
  );
  const configureWork = React.useCallback(() => {
    setTimeConfig(true);
    setWorking(true);
    setResting(true);
    setMainTime(props.pomodoroTime);
    // audioStartWorking.play();
  }, [setTimeConfig, setWorking, setResting, setMainTime, props.pomodoroTime]);

  const configurePause = React.useCallback(
    (timeConfig: boolean) => {
      setTimeConfig(timeConfig);
      setWorking(timeConfig);
      setResting(true);
      // audioStartWorking.play();
    },
    [setTimeConfig, setWorking, setResting]
  );
  const configureReset = React.useCallback(
    (timeConfig: boolean, long: boolean) => {
      setTimeConfig(timeConfig);
      setWorking(timeConfig);
      setResting(timeConfig);
      setMainTime(props.pomodoroTime);
      if (long) {
        setMainTime(props.longRestTime);
        //  audioStopWorking.play();
      } else {
        setMainTime(props.shortRestTime);
        // audioStopWorking.play();
      }
    },
    [
      setTimeConfig,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime
    ]
  );
  React.useEffect(() => {
    if (mainTime > 0) return;
    if (working && cyclesQtdManager.length > 0) {
      configureReset(!resting, false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureReset(!resting, false);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }
    if (working) setNumberOfPomodoro(numberOfPomodoro + 1);
    if (resting) configureWork();
    if (timeConfig) {
      setWorking(true);
    }
  }, [
    working,
    resting,
    mainTime,
    completedCycles,
    numberOfPomodoro,
    cyclesQtdManager,
    configureReset,
    setCyclesQtdManager,
    setFullWorkingTime,
    configureWork,
    props.cycles
  ]);

  return (
    <>
      <Container workingmuda={Boolean(working)}>
        <Pomodoro workingButton={Boolean(working)}>
          <h2>Você está: {working ? "Trabalhando" : "Descansando"} </h2>
          <Timer mainTime={mainTime} />
          <div>
            <Button
              text={!timeConfig ? "Start" : "Restart"}
              onClick={configureWork}
            ></Button>
            <Esconder reset={Boolean(resting)}>
              <Button
                text="Reset"
                onClick={() => configureReset(!resting, false)}
              ></Button>
            </Esconder>

            <Button
              text={timeConfig ? "Pause" : "Play"}
              onClick={() => configurePause(!timeConfig)}
            ></Button>
          </div>
          <Details>
            <ul>
              <li>Ciclos concluidos: {completedCycles}</li>
              <li>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</li>
              <li>Pomodoros concluidos: {numberOfPomodoro}</li>
            </ul>
          </Details>
        </Pomodoro>
      </Container>
    </>
  );
}
export default PomodoroTime;

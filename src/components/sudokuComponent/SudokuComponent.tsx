import { useEffect, useState } from "react";
import { ResponseData, SudokuApi } from "../../api/sudokuApi";
import { Grid } from "../grid/Grid";
import { Input } from "../input/Input";
import { Score } from "../score/Score";
import "./SudokuComponent.css";

export interface SudokuComponentProps {}
export interface Sudoku {
  game: string[];
  solution: string[];
}
export const SudokuComponent: React.FC<SudokuComponentProps> = () => {
  // game grid
  const [game, setGame] = useState<string[]>([]);
  const [solution, setSolution] = useState<string[]>([]);

  // error counter
  const [falseInputCounter, setFalseInputCounter] = useState<number>(0);

  // timer
  const [seconds, setSeconds] = useState<number>(0);
  const [timeRunning, setTimeRunning] = useState<boolean>(false);
  //
  const [gameSolved, setGameSolved] = useState<boolean>(false);
  //
  const [activeCell, setActiveCell] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRunning) {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const onInputButton = (value: number) => {
    console.log(activeCell);
    const copy = [...game];
    if (solution[activeCell] === value.toString()) {
      copy[activeCell] = value.toString();
    } else {
      setFalseInputCounter(falseInputCounter + 1);
    }

    setGame(copy);
    checkSolved();
    if (gameSolved) {
      setTimeRunning(false);
    }
  };

  const checkSolved = () => {
    let solved = true;
    game.forEach((x: String) => {
      if (x === "0") {
        solved = false;
      }
    });
    setGameSolved(solved);
  };

  const getNewGame = async (diff: string) => {
    const newGame = await SudokuApi.getSudoku(diff);
    const sudoku = fromResponseToGame(newGame);
    setGame(sudoku.game);
    setSolution(sudoku.solution);
    setFalseInputCounter(0);
    setSeconds(0);
    setTimeRunning(true);
    setGameSolved(false);
  };

  const fromResponseToGame = (response: ResponseData): Sudoku => {
    return {
      game: response.unsolvedGame.split(","),
      solution: response.solvedGame.split(","),
    };
  };

  const onClick = (index: number) => {
    setActiveCell(index);
  };

  const render = (): React.ReactElement => {
    return (
      <div className="sudokuComponent">
        <Score seconds={seconds} mistakes={falseInputCounter}></Score>
        <Grid
          values={game}
          clickedCell={activeCell}
          onClick={(index) => onClick(index)}
        />

        <Input onInputButton={onInputButton}></Input>
        <div className="newGameButtonContainer">
          <button className="easyButton" onClick={() => getNewGame("EASY")}>
            Easy
          </button>
        </div>
      </div>
    );
  };
  return render();
};

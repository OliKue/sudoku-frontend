import { useEffect, useState } from "react";
import { ResponseData, SudokuApi } from "../api/sudokuApi";
import { Grid } from "../components/grid/Grid";
import "./HomePage.css";

export interface HomePageProps {}
export interface Sudoku {
  game: string[];
  solution: string[];
}
export const HomePage: React.FC<HomePageProps> = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRunning) {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const onChangeGame = (index: number, value: string) => {
    const copy = [...game];
    copy[index] = value;
    setGame(copy);
    checkSolved();
    if (gameSolved) {
      setTimeRunning(false);
    }
  };

  const checkSolved = () => {
    let solved = true;
    game.forEach((x) => {
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

  const render = (): React.ReactElement => {
    return (
      <div className="homePage">
        <h1>Sudoku Api</h1>
        <div className="gridContainer">
          <Grid
            solutionValues={solution}
            values={game}
            onChange={onChangeGame}
            onFalseInput={() => setFalseInputCounter(falseInputCounter + 1)}
          />
        </div>
        <div className="scoreContainer">
          <span>Mistakes: {falseInputCounter}</span>
          <span> - </span>
          <span>Time: </span>
          <span>{("0" + Math.floor((seconds / 3600) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((seconds / 60) % 60)).slice(-2)}:</span>
          <span>{("0" + (seconds % 60)).slice(-2)}</span>
        </div>
        <div className="buttonContainer">
          <button className="easyButton" onClick={() => getNewGame("EASY")}>
            Easy
          </button>
          <button className="mediumButton" onClick={() => getNewGame("EASY")}>
            Medium
          </button>
          <button className="hardButton" onClick={() => getNewGame("EASY")}>
            Hard
          </button>
        </div>
      </div>
    );
  };

  return render();
};

import { SudokuComponent } from "../components/sudokuComponent/SudokuComponent";
import "./HomePage.css";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const render = (): React.ReactElement => {
    return (
      <div className="homePage">
        <div className="title">
          <h1>Sudoku Api</h1>
        </div>
        <div className="center">
          <SudokuComponent></SudokuComponent>
        </div>
      </div>
    );
  };
  return render();
};
